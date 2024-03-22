import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "transition-focus duration-300 rounded-extra-small hover:rounded-extra-large active:scale-95 py-2 inline-flex items-center justify-center whitespace-nowrap label-large keyboard-accessible disabled-state",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary dark:bg-dark-primary dark:text-dark-on-primary hover:bg-opacity-90 focus:bg-opacity-90",
        error:"bg-error text-on-error dark:bg-dark-error dark:text-dark-on-error hover:bg-opacity-90 focus:bg-opacity-90",
        textDefault: "text-primary bg-primary bg-opacity-0 dark:text-dark-primary dark:bg-dark-primary dark:bg-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20",
        textError: "text-error bg-error bg-opacity-0 dark:text-dark-error dark:bg-dark-error dark:bg-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20"
      },
      iconPosition:{
        left: "pl-3 pr-4 gap-2",
        right: "pl-4 pr-3 gap-2",
        none: "pl-4 pr-4"
      }
    },
    defaultVariants: {
      variant: "default",
      iconPosition: "none"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: string
  iconPosition?: 'left' | 'right' | 'none' ;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, icon, iconPosition, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, iconPosition, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="material-icons">{icon}</span>
        )}
        {props.children}
        {icon && iconPosition === 'right' && (
          <span className="material-icons">{icon}</span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
