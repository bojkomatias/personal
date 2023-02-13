import { getRecords } from "@api/_server";
import { Project, RecordList } from "@schema/*";
import { Button } from "@ui/Button";
import React from "react";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { items: projects } = (await getRecords(
    "projects"
  )) as RecordList<Project>;
  return (
    <div className="flex gap-4">
      <div className="w-40 pt-20">
        {projects.map((p) => (
          <Button
            key={p.id}
            href={`/_/projects/${p.id}`}
            className={"justify-center"}
          >
            {p.title}
          </Button>
        ))}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
