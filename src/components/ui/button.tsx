import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "notinline-flex notitems-center notjustify-center notwhitespace-nowrap notrounded-md nottext-sm notfont-medium notring-offset-background nottransition-colors focus-visible:notoutline-none focus-visible:notring-2 focus-visible:notring-ring focus-visible:notring-offset-2 disabled:notpointer-events-none disabled:notopacity-50",
  {
    variants: {
      variant: {
        default: "notbg-primary nottext-primary-foreground hover:notbg-primary/90",
        destructive:
          "notbg-destructive nottext-destructive-foreground hover:notbg-destructive/90",
        outline:
          "notborder notborder-input notbg-background hover:notbg-accent hover:nottext-accent-foreground",
        secondary:
          "notbg-secondary nottext-secondary-foreground hover:notbg-secondary/80",
        ghost: "hover:notbg-accent hover:nottext-accent-foreground",
        link: "nottext-primary notunderline-offset-4 hover:notunderline",
      },
      size: {
        default: "noth-10 notpx-4 notpy-2",
        sm: "noth-9 notrounded-md notpx-3",
        lg: "noth-11 notrounded-md notpx-8",
        icon: "noth-10 notw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
