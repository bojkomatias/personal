import { Container, Heading } from "@ui/Container";
import { getProjects } from "../queries";

import Viewer from "./Viewer";

export default async function CaseStudiesPage() {
	const projects = await getProjects();

	return (
		<Container>
			<Heading
				title="Case Studies and Projects"
				description={"A list of projects I`ve done myself or with someone else"}
			/>
			<Viewer projects={projects} />
		</Container>
	);
}
