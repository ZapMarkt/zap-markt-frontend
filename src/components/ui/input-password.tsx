import * as React from 'react';

import { cn } from '@/lib/utils';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="group">
        <div className="flex items-center gap-4 max-h-[58px] w-full bg-customMkt-gray5 rounded border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary transition-all relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            className={cn(
              'p-0 text-lg font-normal leading-5 w-full  focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0',
              className,
            )}
            {...props}
            ref={ref}
          />
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          >
            {showPassword ? (
              <EyeIcon
                className="h-6 w-6 transition group-focus-within:text-customMkt-primary cursor-pointer text-customMkt-gray7"
                aria-hidden="true"
              />
            ) : (
              <EyeOffIcon
                className="h-6 w-6 transition group-focus-within:text-customMkt-primary cursor-pointer text-customMkt-gray7"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">
              {showPassword ? 'Hide password' : 'Show password'}
            </span>
          </Button>
        </div>
      </div>
    );
  },
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
