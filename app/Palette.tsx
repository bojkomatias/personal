"use client";

import { Combobox } from "@headlessui/react";
import {
	AdjustmentsVerticalIcon,
	ExclamationTriangleIcon,
	FolderIcon,
	LifebuoyIcon,
	MagnifyingGlassIcon,
	ShieldCheckIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";
import { Modal } from "@ui/Headless";
import { cx } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function Palette({ projects }: { projects: Project[] }) {
	useEffect(() => {
		const handleCmd = (e: any) => {
			if (e.key === "k" && e.metaKey === true) {
				setOpen(true);
			}
		};
		document.addEventListener("keydown", handleCmd);
	}, []);

	const [open, setOpen] = useState(false);

	return (
		<div className='sm:block hidden'>
			<Button
				styleas="secondary"
				className="shadow-md text-sm text-base-500"
				onClick={() => setOpen(true)}
			>
				<MagnifyingGlassIcon className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-tone-700 hidden lg:block" />
				<span className="hidden md:block">Search ...</span>
				<kbd
					className={cx(
						"h-5 mt-px -mb-px items-center justify-center font-medium flex",
					)}
				>
					<span className="text-lg mr-px">⌘</span> K
				</kbd>
			</Button>
			<Modal
				open={open}
				setOpen={setOpen}
				className="!p-3 w-screen h-full max-w-2xl"
			>
				<SearchBar projects={projects} setOpen={setOpen} />
			</Modal>
		</div>
	);
}

export function SearchBar({
	setOpen,
	projects,
}: { setOpen?: Dispatch<SetStateAction<boolean>>; projects: Project[] }) {
	const router = useRouter();

	const [rawQuery, setRawQuery] = useState("");

	const query = rawQuery.toLowerCase().replace(/^[#>\/]/, "");

	const filteredProjects =
		rawQuery === "#"
			? projects
			: query === "" || rawQuery.startsWith(">") || rawQuery.startsWith("/")
			? []
			: projects.filter((project) =>
					project.title.toLowerCase().includes(query),
			  );

	const filteredActions =
		rawQuery === ">"
			? actions
			: query === "" || rawQuery.startsWith("#") || rawQuery.startsWith("/")
			? []
			: actions.filter((action) => action.name.toLowerCase().includes(query));

	// const filteredNav =
	// 	rawQuery === "/"
	// 		? navigation
	// 		: rawQuery.startsWith("#") || rawQuery.startsWith(">")
	// 		? []
	// 		: navigation.filter((nav) => nav.name.toLowerCase().includes(query));

	return (
		<Combobox
			onChange={(item: any) => {
				item.slug
					? router.replace(`/projects/${item.slug}`)
					: item.fn
					? item.fn()
					: router.push(item.href);
				setOpen ? setOpen(false) : null;
			}}
		>
			<div className="relative">
				<MagnifyingGlassIcon
					className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-base-500/80"
					aria-hidden="true"
				/>
				<Combobox.Input
					autoComplete="off"
					className="h-12 w-full border-0 bg-transparent pl-11 pr-4  placeholder-gray-400 focus:ring-0 sm:text-sm"
					placeholder="Search..."
					onChange={(event) => setRawQuery(event.target.value)}
				/>
			</div>

			{(filteredProjects.length > 0 || filteredActions.length > 0) && (
				<Combobox.Options
					static={true}
					className="max-h-48 sm:max-h-96 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto"
				>
					{/* {filteredNav.length > 0 && (
						<li>
							<h2 className="text-xs font-semibold ">Navigation</h2>
							<ul className="-mx-4 mt-2 text-sm ">
								{filteredNav.map((nav) => (
									<Combobox.Option
										key={nav.id}
										value={nav}
										className={({ active }) =>
											cx(
												"flex cursor-pointer select-none items-center px-4 py-2 rounded",
												active && "bg-base-600/20 ",
											)
										}
									>
										{({ active }) => (
											<>
												<span
													className={cx(
														"h-6 w-3 flex-none font-medium flex items-center text-lg",
														active ? "text-tone-600" : "text-base-500/50",
													)}
													aria-hidden="true"
												>
													/
												</span>
												<span className="ml-3 flex-auto truncate">
													{nav.name}
												</span>
											</>
										)}
									</Combobox.Option>
								))}
							</ul>
						</li>
					)} */}
					{filteredProjects.length > 0 && (
						<li>
							<h2 className="text-xs font-semibold ml-3">Projects</h2>
							<ul className="mt-2 text-sm ">
								{filteredProjects.map((project) => (
									<Combobox.Option
										key={project.id}
										value={project}
										className={({ active }) =>
											cx(
												"flex cursor-pointer select-none items-center px-4 py-2 rounded",
												active && "bg-base-600/20 ",
											)
										}
									>
										{({ active }) => (
											<>
												<FolderIcon
													className={cx(
														"h-6 w-6 flex-none",
														active ? "text-tone-600" : "text-base-500/50",
													)}
													aria-hidden="true"
												/>
												<span className="ml-3 flex-auto truncate">
													{project.title}
												</span>
											</>
										)}
									</Combobox.Option>
								))}
							</ul>
						</li>
					)}
					{filteredActions.length > 0 && (
						<li>
							<h2 className="text-xs font-semibold ml-3 ">Actions</h2>
							<ul className="mt-2 text-sm ">
								{filteredActions.map((item) => (
									<Combobox.Option
										key={item.id}
										value={item}
										className={({ active }) =>
											cx(
												"flex cursor-pointer select-none items-center px-4 py-2 rounded",
												active && "bg-base-600/20 ",
											)
										}
									>
										{({ active }) => (
											<>
												<item.icon
													className={cx(
														"h-6 w-6 flex-none",
														active ? "text-tone-600" : "text-base-500/50",
													)}
													aria-hidden="true"
												/>
												<span className="ml-3 flex-auto truncate">
													{item.name}
												</span>
											</>
										)}
									</Combobox.Option>
								))}
							</ul>
						</li>
					)}
				</Combobox.Options>
			)}

			{rawQuery === "?" && (
				<div className="py-14 px-6 text-center text-sm sm:px-14">
					<LifebuoyIcon
						className="mx-auto h-6 w-6 text-base-500/80"
						aria-hidden="true"
					/>
					<p className="mt-4 font-semibold ">Help with searching</p>
					<p className="mt-2 text-base-500">
						Use this tool to quickly search for pages and projects across our
						entire platform. You can also use the search modifiers found in the
						footer below to limit the results.
					</p>
				</div>
			)}

			{query !== "" &&
				rawQuery !== "?" &&
				filteredProjects.length === 0 &&
				filteredActions.length === 0 && (
					<div className="py-14 px-6 text-center text-sm sm:px-14">
						<ExclamationTriangleIcon
							className="mx-auto h-6 w-6 text-base-500/80"
							aria-hidden="true"
						/>
						<p className="mt-4 font-semibold ">No results found</p>
						<p className="mt-2 text-base-500">
							We couldn’t find anything with that term. Please try ag ai n.
						</p>
					</div>
				)}

			<div className="sm:flex hidden flex-wrap items-center mt-1 px-4 py-2 text-xs leading-6">
				Type{" "}
				<kbd
					className={cx(
						"mx-1 flex w-5 h-5 items-center justify-center rounded border font-semibold sm:mx-2",
						rawQuery.startsWith("#")
							? "border-tone-600 text-tone-600"
							: "border-gray-400 ",
					)}
				>
					#
				</kbd>{" "}
				<span>for projects,</span>

				<kbd
					className={cx(
						"mx-1 flex h-5 w-5 items-center justify-center rounded border  font-semibold sm:mx-2",
						rawQuery.startsWith(">")
							? "border-tone-600 text-tone-600"
							: "border-gray-400",
					)}
				>
					&gt;
				</kbd>{" "}
				for actions,{" "}
				<kbd
					className={cx(
						"mx-1 flex h-5 w-5 items-center justify-center rounded border  font-semibold sm:mx-2",
						rawQuery.startsWith(">")
							? "border-tone-600 text-tone-600"
							: "border-gray-400",
					)}
				>
					/
				</kbd>{" "}
				for navigation, and{" "}
				<kbd
					className={cx(
						"mx-1 flex h-5 w-5 items-center justify-center rounded border  font-semibold sm:mx-2",
						rawQuery === "?"
							? "border-tone-600 text-tone-600"
							: "border-gray-400 ",
					)}
				>
					?
				</kbd>{" "}
				for help.
			</div>
		</Combobox>
	);
}

const actions = [
	{
		id: 123,
		name: "Sign In",
		icon: UserIcon,
		href: "/_",
	},
	{
		id: 232,
		name: "Administrator Panel",
		icon: ShieldCheckIcon,
		href: "/_",
	},
	{
		id: 4344,
		name: "Randomize theme tone",
		icon: AdjustmentsVerticalIcon,
		fn: () => {
			let root: any = document.querySelector(":root");
			root.style.setProperty(
				"--color-tone",
				`${Math.floor(Math.random() * (255 - 0 + 1) + 0)} ${Math.floor(
					Math.random() * (255 - 0 + 1) + 0,
				)} ${Math.floor(Math.random() * (255 - 0 + 1) + 0)}`,
			);
		},
	},
];
