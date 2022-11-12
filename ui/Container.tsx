
import { PropsWithChildren } from "react";
import { cx } from "class-variance-authority";

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
