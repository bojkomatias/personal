import { getRecord } from "@api/_server";
import { Button } from "@ui/Button";
import { Heading, List } from "@ui/Container";
import { Input } from "@ui/Input";

import Form from "./Form";

export default async function ProjectView({ params }) {
  const project = await getRecord("projects", params.id);
  return (
    <>
      <Heading title={project.title} description={""} />
      <Form project={project} />
    </>
  );
}
