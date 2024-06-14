import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'notinline-flex notitems-center notjustify-center notwhitespace-nowrap notrounded-md nottext-sm notfont-medium notring-offset-background nottransition-colors focus-visible:notoutline-none focus-visible:notring-2 focus-visible:notring-ring focus-visible:notring-offset-2 disabled:notpointer-events-none disabled:notopacity-50',
  {
    variants: {
      variant: {
        default:
          'notbg-primary nottext-primary-foreground hover:notbg-primary/90',
        destructive:
          'notbg-destructive nottext-destructive-foreground hover:notbg-destructive/90',
        outline:
          'notborder notborder-input notbg-background hover:notbg-accent hover:nottext-accent-foreground',
        secondary:
          'notbg-secondary nottext-secondary-foreground hover:notbg-secondary/80',
        ghost: 'hover:notbg-accent hover:nottext-accent-foreground',
        link: 'nottext-primary notunderline-offset-4 hover:notunderline',
        customPrimary:
          'bg-customMkt-primary text-white hover:bg-customMkt-primary/80 transition',
        customSecondary:
          'bg-customMkt-secondary text-customMkt-primary hover:bg-customMkt-secondary/80 transition',
        customError:
          'bg-customMkt-error text-white hover:bg-customMkt-error/80 transition',
      },
      size: {
        default: 'noth-10 notpx-4 notpy-2',
        sm: 'noth-9 notrounded-md notpx-3',
        lg: 'noth-11 notrounded-md notpx-8',
        icon: 'noth-10 notw-10',
        customLg:
          'px-[22px] py-[18px] text-lg font-semibold shadow-customButton rounded-[8px] w-[264px] max-h-[58px] flex justify-center items-center leading-[22px]',
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
