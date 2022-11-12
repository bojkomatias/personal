"use client";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function HomeLink() {
	const s = useSelectedLayoutSegment();
	return (
		<Link
			href={"/"}
			className={cx(
				"aspect-square h-8 overflow-hidden rounded-full ring ring-offset-2 transition hover:ring-tone-600 focus:ring-offset-4 hover:ring-offset-4 shadow-md ",
				s === null ? "invisible pointer-events-none" : "",
			)}
		>
			<Image src={"/logo.png"} alt="Personal Picture" width={40} height={40} />
		</Link>
	);
}
