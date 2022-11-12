
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
