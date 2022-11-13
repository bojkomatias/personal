import { Container } from "@ui/Container";

export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<Container>
			<span className="h-10 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-0 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-96 mx-24 animate-pulse rounded bg-base-200 dark:bg-base-700" />
		</Container>
	);
}
