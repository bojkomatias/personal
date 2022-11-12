import { FC, forwardRef } from "react";
import Link from "next/link";
import { cva, cx, VariantProps } from "class-variance-authority";

const ButtonStyles = cva(
	[
		"px-3 xl:px-4 py-2 xl:py-3",
		"group flex items-center gap-3",
		"rounded",
		"outline-none active:scale-[99%] border-0 border-transparent",
		"transition",
	],
	{
		variants: {
			styleas: {
				primary:
					"ring shadow-md ring-tone-600 bg-tone-600 text-white dark:bg-tone-600 hover:saturate-150 hover:shadow-tone-600/60 dark:hover:shadow-tone-700/40 font-bold focus:ring-offset-2",
				secondary:
					"ring shadow-md ring-tone-600 ring-tone-600 text-tone-600 hover:saturate-150 hover:shadow-tone-600/60 dark:hover:shadow-tone-700/40 font-bold hover:ring-offset-1 focus:ring-offset-1",
				ghost: "hover:bg-base-500/20",
				outline: "ring hover:ring-base-500",
				link: "relative block hover:text-tone-600",
			},
		},
		defaultVariants: { styleas: "ghost" },
	},
);

interface Props
	extends VariantProps<typeof ButtonOrLink>,
		VariantProps<typeof ButtonStyles> {}

export const Button: FC<Props> = forwardRef(({ className, ...props }, ref) => {
	return (
		<ButtonOrLink
			href={props.href}
			ref={ref}
			className={cx(ButtonStyles({ ...props }), className)}
			{...props}
		/>
	);
});

const ButtonOrLink = forwardRef(({ children, href, ...props }: any, ref) =>
	href ? (
		<Link href={href} {...props}>
			{children}
		</Link>
	) : (
		<button ref={ref} {...props}>
			{children}
		</button>
	),
);
