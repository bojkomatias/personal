"use client";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { Button } from "@ui/Button";
import { List } from "@ui/Container";
import { Input, TextArea } from "@ui/Input";
import { useRouter } from "next/navigation";
import { Project, ProjectSchema } from "@schema/*";
import { updateRecord } from "@api/_client";

export default function Form({ project }: { project: Project }) {
  const router = useRouter();

  const form = useForm({
    initialValues: project,
    transformValues: (values) => ({
      ...values,
    }),
    validate: zodResolver(ProjectSchema),
    clearInputErrorOnChange: true,
  });

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        updateRecord("projects", values, router.refresh)
      )}
    >
      <div className="grid grid-cols-6 gap-x-5 items-center">
        <Input
          type={"text"}
          name="title"
          {...form.getInputProps("title")}
          error={form.errors["title"]}
          className="col-span-4"
        />{" "}
        <TextArea
          type={"text"}
          name="description"
          {...form.getInputProps("description")}
          error={form.errors["description"]}
          className="col-span-full"
        />{" "}
        <Input
          type={"text"}
          name="link"
          {...form.getInputProps("link")}
          error={form.errors["link"]}
          className="col-span-3"
        />{" "}
        <Input
          type={"text"}
          name="slug"
          {...form.getInputProps("slug")}
          error={form.errors["slug"]}
          className="col-span-3"
        />{" "}
        <Input
          type={"text"}
          name="tags"
          {...form.getInputProps("tags")}
          error={form.errors["tags"]}
          className="col-span-5"
        />
        <Button type="submit" intent="secondary" className={"justify-center"}>
          Save
        </Button>
      </div>
    </form>
  );
}
