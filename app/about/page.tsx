import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
	EnvelopeIcon,
	InboxIcon,
} from "@heroicons/react/24/solid";
import { Button, Container, Heading } from "@ui/Base";
import { SocialIcons } from "@ui/SocialIcons";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<Container>
			<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
				<div className="lg:pl-20">
					<div className="max-w-xs px-2.5 lg:max-w-none">
						<Image
							src={"/matu1.webp"}
							alt=""
							width={600}
							height={600}
							className="shadow-md aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 object-center"
						/>
					</div>
				</div>
				<div className="lg:order-first lg:row-span-2">
					<Heading
						title="I'm Matías Federico Bojko Slekis."
						description="I live in a small town live in Argentina, Libertador San Martin, from where I design and build applications for clients across the globe."
					/>

					<div className="mt-6 space-y-7 opacity-60">
						<p>
							I’ve loved making things for as long as I can remember. Since I
							was 7 years old, I told everyone my dream was becoming engineer (
							<em>look at me mom, i made it </em>).
						</p>
						<p>
							During summers I found myself building planes, building tree
							houses, etc. But also gaming on the computer, installing new
							applications and fooling around with stuff.
						</p>
						<p>
							I originally started Aeronautical Engineering in Cordoba,
							Argentina. That was the year 2014, but then my plans shifted
							towards building systems, so in 2016 I made a chance to Systems
							Engineering. Although my interest for planes has never faded, I
							haven't regretted my choice ever since. My job allows me to work
							from virtually anywhere in the world.
						</p>
						<p>
							Today I work from home, or while in <em>vacation</em>, from
							wherever I am at the moment, and I have the luxury to create my
							own schedule and take project from clients that align with what I
							like to build.
						</p>
					</div>
				</div>
				<div className="lg:pl-20">
					<div className="flex">
						<SocialIcons withText={true} className="flex-col" />
					</div>
					<div className="border-t border-base-500/50 mt-4 pt-4" />
					<Button
						styleas="link"
						href={"mailto:bojko.matias@gmail.com"}
						className="group p-1 flex gap-4"
					>
						<EnvelopeIcon
							className={
								"h-6 w-6 transition group-active:scale-95 group-hover:drop-shadow group-hover:fill-base-600 dark:group-hover:fill-400 fill-base-500/50"
							}
						/>

						<span className="group-hover:text-base-700 dark:group-hover:text-base-300 text-base-500/70">
							bojko.matias@gmail.com
						</span>
					</Button>
				</div>
			</div>
		</Container>
	);
}
