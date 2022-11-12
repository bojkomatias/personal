import "../ui/globals.css";
import { Ubuntu } from "@next/font/google";

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

// Lexend, Ubuntu, Raleway

const maven = Ubuntu({ weight: "300", subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={maven.className}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: modeScript }} />
				<link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
			</head>
			<body className="bg-base text-base-900 subpixel-antialiased dark:text-base-100 font-light">
				<div className="fixed inset-0 -z-10">
					<div className="h-full mx-auto max-w-7xl bg-over -z-10 shadow border-x border-base-500/10" />
				</div>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

import ModeToggle from "@ui/ModeToggle";
import { Button, NavItem } from "@ui/Base";
import { Popover } from "@ui/Headless";
import HomeLink from "./HomeLink";
import TonePicker from "./Tone";

const items = [
	{ name: "About", href: "/about" },
	{ name: "Case Studies", href: "/case-studies" },
	{ name: "Uses", href: "/uses" },
];

const Header = () => (
	<header className="pointer-events-none relative z-10 mx-auto h-20 w-full max-w-7xl px-8 pt-6">
		<div className="relative flex justify-between gap-4">
			<div className="pointer-events-auto flex flex-grow sm:flex-grow-0 ">
				<HomeLink />
			</div>
			<div className="flex  justify-end sm:justify-center">
				<MobileNavigation className="pointer-events-auto sm:hidden" />
				<DesktopNavigation className="pointer-events-auto hidden sm:block" />
			</div>
			<div className="flex justify-end">
				<div className="pointer-events-auto flex gap-1 items-center">
					<ModeToggle />
					<TonePicker />
				</div>
			</div>
		</div>
	</header>
);

const Footer = () => (
	<footer className="bg-black/80 text-base-400 mx-auto max-w-7xl">
		<div className="mx-auto max-w-7xl overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
			<ul className="-mx-5 flex flex-wrap justify-center" aria-label="Footer">
				{items.map((item) => (
					<Button key={item.href} styleas="link" href={item.href}>
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

function MobileNavigation(props) {
	return (
		<div {...props}>
			<Popover
				btnText={"Menu"}
				btnClass="shadow-md"
				title={"Navigation"}
				overlay={true}
				close={true}
				className="fixed inset-x-8 top-8 pb-6"
			>
				<nav className="mt-6">
					<ul className=" divide-y leading-8">
						{items.map(({ name, href }) => (
							<NavItem key={href} href={href}>
								{name}
							</NavItem>
						))}
					</ul>
				</nav>
			</Popover>
		</div>
	);
}

function DesktopNavigation(props) {
	return (
		<nav {...props}>
			<ul className="bg-over flex rounded px-3 shadow-md ring drop-shadow">
				{items.map(({ name, href }) => (
					<NavItem key={href} href={href}>
						{name}
					</NavItem>
				))}
			</ul>
		</nav>
	);
}
