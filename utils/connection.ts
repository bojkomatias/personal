import PocketBase from "pocketbase";

const POCKETBASE_URL = "http://127.0.0.1:8090";

export async function getInstance() {
	return new PocketBase(POCKETBASE_URL);
}
