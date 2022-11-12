"use client";
import {
	Dialog as D,
	Popover as P,
	Disclosure as Dis,
	Tab,
	Transition as T,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { cva, cx, VariantProps } from "class-variance-authority";
import {
	Dispatch,
	FC,
	forwardRef,
	Fragment,
	PropsWithChildren,
	SetStateAction,
} from "react";
import { Button } from "./Button";

interface DialogProps extends PropsWithChildren<{}> {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	className?: string;
}
const panelClass = "rounded bg-over mx-auto p-6 shadow-md ring";

export const Modal: FC<DialogProps> = (props) => (
	<T.Root show={props.open} as={Fragment}>
		<D
			static={true}
			open={props.open}
			onClose={() => props.setOpen(false)}
			className="relative z-20"
		>
			{/* Modal has backdrop */}
			<T.Child {...transitions.opacity}>
				<Backdrop />
			</T.Child>
			{/* Set panel placement */}
			<div className={cx("fixed inset-0 flex items-center justify-center")}>
				{/* Set custom transition */}
				<T.Child {...transitions.scale}>
					{/* Panel with modal classes */}
					<D.Panel className={cx(panelClass, "max-w-lg", props.className)}>
						{props.children}
					</D.Panel>
				</T.Child>
			</div>
		</D>
	</T.Root>
);
export const Toast: FC<DialogProps> = (props) => (
	<T.Root show={props.open} as={Fragment}>
		<D
			static={true}
			open={props.open}
			onClose={() => props.setOpen(false)}
			className="relative z-20"
		>
			{/* Set panel placement */}
			<div
				className={cx(
					"fixed right-8 bottom-8 flex items-center justify-center",
				)}
			>
				{/* Set custom transition */}
				<T.Child {...transitions.rtl}>
					{/* Panel with Toast classes */}
					<D.Panel
						className={cx(
							panelClass,
							" p-3 flex max-w-md gap-3 items-center",
							props.className,
						)}
					>
						{props.children}
						<Button className="px-1" onClick={() => props.setOpen(false)}>
							<XMarkIcon className="h-3 w-3" />
						</Button>
					</D.Panel>
				</T.Child>
			</div>
		</D>
	</T.Root>
);

export const Sidebar: FC<DialogProps> = (props) => (
	<T.Root show={props.open} as={Fragment}>
		<D
			static={true}
			open={props.open}
			onClose={() => props.setOpen(false)}
			className="relative z-20"
		>
			{/* Sidebar has backdrop */}
			<T.Child {...transitions.opacity}>
				<Backdrop />
			</T.Child>
			{/* Set panel placement */}
			<div
				className={cx(
					"fixed inset-y-0 left-0 flex items-center justify-center h-full",
				)}
			>
				{/* Set custom transition */}
				<T.Child {...transitions.ltr}>
					{/* Panel with Sidebar classes */}
					<D.Panel
						className={cx(
							panelClass,
							"relative h-screen max-w-lg rounded-l-none",
							props.className,
						)}
					>
						<Button
							className="absolute top-3 right-3 px-1"
							onClick={() => props.setOpen(false)}
						>
							<XMarkIcon className="h-5 w-5" />
						</Button>
						{props.children}
					</D.Panel>
				</T.Child>
			</div>
		</D>
	</T.Root>
);

export const Popover: FC<
	PropsWithChildren<{
		btnText: string;
		btnClass?: string;
		title?: string;
		overlay: boolean;
		className?: string;
		close: boolean;
	}>
> = ({ overlay = false, close = false, ...props }) => {
	return (
		<P className="relative ">
			{({ open }) => (
				<>
					<P.Button
						as={Button}
						styleas="outline"
						className={cx("mb-1 pl-3", props.btnClass)}
					>
						{props.btnText}
						<ChevronDownIcon
							className={cx(
								"mx-1 mt-px h-3 w-3 text-base-500/60 transition group-hover:text-base-500",
								open ? "rotate-180" : "",
							)}
						/>
					</P.Button>

					{/* Overlay with a conditional prop */}
					{overlay ? (
						<P.Overlay
							className={
								"fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition"
							}
						/>
					) : null}

					<T as={Fragment} {...transitions.dropdown}>
						<P.Panel
							focus={true}
							className={cx(panelClass, "fixed z-20 -mx-2", props.className)}
						>
							{close ? (
								<div className="flex flex-row-reverse items-center justify-between">
									<P.Button
										as={Button}
										aria-label="Close menu"
										className="px-1"
									>
										<XMarkIcon className={cx("h-3 w-3")} />
									</P.Button>
									<h3 className="ml-3 text-sm">{props.title}</h3>
								</div>
							) : null}
							{props.children}
						</P.Panel>
					</T>
				</>
			)}
		</P>
	);
};

export const Tabs = ({ values }: { values: { [k: string]: any } }) => {
	return (
		<Tab.Group>
			<Tab.List
				className={"flex justify-between gap-2 rounded rounded-b-none p-1 ring"}
			>
				{Object.keys(values).map((key) => (
					<Tab key={key} as={Fragment}>
						{({ selected }) => (
							<Button outline={selected} className={"flex-1 justify-center"}>
								{key}
							</Button>
						)}
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels>
				{Object.values(values).map((value, index) => (
					<Tab.Panel
						key={index}
						className={cx(panelClass, " rounded-t-none ring")}
					>
						{value}
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};

export const Disclosure = ({ values }: { values: { [k: string]: any } }) => (
	<div className="flex flex-col gap-2 rounded p-1 ring">
		{Object.entries(values).map(([k, v]) => (
			<Dis as="div">
				{({ open }) => (
					<>
						<Dis.Button
							as={Button}
							styleas="outline"
							className={cx(
								"w-full px-6 focus:bg-base-200 active:scale-100 dark:focus:bg-base-800",
								open ? "rounded-b-none" : "",
							)}
						>
							{k}
						</Dis.Button>
						<T {...transitions.grow}>
							<Dis.Panel
								static={true}
								className={cx(panelClass, "-mt-px rounded-t-none ring")}
							>
								{v}
							</Dis.Panel>
						</T>
					</>
				)}
			</Dis>
		))}
	</div>
);

/*
 *  Headless Transitions separated into a file
 */
const transitions = {
	opacity: {
		enter: "transition",
		enterFrom: "opacity-0",
		enterTo: "opacity-100",
		leave: "transition",
		leaveFrom: "opacity-100",
		leaveTo: "opacity-0",
	},
	scale: {
		enter: "transition",
		enterFrom: "scale-0",
		enterTo: "scale-100",
		leave: "transition",
		leaveFrom: "scale-100",
		leaveTo: "scale-0",
	},
	rtl: {
		enter: "transition",
		enterFrom: "translate-x-full",
		enterTo: "translate-x-0",
		leave: "transition",
		leaveFrom: "translate-x-0",
		leaveTo: "translate-x-full",
	},
	ltr: {
		enter: "transition",
		enterFrom: "-translate-x-full",
		enterTo: "translate-x-0",
		leave: "transition",
		leaveFrom: "translate-x-0",
		leaveTo: "-translate-x-full",
	},
	dropdown: {
		enter: "transition",
		enterFrom: "-translate-y-2/3 opacity-0",
		enterTo: "translate-y-0 opacity-100",
		leave: "transition",
		leaveFrom: "translate-y-0 opacity-100",
		leaveTo: "-translate-y-2/3 opacity-0",
	},
	grow: {
		enter: "transition",
		enterFrom: "-translate-y-1/2 opacity-0 scale-y-0",
		enterTo: "translate-y-0 opacity-100 scale-y-100",
		leave: "transition duration-75",
		leaveFrom: "translate-y-0 opacity-100 scale-y-100",
		leaveTo: "-translate-y-1/2 opacity-0 scale-y-0",
	},
};

/*
 * Backdrop with opacity and blur, for components that use them.
 */

const Backdrop = () => (
	<div
		className={"fixed inset-0 bg-black/50 backdrop-blur-sm transition"}
		aria-hidden="true"
	/>
);
