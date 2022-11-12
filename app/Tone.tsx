"use client";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";

function random() {
	return `${Math.floor(Math.random() * (255 - 0 + 1) + 0)} ${Math.floor(
		Math.random() * (255 - 0 + 1) + 0,
	)} ${Math.floor(Math.random() * (255 - 0 + 1) + 0)}`;
}

export default function TonePicker() {
	function newTone() {
		let root: any = document.querySelector(":root");
		root.style.setProperty("--color-tone", random());
	}
	return (
		<Button styleas="outline" className="shadow-md" onClick={newTone}>
			<CursorArrowRippleIcon className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-tone-700" />
		</Button>
	);
}
