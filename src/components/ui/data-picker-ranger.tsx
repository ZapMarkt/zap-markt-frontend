'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { IoCalendar } from 'react-icons/io5';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const FormSchema = z.object({
  dob: z
    .object({
      from: z
        .date({
          required_error: 'Start date is required.',
        })
        .nullable(),
      to: z
        .date({
          required_error: 'End date is required.',
        })
        .nullable()
        .optional(),
    })
    .refine((data) => data.from && data.to && data.from <= data.to, {
      message: 'End date cannot be before start date',
      path: ['to'],
    }),
});

export function DatePickerWithRange({}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[258px] max-h-[58px] px-3 py-[17px] text-left font-normal border border-customMkt-gray7 rounded-[5px] flex justify-center items-center gap-[10px]',
                        !(field.value?.from && field.value?.to) &&
                          'text-muted-foreground',
                      )}
                    >
                      {field.value?.from && field.value?.to ? (
                        `${format(field.value.from, 'PPP')} - ${format(
                          field.value.to,
                          'PPP',
                        )}`
                      ) : (
                        <span className="text-lg text-customMkt-gray6 font-medium leading-customNormal">
                          Data personalizada
                        </span>
                      )}
                      <IoCalendar className="ml-auto h-6 w-6 fill-customMkt-gray6" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={field.value as DateRange}
                    onSelect={(range) => {
                      setDate(range as DateRange);
                      field.onChange({
                        from: range?.from || undefined,
                        to: range?.to || null,
                      });
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
