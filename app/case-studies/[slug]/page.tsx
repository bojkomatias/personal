
import { Container } from "@ui/Container";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
// import rehypeHighlight from 'rehype-highlight';
import { ArticleLayout } from "./ArticleLayout";

export default async function PostPage({ params }) {
	const { source, frontMatter } = await getCase(params.slug);

	return (
		<Container>
			<ArticleLayout source={source} />
		</Container>
	);
}

const getCase = async (slug: string) => {
	const postFilePath = path.join(
		path.join(process.cwd(), "public"),
		`${slug}/index.mdx`,
	);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		// mdxOptions: {
		// 	rehypePlugins: [rehypeHighlight],
		// },
		scope: data,
	});

	return {
		source: mdxSource,
		frontMatter: data,
	};
};
