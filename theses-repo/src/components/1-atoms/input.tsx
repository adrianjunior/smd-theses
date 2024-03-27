import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(props.value || '');
    const [showClearIcon, setShowClearIcon] = useState(false);

    const handleClear = () => {
      setInputValue('');
      setShowClearIcon(false);
    };

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "input-layout input-style input-hover input-active input-focus input-disabled",
            className
          )}
          ref={ref}
          {...props}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowClearIcon(e.target.value !== '');
          }}
        />
        {showClearIcon && (
          <button
            className="input-close-icon"
            onClick={handleClear}
          >
            <span className="material-icons" style={{ fontSize: '20px' }}>
              cancel
            </span>
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
