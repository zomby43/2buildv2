'use client';

import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@mui/base/Button';
import { ReactNode, forwardRef } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      onClick,
      className = '',
      type = 'button',
      disabled = false,
      fullWidth = false,
    },
    ref
  ) {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e52a28] focus-visible:ring-offset-2';

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    const variantClasses = {
      primary: 'bg-[#e52a28] text-white hover:bg-[#c72422] hover:shadow-medium active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
      secondary: 'bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
      ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={allClasses}>
          {children}
        </Link>
      );
    }

    // Otherwise render as BaseButton with slotProps
    return (
      <BaseButton
        ref={ref}
        onClick={onClick}
        type={type}
        disabled={disabled}
        slotProps={{
          root: {
            className: allClasses
          }
        }}
      >
        {children}
      </BaseButton>
    );
  }
);
