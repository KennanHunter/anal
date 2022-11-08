import { createCors } from "itty-cors";
import { Router } from "itty-router";
import { error } from "itty-router-extras";
import { requestHandler } from "./routes/request";

export interface Env {
	REQUESTS: KVNamespace;
}

const router = Router();
const { preflight, corsify } = createCors({ origins: ["*"] });

router.all("*", preflight).post("/request", requestHandler);

export default {
	// @ts-ignore
	fetch: (...args) =>
		router
			// @ts-ignore
			.handle(...args)
			.catch((err) => error(500, err.stack))
			.then(corsify), // cors should be applied to error responses as well
};
