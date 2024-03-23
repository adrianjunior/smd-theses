'use client'; 

import * as React from "react"
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

const buttonVariants = cva(
  "interactive-element-hover interactive-element-active label-large center-button keyboard-accessible disabled-state py-2",
  {
    variants: {
      variant: {
        primary: "primary-interactive-element",
        error: "error-interactive-element",
        textPrimary: "primary-interactive-text-element",
        textError: "error-interactive-text-element",
      },
      iconPosition:{
        left: "pl-3 pr-4 gap-2",
        right: "pl-4 pr-3 gap-2",
        none: "pl-4 pr-4"
      }
    },
    defaultVariants: {
      variant: "primary",
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
    const [isHovered, setIsHovered] = useState(false);
    return (
      <Comp
        className={cn(buttonVariants({ variant, iconPosition, className }))}
        ref={ref}
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon && iconPosition === 'left' && (
          <span className={cn(isHovered ? 'material-icons' : 'material-icons-outlined')}>{icon}</span>
        )}
        {props.children}
        {icon && iconPosition === 'right' && (
          <span className={cn(isHovered ? 'material-icons' : 'material-icons-outlined')}>{icon}</span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
