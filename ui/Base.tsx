"use client";
import React, { Component, FC, forwardRef, PropsWithChildren } from "react";
import Link from "next/link";
import { cva, cx, VariantProps } from "class-variance-authority";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
	usePathname,
	useSelectedLayoutSegment,
	useSelectedLayoutSegments,
} from "next/navigation";
import { useMemo } from "react";

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

export const NavItem: FC<{
	href: string;
	children: any;
	activeClass?: string;
	activeExtra?: JSX.Element;
	isEqual?: boolean;
}> = ({
	href,
	children,
	activeClass,
	activeExtra = (
		<span className="inset-x-1 -bottom-px hidden h-[1.7px] bg-gradient-to-r from-tone-500/0 via-tone-600/70 to-tone-500/0 sm:absolute sm:block" />
	),
	isEqual,
}) => {
	// Good for nested, keeps highlighted
	let active = usePathname().includes(href);
	// Used to match navs that contain home
	if (isEqual) {
		active = href === usePathname();
	}
	return (
		<li>
			<Button
				href={href}
				styleas="link"
				className={cx(
					active ? cx("font-medium text-tone-600 saturate-150", activeClass) : "",
				)}
			>
				{children}
				{active && activeExtra}
			</Button>
		</li>
	);
};

export const Breadcrumb = ({ className }: { className: string }) => {
	const pathname = usePathname();
	const breadcrumbs = useMemo(
		function generateBreadcrumbs() {
			const asPathNestedRoutes = pathname
				.split("/")
				.filter((v) => v.length > 0);

			const crumblist = asPathNestedRoutes.map((subpath, idx) => {
				const href = `/${asPathNestedRoutes.slice(0, idx + 1).join("/")}`;
				return { href, text: subpath };
			});

			return crumblist;
		},
		[pathname],
	);

	return (
		<nav aria-label="Breadcrumb" className={className}>
			<ol
				role="list"
				className="flex items-center text-xs capitalize text-base-500/70"
			>
				{breadcrumbs.map((page, _) => (
					<li key={page.text}>
						<div className="flex items-baseline">
							{_ === 0 ? null : (
								<ChevronRightIcon className="h-2 w-2 " aria-hidden="true" />
							)}
							<Button styleas="link" href={page.href}>
								{page.text}
							</Button>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
};

export function List({
	className,
	children,
	gridCols = "grid-cols-1",
}: PropsWithChildren<{ className?: string; gridCols?: string }>) {
	return (
		<ul className={cx(className, "grid", "relative gap-3", gridCols)}>
			{children}
		</ul>
	);
}

export function Card({
	as: Component = "li",
	href,
	className,
	children,
	horizontal = true,
}: PropsWithChildren<{
	as?: any;
	className?: string;
	horizontal?: boolean;
	href?: string;
}>) {
	return (
		<Component
			href={href}
			className={cx(
				"flex h-full justify-between",
				"group gap-3 p-4 relative rounded transition ring bg-base-500/5",
				className,
			)}
		>
			{children}
		</Component>
	);
}

export function Container({
	className,
	children,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div
			className={cx(
				"min-h-screen py-20 max-w-7xl px-6 mx-auto sm:px-8 md:px-16 lg:px-20",
				className,
			)}
		>
			{children}
		</div>
	);
}

export function Heading({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="mx-auto max-w-6xl pb-10 lg:flex lg:justify-between">
			<div className="max-w-2xl">
				<h1 className="drop-shadow">{title}</h1>
				<p className="mt-5 text-xl text-tone-600 saturate-150 drop-shadow-sm whitespace-pre-line">
					{description}
				</p>
			</div>
		</div>
	);
}
