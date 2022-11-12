import { Container, Heading } from "@ui/Container";
import PocketBase from "pocketbase";

import Viewer from "./Viewer";

async function getCases() {
	const res = await fetch(
		`${process.env.POCKETBASE_URL}/api/collections/case_studies/records`,
	);

	const data = await res.json();
	return data?.items;
}

export default async function CaseStudiesPage() {
	const cases = await getCases();

	return (
		<Container>
			<Heading
				title="Case Studies and Projects"
				description={"A list of projects I`ve done myself or with someone else"}
			/>
			<Viewer cases={cases} />
		</Container>
	);
}
