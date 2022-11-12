"use client";
import { cx } from "class-variance-authority";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const images = [
	"/matu1.webp",
	"/matu2.webp",
	"/matu3.webp",
	"/matu4.webp",
	"/matu5.webp",
	"/matu6.webp",
];
let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

export function Photos() {
	const [pic, setPic] = useState(2);

	useEffect(() => {
		recursive(pic);
	}, []);

	function recursive(i) {
		setTimeout(() => {
			if (i === 6) {
				setPic(0);
				return recursive(0);
			} else {
				setPic(i + 1);
				return recursive(i + 1);
			}
		}, 2000);
	}
	return (
		<div className="flex justify-center gap-5 overflow-visible">
			{images.map((image, i) => (
				<div
					key={image}
					className={cx(
						"relative aspect-[9/10] w-40 flex-none overflow-hidden rounded-xl md:w-64 sm:rounded-2xl transition duration-1000",
						rotations[i % rotations.length],
						pic === i
							? "scale-105 rotate-0 blur-0 z-20 saturate-150 shadow-md"
							: "blur-[1px] saturate-0",
					)}
				>
					<Image
						src={image}
						alt=""
						width={300}
						height={300}
						className="absolute inset-0 h-full w-full object-cover"
					/>
				</div>
			))}
		</div>
	);
}
