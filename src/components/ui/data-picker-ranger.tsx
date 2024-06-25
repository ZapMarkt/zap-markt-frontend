'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useForm } from 'react-hook-form';
import { IoCalendar, IoSearch } from 'react-icons/io5';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const FormSchema = z.object({
  dateForm: z.object(
    {
      from: z.date(),
      to: z.date().optional(),
    },
    { message: 'Insira uma data válida' },
  ),
});

export function DatePickerWithRange({}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDateRange] = useState<DateRange | undefined>();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setDateRange(data.dateForm);
    setIsPopoverOpen(false);
  }

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[258px] max-h-[58px] px-3 py-[17px] text-left font-normal border border-customMkt-gray7 rounded-[5px] flex justify-center items-center gap-[10px] group hover:text-customMkt-primary/80 hover:border-customMkt-primary/80 hover:fill-customMkt-primary',
            !date?.from && !date?.to && 'text-muted-foreground',
          )}
        >
          {date?.from ? (
            date?.to ? (
              <>
                {format(date.from, 'dd/MM/yyyy', { locale: ptBR })} -{' '}
                {format(date.to, 'dd/MM/yyyy', { locale: ptBR })}
              </>
            ) : (
              format(date.from, 'dd/MM/yyyy', { locale: ptBR })
            )
          ) : (
            <span className="text-lg text-customMkt-gray6 font-medium leading-customNormal group-hover:text-customMkt-primary">
              Data personalizada
            </span>
          )}
          <IoCalendar
            className={cn(
              'ml-auto h-6 w-6 group-hover:fill-customMkt-primary',
              isPopoverOpen ? 'fill-customMkt-primary' : 'fill-customMkt-gray6',
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="dateForm"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Calendar
                    className={{
                      day_range_middle: 'aria-selected:bg-customMkt-secondary',
                    }}
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={field.value}
                    onSelect={(range) => {
                      field.onChange(range);
                      setDateRange(range);
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="customLg" variant="customPrimary" type="submit">
              <IoSearch className="mr-1" /> Buscar
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
