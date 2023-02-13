"use client";

import { Collections } from "@types";
import { ClientResponseError } from "pocketbase";
import { getInstance } from "../connection";

export async function updateRecord(
	collection: Collections,
	bodyParams: any,
	refresh: Function,
	queryParams?: { expand: string },
) {
	const pb = await getInstance();

	try {
		const data = await pb
			.collection(collection)
			.update(bodyParams.id, bodyParams, queryParams);
		refresh();
		return data;
	} catch (error) {
		return error as ClientResponseError;
	}
}

export async function createRecord(
	collection: Collections,
	bodyParams: any,
	refresh: () => void,
	queryParams?: { expand: string },
) {
	const pb = await getInstance();

	try {
		const data = await pb
			.collection(collection)
			.create(bodyParams, queryParams);
		refresh();
		return data as Project;
	} catch (error) {
		return error as ClientResponseError;
	}
}

// export async function SignInAsAdmin(
// 	email: string,
// 	password: string,
// 	refresh: () => void,
// ) {
// 	const client = await getInstance();
// 	client.authStore.loadFromCookie(document.cookie);

// 	client.authStore.onChange(() => {
// 		document.cookie = client.authStore.exportToCookie({ httpOnly: false });
// 	});
// 	try {
// 		const { token, admin } = await client.admins.authViaEmail(email, password);
// 		refresh();
// 		return { token, admin };
// 	} catch (error) {
// 		return error;
// 	}
// }

export async function SignIn(
	email: string,
	password: string,
	refresh: () => void,
) {
	const pb = await getInstance();
	pb.authStore.loadFromCookie(document.cookie);

	pb.authStore.onChange(() => {
		document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
	});
	try {
		const { token, record } = await pb
			.collection("users")
			.authWithPassword(email, password);
		refresh();
		return { token, record };
	} catch (error) {
		return error;
	}
}

export async function SignOut(refresh: any) {
	const pb = await getInstance();
	pb.authStore.loadFromCookie(document.cookie);

	pb.authStore.onChange(() => {
		document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
	});
	pb.authStore.clear();
	refresh();
}
