import "./index.css";
import { Ubuntu } from "@next/font/google";
import ModeToggle from "@ui/ModeToggle";
import { Popover } from "@ui/Headless";
import HomeLink, { NavItem } from "@ui/Nav";
import { Button } from "@ui/Button";
import { Palette, SearchBar } from "./Palette";
import { Nav, type Project, RecordList } from "@schema/*";
import { cx } from "class-variance-authority";
import { getRecords } from "@api/_server";

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

const ubuntu = Ubuntu({ weight: "300", subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { items: projects } = await getRecords<Project>("projects");
	return (
		<html className={cx(ubuntu.className, "dark")}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: modeScript }} />
				<link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className="bg-base text-base-900 subpixel-antialiased dark:text-base-100 font-light">
				<div className="fixed inset-0 -z-10">
					<div className="h-full mx-auto max-w-7xl bg-over -z-10 shadow border-x border-base-500/10" />
				</div>
				<Header projects={projects} />
				{children}
				<div className="mb-32" />
				<Footer />
			</body>
		</html>
	);
}

const navigation: Nav[] = [
	{
		id: 1,
		name: "Home",
		href: "/",
	},
	{
		id: 2,
		name: "About",
		href: "/about",
		visible: true,
	},
	{
		id: 3,
		name: "Projects",
		href: "/projects",
		visible: true,
	},
	{
		id: 4,
		name: "Uses",
		href: "/uses",
		visible: true,
	},
];

const Header = ({ projects }) => (
	<header className="pointer-events-none relative z-10 mx-auto h-20 w-full max-w-7xl px-8 pt-6">
		<div className="relative flex justify-between gap-4">
			<div className="pointer-events-auto flex flex-grow sm:flex-grow-0">
				<HomeLink />
			</div>
			<div className="flex justify-end sm:justify-center">
				<MobileNavigation
					projects={projects}
					className="pointer-events-auto sm:hidden"
				/>
				<DesktopNavigation className="pointer-events-auto hidden sm:block" />
			</div>
			<div className="pointer-events-auto gap-2 items-center flex justify-end">
				<Palette projects={projects} />
				<ModeToggle />
			</div>
		</div>
	</header>
);

const Footer = () => (
	<footer className="bg-black/80 text-base-400 mx-auto max-w-7xl">
		<div className="mx-auto max-w-7xl overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
			<ul className="-mx-5 flex flex-wrap justify-center" aria-label="Footer">
				{navigation
					.filter((e) => e.visible)
					.map((item) => (
						<Button key={item.href} intent="link" href={item.href}>
							{item.name}
						</Button>
					))}
			</ul>
			<div className="w-fit mx-auto">{/* <SocialIcons /> */}</div>
			<p className="mt-8 text-center text-sm">
				&copy; 2022{" "}
				<span className="text-tone-600 drop-shadow-sm font-medium">
					Matías Bojko
				</span>
				. <em> All rights reserved.</em>
			</p>
		</div>
	</footer>
);

function MobileNavigation({ projects, ...props }) {
	return (
		<div {...props}>
			<Popover
				btnText={"Menu"}
				btnClass="shadow-md text-sm pl-4"
				title={"Navigation"}
				overlay={true}
				close={true}
				className="fixed inset-x-8 top-8 pb-6"
			>
				<nav className="mt-6">
					<ul className=" divide-y leading-8">
						{navigation
							.filter((e) => e.visible)
							.map(({ name, href }) => (
								<NavItem key={href} href={href}>
									{name}
								</NavItem>
							))}
					</ul>
				</nav>
				<div className=" mt-3 bg-base-500/5 -m-2 rounded">
					<SearchBar projects={projects} />
				</div>
			</Popover>
		</div>
	);
}

function DesktopNavigation(props) {
	return (
		<nav {...props}>
			<ul className="bg-over flex rounded px-3 shadow-md ring drop-shadow">
				{navigation
					.filter((e) => e.visible)
					.map(({ name, href }) => (
						<NavItem key={href} href={href}>
							{name}
						</NavItem>
					))}
			</ul>
		</nav>
	);
}
