import AdminSidebar from "./Sidebar";
import { cookies } from "next/headers";
import SignIn from "./SignIn";
import { Heading } from "@ui/Container";

async function AskForCookie() {
	const cook = cookies();

	return cook.get("pb_auth")?.value;
}

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const res = await AskForCookie();
	if (!res) {
		return <SignIn />;
	}
	return (
		<div className="min-h-[80vh] relative">
			<AdminSidebar user={res} />
			<main className="md:pl-64">
				<div className="py-6">
					<Heading title={"Holanda"} description={""} />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
						{/* Replace with your content */}
						{children}
						{/* /End replace */}
					</div>
				</div>
			</main>
		</div>
	);
}
