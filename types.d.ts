type Nav = {
	id: number;
	icon?: (props: any) => JSX.Element;
	name: string;
	href: string;
	visible?: boolean;
	nested?: Nav[];
};

type Project = {
	id: string;
	title: string;
	link: string;
	description: string;
	description: string;
	tags: string[];
	slug: string;
	created: Date;
	updated: Date;
};
