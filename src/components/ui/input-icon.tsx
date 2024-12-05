import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Input } from './input';

interface InputIconProps {
  disabled?: boolean;
  label: string;
  value: string | number;
  icon?: JSX.Element;
  text?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputIcon: React.FC<InputIconProps> = ({
  disabled,
  label,
  value,
  icon,
  text,
  onChange,
  type = 'text',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div>
        <Label
          className="font-semibold text-[14px] leading-customNormal mb-1 block"
          htmlFor={label}
        >
          {label}
        </Label>
      </div>
      <div
        className={cn(
          'flex items-center gap-2 max-h-[58px] bg-customMkt-gray5 px-3 py-[17px] rounded border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary transition-all',
          disabled && 'bg-customMkt-gray2',
        )}
      >
        {text ? (
          <span
            className={cn(
              `text-lg transition`,
              isFocused && 'text-customMkt-primary',
              disabled && 'opacity-50',
            )}
          >
            {text}
          </span>
        ) : (
          icon &&
          React.cloneElement(icon, {
            className: cn(
              `h-6 w-6 transition`,
              isFocused && 'fill-customMkt-primary',
              disabled && 'opacity-50',
              icon.props.className,
            ),
          })
        )}
        <Input
          id={label}
          name={label}
          className={cn(
            'p-0 text-lg font-normal leading-5 bg-customMkt-gray5 placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0',
            disabled && 'bg-customMkt-gray2',
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={onChange}
          disabled={disabled}
          type={type}
        />
      </div>
    </div>
  );
};

export default InputIcon;
