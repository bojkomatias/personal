"use client";
import { Card, List } from "@ui/Card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	Bars4Icon,
	LinkIcon,
	Squares2X2Icon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";
import { cx } from "class-variance-authority";
import { Button } from "@ui/Button";

export default function Viewer({ cases }) {
	const router = useRouter();
	const [isGrid, setGrid] = useState(false);
	return (
		<div className="flex flex-col gap-3">
			<Button
				className="flex-shrink self-end sm:block hidden"
				styleas="secondary"
				onClick={() => setGrid(!isGrid)}
			>
				{isGrid ? (
					<Bars4Icon className="h-6 w-5" />
				) : (
					<Squares2X2Icon className="h-6 w-5" />
				)}
			</Button>

			<List
				className="bg-over"
				gridCols={cx(
					isGrid ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
				)}
			>
				{cases.map((project) => (
					<Card
						as={Link}
						key={project.id}
						href={`case-studies/${project.slug}`}
						className={cx(
							"hover:bg-white/5 hover:ring-offset-2 hover:ring-tone-600 focus:ring-tone-600 hover:shadow-lg !shadow-tone-600/50 place-items-center",
							isGrid ? "grid grid-cols-1" : "grid grid-cols-4",
						)}
					>
						<div className="pointer-events-none p-3 text-xl transition md:pointer-events-auto md:text-2xl">
							{project.title}
						</div>
						<p className="font-thin italic opacity-0 transition group-hover:opacity-100 text-xs flex-1">
							{project.description}
						</p>
						<Button className="font-medium text-base-500 text-xs justify-end">
							<LinkIcon className="h-4 w-4 group-hover:text-tone-600 " />
							{project.slug}
						</Button>
						<MappedTags tags={project.tags} />
					</Card>
				))}
			</List>
		</div>
	);
}

export function MappedTags({ tags }) {
	return (
		<div className="flex rounded">
			{tags.map((t: string, i: number) => (
				<Image
					key={i}
					width={30}
					height={30}
					src={`/tags/${t}.svg`}
					alt={t}
					className={`pointer-events-none my-4 mx-2 aspect-square h-8 saturate-0 drop-shadow-sm group-hover:saturate-100 ${
						i > 2 ? "hidden md:block" : ""
					}`}
				/>
			))}
		</div>
	);
}
