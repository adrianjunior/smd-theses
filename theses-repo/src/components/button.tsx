import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "active:scale-95 py-2 interactive-element label-large center-flex keyboard-accessible disabled-state",
  {
    variants: {
      variant: {
        default: "primary-interactive-element",
        error:"error-interactive-element",
        textDefault: "primary-interactive-text-element",
        textError: "error-interactive-text-element"
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
