import { getRecords } from "@api/_server";
import {
	AcademicCapIcon,
	ArrowDownIcon,
	BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { Project, RecordList } from "@types";

import { Button } from "@ui/Button";
import { Card } from "@ui/Card";
import { Container, Heading } from "@ui/Container";
import { SocialIcons } from "@ui/SocialIcons";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

import Viewer from "./projects/Viewer";
import XD from "./XD";

export default async function Page() {
	const { items: projects } = (await getRecords(
		"projects",
		1,
		4,
	)) as RecordList<Project>;
	return (
		<>
			<Container>
				{/* <XD /> */}

				<div className="max-w-6xl relative w-60 h-60 ml-20 mt-20 mb-6">
					<div className="absolute inset-0 rounded-full overflow-hidden">
						<div className="bg-gradient-to-t from-tone-600 via-transparent to-transparent absolute -inset-6 animate-[spin_5s_linear_infinite]" />
					</div>
					<div className="absolute inset-0 rounded-full overflow-hidden">
						<div className="bg-gradient-to-t from-pink-600/50 backdrop-saturate-150 via-transparent to-transparent absolute -inset-6 animate-[spin_3s_linear_infinite]" />
					</div>
					<div className="inset-1 bg-base-900 absolute rounded-full" />
					<div
						className={
							"absolute inset-2 flex-none overflow-hidden rounded-full shadow-lg"
						}
					>
						<Image
							src={"/logo.png"}
							alt=""
							width={300}
							height={300}
							className="absolute inset-0 w-full object-cover"
						/>
					</div>
				</div>

				<Heading
					title="Software engineer, fullstack developer."
					description={"Professional workaholic and amateur CEO"}
				/>
				<div className="sm:pl-3 -mt-6 mb-2 leading-8 text-base-600 dark:text-base-400 text-medium drop-shadow-sm">
					<p>Hi there! Matías here, hope you're doing great.</p>
					<p>Welcome to my portfolio, this is a showcase of what I build.</p>
					<p>
						I work closely with my clients to find, design and build software
						solutions that enhances their business.
					</p>
					<p>
						Do you believe I can help you as well? Feel free to{" "}
						<Link
							className="underline hover:underline-offset-1 underline-offset-2 decoration-tone-600"
							href={"mailto:bojko.matias@gmail.com"}
						>
							contact
						</Link>{" "}
						me.
					</p>
				</div>
				<SocialIcons />
			</Container>
			<Photos />
			<Container>
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-16 gap-x-6 lg:max-w-none lg:grid-cols-3">
					<div className="lg:col-span-2">
						<Viewer
							withButton={false}
							gridCols="grid-cols-1 sm:grid-cols-2"
							projects={projects}
						/>
					</div>

					<Resume />
				</div>
			</Container>
		</>
	);
}

function Resume() {
	let resume = [
		{
			company: "Fulltime freelancer",
			title: "CEO",
			logo: "/logo.png",
			start: "2021",
			end: "Present",
		},
		{
			company: "Asociación Casa Editora Sudamericana",
			title: "Frontend Engineer",
			logo: "/aces.webp",
			start: "2020",
			end: "2022",
		},
	];
	const studies = {
		college: "Universidad Adventista del Plata",
		career: "Systems Engineering",
		logo: "/uap.webp",
		start: "2016",
		end: "2021",
	};

	return (
		<Card className="flex-col !p-8">
			<h2 className="flex text-sm font-semibold items-center">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h2>
			<ol className="mt-1 space-y-4">
				{resume.map((role) => (
					<li key={role.title} className="flex gap-4">
						<Image
							src={role.logo}
							alt=""
							className={cx(
								"w-10 h-10 rounded-full ring-2 ring-offset-2",
								role.logo === "/aces.webp"
									? "object-contain p-1 bg-teal-500"
									: "",
							)}
							width={200}
							height={200}
						/>

						<dl className="flex flex-auto flex-wrap gap-x-2">
							<dt className="sr-only">Company</dt>
							<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
								{role.company}
							</dd>
							<dt className="sr-only">Role</dt>
							<dd className="text-xs text-zinc-500 dark:text-zinc-400">
								{role.title}
							</dd>
							<dt className="sr-only">Date</dt>
							<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
								<time dateTime={role.start}>{role.start}</time>{" "}
								<span aria-hidden="true">—</span>{" "}
								<time dateTime={role.end}>{role.end}</time>
							</dd>
						</dl>
					</li>
				))}
			</ol>
			<h2 className="mt-8 flex text-sm font-semibold">
				<AcademicCapIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Studies</span>
			</h2>
			<ol className="mt-1 space-y-4">
				<li className="flex gap-4">
					<Image
						src={studies.logo}
						alt=""
						className="h-10 w-10 rounded-full ring-2 ring-offset-2"
						width={200}
						height={200}
					/>

					<dl className="flex flex-auto flex-wrap gap-x-2">
						<dt className="sr-only">College</dt>
						<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
							{studies.college}
						</dd>
						<dt className="sr-only">Career</dt>
						<dd className="text-xs text-zinc-500 dark:text-zinc-400">
							{studies.career}
						</dd>
						<dt className="sr-only">Date</dt>
						<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
							<time dateTime={studies.start}>{studies.start}</time>{" "}
							<span aria-hidden="true">—</span>{" "}
							<time dateTime={studies.end}>{studies.end}</time>
						</dd>
					</dl>
				</li>
			</ol>
			<Button
				target="_blank"
				href="/Matias Bojko - Systems Engineer.pdf"
				className="mt-6 w-full justify-center"
				intent="primary"
			>
				Download CV
				<ArrowDownIcon className="h-4 w-4" />
			</Button>
		</Card>
	);
}

function Photos() {
	const images = [
		"/matu1.webp",
		"/matu2.webp",
		"/matu3.webp",
		"/matu4.webp",
		"/matu5.webp",
		"/matu6.webp",
	];
	let rotations = [
		"rotate-2",
		"-rotate-2",
		"rotate-2",
		"rotate-2",
		"-rotate-2",
	];

	return (
		<div className="flex justify-center gap-5 overflow-hidden p-4">
			{images.map((image, i) => (
				<div
					key={image}
					className={cx(
						"relative aspect-[9/10] w-40 flex-none overflow-hidden rounded-xl md:w-64 sm:rounded-2xl shadow-md",
						"scale-95 hover:scale-105 transition-transform ease-spring cursor-grab active:cursor-grabbing hover:rotate-0 active:scale-100",
						rotations[i % rotations.length],
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
