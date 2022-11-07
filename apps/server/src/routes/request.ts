import { Data, ServerData } from "types";
import { Env } from "..";

export const requestHandler = async (
	request: Request,
	env: Env,
	context: any
) => {
	if (!request)
		return Response.json({ Error: "Must specify body" }, { status: 400 });
	if (!request.json())
		return Response.json(
			{ Error: "Request must be json" },
			{ status: 400 }
		);

	const cf = (request as any)
		.cf as IncomingRequestCfPropertiesGeographicInformation;

	const data = {
		...((await request.json()) as Data),
		country: (cf as any).country as string | undefined,
	} as ServerData;

	console.log(data);
	return Response.json({ Status: "Successful" });
};
