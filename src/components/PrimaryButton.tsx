'use client'

import React from 'react'
import { cn } from '@/lib/utils';


interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        'bg-black text-white font-semibold px-6 py-2 xl:py-4 xl:px-12 rounded-lg hover:bg-gray-100 transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
