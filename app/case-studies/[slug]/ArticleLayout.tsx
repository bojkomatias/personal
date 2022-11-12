"use client";
import { Breadcrumb } from "@ui/Base";
import { cx } from "class-variance-authority";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const components = {
		MainImage: function MainImage({slug}) {
			return (
				<Image src={`/${slug}/1.webp`}  alt="" width={500} height={600} className="mx-auto" />
			);
		},
		Images: function Images({slug}) {
			return (
				<div className="flex gap-4 overflow-hidden w-full flex-col md:flex-row">
					<Image src={`/${slug}/2.webp`} alt="" width={500} height={400} className="object-contain object-start overflow-hidden" />
					<Image src={`/${slug}/3.webp`} alt="" width={500} height={400} className=" object-contain object-start overflow-hidden" />
				</div>
			);
		},
		TagMap: function MappedTags({ tags }) {
			return (
				<div className="flex w-fit mx-auto gap-6 px-10 bg-base-500/5 ring rounded">
					{tags.map((t: string, i: number) => (
						<Image
							key={i}
							width={40}
							height={40}
							src={`/tags/${t}.svg`}
							alt={t}
							title={t}
							className={"my-3 mx-2 aspect-square h-10 drop-shadow-sm"}
						/>
					))}
				</div>
			);
		},
	};

export function ArticleLayout({  source }) {
	return (
		<div className=" mx-auto mt-16 w-fit px-12">
			<Breadcrumb className="-ml-2" />
			<article
				className={cx(
					"prose-sm prose pb-32 prose-a:decoration-tone-500 dark:prose-invert sm:prose-base xl:prose-xl",

				)}
			>
				<MDXRemote {...source} components={components} />
			</article>
		</div>
	);
}
