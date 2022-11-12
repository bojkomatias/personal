import { Button } from "@ui/Button";
import { Input } from "@ui/Input";

export default function AdminProfile() {
	return (
		<div>
			<form action="#" method="POST">
				<div className="sm:overflow-hidden ">
					<div className="space-y-6 py-6 px-4 sm:p-6">
						<div>
							<h3 className="text-lg font-medium leading-6 ">Profile</h3>
							<p className="mt-1 text-sm text-gray-500">
								This information will be displayed publicly so be careful what
								you share.
							</p>
						</div>

						<div className="grid grid-cols-3 gap-6">
							<div className="col-span-3 sm:col-span-2">
								<Input name="First Name" />
							</div>{" "}
							<div className="col-span-3">
								<Input name="E-mail" type="email" />
								<p className="mt-2 text-sm text-gray-500">
									Brief description for your profile. URLs are hyperlinked.
								</p>
							</div>
							<div className="col-span-3">
								<label className="block text-sm font-medium text-gray-700">
									Photo
								</label>
								<div className="mt-1 flex items-center gap-6">
									<span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
										<svg
											className="h-full w-full text-gray-300"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
									</span>
									<Button type="button" styleas="outline">
										Change
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="float-right px-4 py-3 sm:px-6">
						<Button type="submit" styleas="primary">
							Save
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
