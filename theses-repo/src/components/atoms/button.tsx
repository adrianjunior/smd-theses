'use client'; 

import * as React from "react"
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

const buttonVariants = cva(
  "button-layout button-hover button-active button-disabled button-keyboard",
  {
    variants: {
      variant: {
        primary: "button-primary",
        error: "button-error",
        textPrimary: "text-button-primary",
        textError: "text-button-error",
      },
      iconPosition:{
        left: "button-icon-left",
        right: "button-icon-right",
        none: "button-icon-none"
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
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
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
