"use client";

import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { Combobox } from "@headlessui/react";

interface InputTypes extends VariantProps<typeof Combobox.Input> {
	leftIcon?: (...params: any) => JSX.Element;
	rightIcon?: (...params: any) => JSX.Element;
	error?: string;
}

export const Input: FC<InputTypes> = ({
	type = "text",
	className,
	...props
}) => (
	<div className={className}>
		<label
			htmlFor={props.name}
			className={
				"text-sm ml-2 px-2 rounded bg-over capitalize text-base-600 dark:text-base-400"
			}
		>
			{props.label ? props.label : props.name}
		</label>
		<div className="flex items-center -mt-[0.62rem] -mb-1">
			{props.leftIcon ? (
				<props.leftIcon className="h-4 ml-3 -mr-6 stroke-base-500 group-focus-within:text-tone-600" />
			) : null}
			<input
				type={type}
				className={cx(
					" focus:outline-none border-0 bg-transparent pr-4 py-3 placeholder-base-500 focus:ring-tone-600 focus:ring-offset-1 ring rounded w-full",
					props.leftIcon ? "pl-8" : "pl-4",
					props.error ? "ring-red-600/50" : "",
				)}
				{...props}
			/>
			{props.rightIcon ? (
				<props.rightIcon className="h-4 ml-2 -mr-6 stroke-base-500 group-focus-within:text-tone-600" />
			) : null}
		</div>
		<span className="text-xs ml-4 text-red-600/80 drop-shadow-sm ">
			{props.error}
		</span>
	</div>
);

export const TextArea: FC<InputTypes> = ({ className, ...props }) => (
	<div className={className}>
		<label
			htmlFor={props.name}
			className={
				"text-sm ml-2 px-2 rounded bg-over capitalize text-base-600 dark:text-base-400"
			}
		>
			{props.label ? props.label : props.name}
		</label>
		<div className="flex items-center -mt-[0.62rem]">
			<textarea
				className={cx(
					"focus:outline-none border-0 bg-transparent px-4 py-3 placeholder-base-500 focus:ring-tone-600 focus:ring-offset-1 ring rounded w-full",
					props.error ? "ring-red-600" : "",
				)}
				{...props}
			/>
		</div>
		<span className="text-xs ml-4 text-red-600/80 drop-shadow-sm ">
			{props.error}
		</span>
	</div>
);
