'use client'

import { FC } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { Combobox } from '@headlessui/react'

interface BaseInputProps extends VariantProps<typeof Combobox.Input> {
  name: string
  disabled?: boolean
  placeholder?: string
}

const baseStyle =
  'border-0 bg-transparent w-full focus:outline-none focus:ring-0 p-0 mb-px font-light'

const BaseInput: FC<BaseInputProps> = (props) => (
  <input type="text" className={baseStyle} {...props} />
)

const labelStyles = cva(['text-xs font-medium absolute'], {
  variants: {
    overlap: {
      true: ['-top-2 left-2  bg-over  rounded -mt-px px-1'],
    },
    inset: { true: ['top-1 left-2'] },
    regular: { true: ['-top-5 left-0 bg-transparent'] },
  },
  defaultVariants: { overlap: true },
})
interface LabelProps extends VariantProps<typeof labelStyles> {
  name: string
  label?: string
}

const Label: FC<LabelProps> = ({ name, label, ...props }) => (
  <label htmlFor={name} className={labelStyles({ ...props })}>
    {label ? label : name}
  </label>
)

const inputStyles = cva(
  ['relative ring rounded focus-within:ring-base-500/50 text-sm px-3 pb-2'],
  {
    variants: {
      overlap: { true: ['pt-3'] },
      inset: { true: ['pt-6'] },
      regular: { true: ['pt-2'] },
    },
    defaultVariants: { overlap: true },
  }
)

export interface InputTypes
  extends VariantProps<typeof BaseInput>,
    VariantProps<typeof Label>,
    VariantProps<typeof inputStyles> {
  icon?: (...params: any) => JSX.Element
  className?: string
  right?: React.ReactNode

  Combobox?: boolean
}

export const Input: FC<InputTypes> = (props) => (
  <div className={inputStyles({ ...props, class: props.className })}>
    <Label {...props} />
    <div className="ml-2 flex items-center gap-2">
      {props.icon ? <props.icon className="h-4 w-4" /> : null}
      <BaseInput {...props} />
      {props.right}
    </div>
  </div>
)
