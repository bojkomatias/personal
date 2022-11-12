import { Card } from "@ui/Card";
import { Container, Heading } from "@ui/Container";

export default function UsesPage() {
	return (
		<Container>
			<Heading
				title={"Software I use and Gadgets I like"}
				description={"Tools I use for my craft"}
			/>
			<section className="mb-12 sm:grid grid-cols-8 gap-8 sm:gap-16 lg:gap-32 border-l border-base-500/20">
				<div className="p-4 text-sm font-medium col-span-2">Workstation</div>
				<div className="col-span-5">
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>MacBook Air M1</h3>
						<p className="text-base-500">
							While in college I used a Huawei Matebook with a Ryzen 5
							processor. That was a great computer and never let me down. But
							the comparison with the M1 chip is night and day.
						</p>
					</Card>
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>LG Ultrawide 29" Display</h3>
						<p className="text-base-500">
							This monitor increases my workspace so much. I can code side by
							side, while checking out the output or design of what I'm building
							immediately, with no need to Alt + Tab.
						</p>
					</Card>
				</div>
			</section>
			<section className="mb-12 sm:grid grid-cols-8 gap-8 sm:gap-16 lg:gap-32 border-l border-tone-500/20">
				<div className="p-4 text-sm font-medium col-span-2">
					Development Tools
				</div>
				<div className="col-span-5">
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>Visual Studio Code</h3>
						<p className="text-base-500">
							Thanks to it's easy configuration, and the great ecosystem for
							plugins VSCode is hands down the best editor ever made. I love
							particularly that I can change the theme whenever I get bored,
							sometimes this can be a distraction I have to admit it.
						</p>
					</Card>
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>Warp Terminal</h3>
						<p className="text-base-500">
							This is just an enhanced Terminal to navigate and control my OS,
							sometimes I just default to iTerm.
						</p>
					</Card>
				</div>
			</section>{" "}
			<section className="mb-12 sm:grid grid-cols-8 gap-8 sm:gap-16 lg:gap-32 border-l border-base-500/20">
				<div className="p-4 text-sm font-medium col-span-2">
					Software / Technologies
				</div>
				<div className="col-span-5">
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>Next JS / Astro</h3>
						<p className="text-base-500">
							Next is fullstack framework, based on React. I have a custom built
							template, and most applications can be easily built with it. Astro
							is really nice as well, allowing for faster pages when content is
							static (eg. Blog / Docs.)
						</p>
					</Card>{" "}
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>Vercel / Fly </h3>
						<p className="text-base-500">
							Vercel is the go to platform for frontend deployment, with a nice
							integration with GitHub. Fly.io can be used to deploy anything you
							want, I some times deploy some backend code on Docker containers
							over there.
						</p>
					</Card>
					<Card className="flex-col h-fit mb-6 ring-0 bg-over">
						<h3>Supabase / PocketBase / MongoDB</h3>
						<p className="text-base-500">
							Software as a Service databases that I rely on when building
							projects for my clients. I create all the configuration necessary
							and connect them to the application, so that clients may safely
							store data.
						</p>
					</Card>
				</div>
			</section>
		</Container>
	);
}
