import { getRecords } from "@api/_server";
import { Project, RecordList } from "@schema/*";
import { Container, Heading } from "@ui/Container";
import Viewer from "./Viewer";

export default async function CaseStudiesPage() {
  const { items: projects } = (await getRecords(
    "projects"
  )) as RecordList<Project>;

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
