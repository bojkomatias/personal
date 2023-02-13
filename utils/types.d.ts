import { z } from "zod";
import { ProjectSchema, UserSchema } from "./schema";

export type User = z.infer<typeof UserSchema>;
export type Project = z.infer<typeof ProjectSchema>;

export type Collections = "projects" | "users";
export type Collection = Project | User;

export type RecordList<Collection> = {
	items: Collection[];
	page: number;
	perPage: number;
	totalPages: number;
	totalItems: number;
};
