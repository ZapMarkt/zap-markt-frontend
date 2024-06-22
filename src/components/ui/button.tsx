import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  'notinline-flex notitems-center notjustify-center notwhitespace-nowrap notrounded-md nottext-sm notfont-medium notring-offset-background nottransition-colors focus-visible:notoutline-none focus-visible:notring-2 focus-visible:notring-ring focus-visible:notring-offset-2 disabled:notpointer-events-none disabled:notopacity-50',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        default:
          'notbg-primary nottext-primary-foreground hover:notbg-primary/90',
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          'notbg-destructive nottext-destructive-foreground hover:notbg-destructive/90',
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          'notborder notborder-input notbg-background hover:notbg-accent hover:nottext-accent-foreground',
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
          'notbg-secondary nottext-secondary-foreground hover:notbg-secondary/80',
        ghost: 'hover:notbg-accent hover:nottext-accent-foreground',
        link: 'nottext-primary notunderline-offset-4 hover:notunderline',
        customPrimary:
          'bg-customMkt-primary text-white hover:bg-customMkt-primary/80 transition disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-700',
        customSecondary:
          'bg-customMkt-secondary text-customMkt-primary hover:bg-customMkt-secondary/80 transition disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-700',
        customError:
          'bg-customMkt-error text-white hover:bg-customMkt-error/80 transition disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-700',
        customOutiline:
          'border border-customMkt-gray7 text-customMkt-gray6 rounded-[5px] hover:text-customMkt-primary/80 hover:border-customMkt-primary/80 hover:fill-customMkt-primary group disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-700',
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        default: 'noth-10 notpx-4 notpy-2',
        sm: 'noth-9 notrounded-md notpx-3',
        lg: 'noth-11 notrounded-md notpx-8',
        icon: 'noth-10 notw-10',
        customMd:
          'px-[12px] py-[17px] text-lg font-semibold shadow-customButton rounded-[8px] w-[264px] max-h-[58px] flex justify-center items-center leading-[22px] w-full',
        customLg:
          'px-[22px] py-[18px] text-lg font-medium shadow-customButton rounded-[8px] w-[264px] max-h-[58px] flex justify-center items-center leading-[22px] w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

