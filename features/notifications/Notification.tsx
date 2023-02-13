"use client";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";
import { Toast, transitions } from "@ui/Headless";
import { cx } from "class-variance-authority";
import React, {
	Dispatch,
	Fragment,
	SetStateAction,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useTimeout } from "@hooks/use-timeout";
import { NotificationContext } from "./NotificationContext";

export type NotificationType = {
	title: string;
	content: string;
	icon: (any: any) => JSX.Element;
};

export const Notification = () => {
	const [show, setShow] = useState(false);
	const { notification, timeout, setNotification } =
		useContext(NotificationContext);

	const { start, clear } = useTimeout(() => setShow(false), timeout);
	useEffect(() => {
		if (notification) {
			setShow(true);
			clear();
			start();
		}
	}, [notification]);

	if (notification) {
		return (
			<Transition.Root show={show} as={Fragment}>
				<Dialog
					open={show}
					onClose={() => null}
					className="relative z-20 mx-auto max-w-7xl"
				>
					{/* Set panel placement */}
					<div
						className={cx(
							"fixed right-8 bottom-8 flex items-center justify-center",
						)}
					>
						{/* Set custom transition */}
						<Transition.Child {...transitions.rtl}>
							{/* Panel with Toast classes */}
							<Dialog.Panel
								className={cx(
									" p-3 max-w-sm w-screen items-start h-48 gap-3 rounded bg-over mx-auto shadow-md ring flex flex-row-reverse",
								)}
							>
								<Button className="!p-0" onClick={() => setNotification(null)}>
									<XMarkIcon className="h-4 w-4" />
								</Button>

								<div className="ml-3 w-0 flex-1 pt-0.5">
									<p className="text-sm font-medium ">{notification.title}</p>
									<p className="mt-1 text-sm text-base-500">
										{notification.content}
									</p>
								</div>
								<notification.icon
									className="h-6 w-6 text-green-400 float-left"
									aria-hidden="true"
								/>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		);
	} else {
		return <></>;
	}
};
