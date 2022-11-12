"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "./Base";

export default function ModeToggle() {
	function disableTransitionsTemporarily() {
		document.documentElement.classList.add("[&_*]:!transition-none");
		window.setTimeout(() => {
			document.documentElement.classList.remove("[&_*]:!transition-none");
		}, 0);
	}

	function toggleMode() {
		disableTransitionsTemporarily();

		let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		let isSystemDarkMode = darkModeMediaQuery.matches;
		let isDarkMode = document.documentElement.classList.toggle("dark");

		if (isDarkMode === isSystemDarkMode) {
			window.localStorage.isDarkMode = undefined;
		} else {
			window.localStorage.isDarkMode = isDarkMode;
		}
	}

	return (
		<Button
			styleas="outline"
			className="shadow-md"
			aria-label="Toggle dark mode"
			onClick={toggleMode}
		>
			<SunIcon className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-tone-700 dark:hidden " />
			<MoonIcon className="hidden h-5 w-5 stroke-zinc-500 transition dark:block group-hover:stroke-tone-500" />
		</Button>
	);
}
