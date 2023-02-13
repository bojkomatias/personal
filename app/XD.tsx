"use client";

import Image from "next/image";

export default function XD() {
	return (
		<div className="mx-auto max-w-5xl my-24 relative h-96 w-96">
			<div className="w-96 h-96 absolute inset-0 rounded-2xl overflow-hidden">
				<div className="bg-gradient-to-t from-sky-400 brightness-150 via-transparent to-transparent absolute -inset-20 animate-[spin_5s_linear_infinite]" />
			</div>
			<div
				className={
					"absolute inset-1 flex-none overflow-hidden rounded-xl shadow"
				}
			>
				<Image
					src={"/matu1.webp"}
					alt=""
					width={300}
					height={300}
					className="absolute inset-0 w-full object-cover"
				/>
			</div>
		</div>
	);
}
