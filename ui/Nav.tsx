"use client";
import { FC } from "react";
import { cx } from "class-variance-authority";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useMemo } from "react";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

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
					active
						? cx("font-medium text-tone-600 saturate-150", activeClass)
						: "",
				)}
				onClick={close}
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

export default function HomeLink() {
	const isHome = useSelectedLayoutSegment();
	return (
		<Link
			href={"/"}
			className={cx(
				"aspect-square h-9 overflow-hidden rounded-full ring ring-offset-2 transition hover:ring-tone-600 focus:ring-offset-4 hover:ring-offset-4 shadow-md ",
				isHome === null ? "invisible pointer-events-none" : "",
			)}
		>
			<Image src={"/logo.png"} alt="Personal Picture" width={40} height={40} />
		</Link>
	);
}
