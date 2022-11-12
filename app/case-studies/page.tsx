import { Container, Heading } from "@ui/Base";
import PocketBase from "pocketbase";

import Viewer from "./Viewer";

async function getCases() {
	const client = new PocketBase(process.env.POCKETBASE_URL);

	const data = await client.records.getList("case_studies", 1, 50, {
		filter: 'created >= "2022-01-01 00:00:00"',
	});

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
