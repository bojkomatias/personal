'use client';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { useState } from 'react';
import { ExclamationCircleIcon, EyeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import PocketBase from 'pocketbase';
import { Toast } from '@ui/Headless';
import { useRouter } from 'next/navigation';

async function SignInAsAdmin(email: string, password: string) {
	const client = new PocketBase(process.env.POCKETBASE_URL);
	client.authStore.loadFromCookie(document.cookie);

	client.authStore.onChange(() => {
		document.cookie = client.authStore.exportToCookie({ httpOnly: false });
	});
	try {
		const { token, admin } = await client.admins.authViaEmail(email, password);
		return { token, admin };
	} catch (error) {
		return error;
	}
}

export default function SignIn() {
	const router = useRouter();
	const [showPass, setShowPass] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	async function SignInFunction() {
		const { token, data: error } = await SignInAsAdmin(email, password);
		if (token) {
			return router.refresh();
		}

		setError(error);
		setTimeout(() => {
			setError(null);
		}, 5000);
	}

	return (
		<>
			<div className="flex mb-32 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight ">Sign in to your account</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-over py-12 px-4 shadow-md ring sm:rounded-lg sm:px-10">
						<form
							className="space-y-8"
							onSubmit={(e) => {
								e.preventDefault();
								SignInFunction();
							}}
						>
							<Input name="Email address" onBlur={(e) => setEmail(e.target.value)} />
							<Input
								name="Password"
								onBlur={(e) => setPassword(e.target.value)}
								type={showPass ? 'text' : 'password'}
								right={
									<EyeIcon
										onClick={() => setShowPass(!showPass)}
										className={'h-4 w-4 cursor-pointer text-base-500/50 hover:text-base-700'}
									/>
								}
							/>

							<Button styleas="primary" type="submit" className="w-full justify-center">
								Sign In
							</Button>
							<Button styleas="outline" type="submit" className="w-full justify-center">
								<ShieldCheckIcon className='h-4 w-4' />
								Sign In as Administrator
							</Button>
						</form>
					</div>
				</div>
			</div>
			<Toast open={!!error} setOpen={setError}>
				<ExclamationCircleIcon className={'h-6 w-6 text-red-500'} />
				<div>
					{error?.code}
					<p>{JSON.stringify(error?.message)}</p>
				</div>
			</Toast>
		</>
	);
}
