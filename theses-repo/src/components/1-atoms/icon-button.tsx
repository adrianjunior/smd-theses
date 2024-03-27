'use client'; 

import * as React from "react"
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

const iconButtonVariants = cva(
    "icon-button-layout icon-button-hover icon-button-active icon-button-keyboard icon-button-disabled",
    {
        variants: {
            variant: {
                primary: "icon-button-primary",
                error: "icon-button-error"
            }
        },
        defaultVariants: {
            variant: "primary"
        },
    }
)

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
    asChild?: boolean
    icon?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, variant, icon, asChild = false }, ref) => {
        const Comp = asChild ? Slot : "button";
        const [isHovered, setIsHovered] = useState(false);
        return (
            <Comp
                className={cn(
                    iconButtonVariants({ variant, className })
                )}
                ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
            >
                {icon && (
                    <span className={cn(isHovered ? 'material-icons' : 'material-icons-outlined')}>{icon}</span>
                )}
            </Comp>
        )
    }
)
IconButton.displayName = "Icon Button"

export { IconButton, iconButtonVariants }
