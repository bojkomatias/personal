"use client";

import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { useState } from "react";
import {
	ExclamationCircleIcon,
	EyeIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { Toast } from "@ui/Headless";
import { useRouter } from "next/navigation";
import { SignIn } from "@api/_client";

export default function LoginPage() {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	return (
		<>
			<div className="flex mb-32 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight ">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-over py-12 px-4 shadow-md ring sm:rounded-lg sm:px-10">
						<form
							className="space-y-8"
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<Input
								name="Email address"
								onBlur={(e) => setEmail(e.target.value)}
							/>
							<Input
								name="Password"
								onBlur={(e) => setPassword(e.target.value)}
								type={showPass ? "text" : "password"}
								right={
									<EyeIcon
										onClick={() => setShowPass(!showPass)}
										className={
											"h-4 w-4 cursor-pointer text-base-500/50 hover:text-base-700"
										}
									/>
								}
							/>

							<Button
								intent="primary"
								type="submit"
								className="w-full justify-center"
								onClick={() => SignIn(email, password, router.refresh)}
							>
								Sign In
							</Button>
						</form>
					</div>
				</div>
			</div>
			<Toast open={!!error} setOpen={setError}>
				<ExclamationCircleIcon className={"h-6 w-6 text-red-500"} />
				<div>
					{error?.code}
					<p>{JSON.stringify(error?.message)}</p>
				</div>
			</Toast>
		</>
	);
}
