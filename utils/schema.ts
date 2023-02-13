import { z } from "zod";

export const ProjectSchema = z.object({
	id: z.string(),
	title: z.string().min(6, { message: "Title should have at least 6 letters" }),
	description: z.string().min(10, {
		message: "A fit description should be above 10 characters long",
	}),
	link: z.string(),
	slug: z.string(),
	tags: z.preprocess(
		(e: string) => e.split(","),
		z.string().array().optional(),
	),
	created: z.string(),
	updated: z.string(),
});

export const UserSchema = z.object({
	id: z.string(),
	created: z.string(),
	updated: z.string(),
	username: z
		.string()
		.min(6, { message: "Name should have at least 6 characters" }),
	email: z.string().email({ message: "Email should be valid" }),
	emailVisibility: z.boolean(),
	verified: z.boolean(),
	avatar: z.string(),
	role: z.string(),
});
