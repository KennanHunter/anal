import { data } from "datalib";

const val = data();

fetch("http://localhost:8787", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(val),
});

export {};
