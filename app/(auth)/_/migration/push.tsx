"use client";


import { Button } from "@ui/Button";
import PocketBase from "pocketbase";
import { useState } from "react";

async function createNew(data) {
	const client = new PocketBase("https://bojkomatias.fly.dev");

	const record = await client.records.create("case_studies", data);
}

export default function Push({ record }) {
	const [pushed, setpushed] = useState(false);
	return (
		<div>
			<Button
				styleas="primary"
				disabled={pushed}
				onClick={() => {
					// createNew(record);
					setpushed(true);
				}}
			>
				Push
			</Button>
		</div>
	);
}
