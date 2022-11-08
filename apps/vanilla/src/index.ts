import { data } from "datalib";

const val = data();

fetch("http://localhost:8787/request", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(val),
})
	.then((val) => val.json())
	.then(console.dir);

export {};
