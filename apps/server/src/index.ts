import { createCors } from "itty-cors";
import { Router } from "itty-router";
import { requestHandler } from "./routes/request";

export interface Env {
	REQUESTS: KVNamespace;
}

const router = Router();
const { preflight, corsify } = createCors({ origins: ["*"] });

router.all("*", preflight).post("/request", requestHandler);

export default {
	fetch: router.handle,
};
