'use client'; 

import * as React from "react";
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import 'material-icons/iconfont/filled.css'; 
import 'material-icons/iconfont/outlined.css';

const filterChipVariants = cva(
  "filter-chip-layout filter-chip-active filter-chip-disabled filter-chip-keyboard",
  {
    variants: {
      iconPosition: {
        left: "filter-chip-icon-left",
        none: "filter-chip-icon-none",
      },
    },
    defaultVariants: {
      iconPosition: "none",
    },
  }
);

export interface FilterChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filterChipVariants> {
  asChild?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'none';
  activated?: boolean;
}

const FilterChip = React.forwardRef<HTMLButtonElement, FilterChipProps>(
  ({ className, icon, iconPosition, asChild = false, activated, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [isHovered, setIsHovered] = useState(false);
    const [isActive] = useState(activated); 

    return (
      <Comp
        className={cn(
            filterChipVariants({ iconPosition, className }),
          isActive && 'filter-chip-primary',
          !isActive && 'filter-chip-primary-container'
        )}
        ref={ref}
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {icon && iconPosition === 'left' && !isActive && (
          <span className={cn(isHovered ? 'material-icons' : 'material-icons-outlined')}>
            {icon}
          </span>
        )}
        {isActive && (
          <span className='material-icons'>
            done
          </span>
        )}
        
        {props.children}
      </Comp>
    );
  }
);

FilterChip.displayName = "FilterChip";

export { FilterChip, filterChipVariants }