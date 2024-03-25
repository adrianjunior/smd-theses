import * as React from "react";
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import 'material-icons/iconfont/filled.css'; 
import 'material-icons/iconfont/outlined.css';

const filterChipVariants = cva(
  "interactive-element-hover interactive-element-active label-large center-button keyboard-accessible disabled-state py-2",
  {
    variants: {
      iconPosition: {
        left: "pl-3 pr-4 gap-2",
        right: "pl-4 pr-3 gap-2",
        none: "pl-4 pr-4 gap-2",
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
  ({ className, icon, iconPosition, asChild = false, activated = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(activated); 

    const toggleActive = () => setIsActive(!isActive);

    return (
      <Comp
        className={cn(
            filterChipVariants({ iconPosition, className }),
          isActive && 'primary-interactive-element filter-chip-transition',
          !isActive && 'primary-container-interactive-element filter-chip-transition'
        )}
        ref={ref}
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleActive}
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