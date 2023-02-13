import { getInstance } from "../connection";
import { cookies } from "next/headers";
import { Collections, RecordList } from "@types";

export async function getSession() {
	const cook = cookies();
	return cook.get("pb_auth")?.value;
}

export async function getRecords<Collection>(
	collection: Collections,
	page = 1,
	perPage = 50,
	queryParams = { sort: "-created" },
) {
	const pb = await getInstance();
	const data = await pb
		.collection(collection)
		.getList(page, perPage, queryParams);

	return JSON.parse(JSON.stringify(data)) as RecordList<Collection>;
}

export async function getRecord<Collection>(
	collection: Collections,
	recordId: string,
	queryParams?: { expand: string },
) {
	const pb = await getInstance();
	const data = await pb.collection(collection).getOne(recordId, queryParams);

	return JSON.parse(JSON.stringify(data)) as Collection;
}
