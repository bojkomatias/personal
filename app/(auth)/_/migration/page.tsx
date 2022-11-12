import PocketBase from "pocketbase";
import Push from "./push";

async function getCases() {
	const client = new PocketBase("http://127.0.0.1:8090");

	const data = await client.records.getList("case_studies", 1, 50, {
		filter: 'created >= "2022-01-01 00:00:00"',
	});

	return data?.items;
}

export default async function page() {
	// const records = await getCases();
	return (
		<div>
			{/* {records.map((r) => (
				<div className="m-10 flex items-center gap-8">
					<pre>{JSON.stringify(r, null, 2)}</pre>
					<Push record={r} />
				</div>
			))} */}
		</div>
	);
}
