import { Container } from "@ui/Container";

export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<Container>
			<span className="h-20 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-20 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-20 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-20 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-20 animate-pulse rounded bg-base-200 dark:bg-base-700" />
			<span className="h-20 animate-pulse rounded bg-base-200 dark:bg-base-700" />
		</Container>
	);
}
