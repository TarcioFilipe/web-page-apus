'use client'

import { ReactNode } from 'react'

interface ListItemCustomProps {
  indexador: ReactNode
  text: string
  textClassName?: string
  indexadorClassName?: string
  containerClassName?: string
}

export default function ListItemCustom({
  indexador,
  text,
  textClassName = 'text-base text-black',
  indexadorClassName = 'w-6 h-6 flex items-center justify-center rounded-full text-white text-sm',
  containerClassName = 'flex items-start gap-3 mb-2'
}: ListItemCustomProps) {
  return (
    <div className={containerClassName}>
      <div className={indexadorClassName}>
        {indexador}
      </div>
      <p className={textClassName}>
        {text}
      </p>
    </div>
  )
}
