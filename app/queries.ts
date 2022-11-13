export async function getProjects() {
	const res = await fetch(
		`${process.env.POCKETBASE_URL}/api/collections/case_studies/records`,
	);

	const data = await res.json();
	return data?.items as Project[];
}
