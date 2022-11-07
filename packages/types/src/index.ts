export interface Data {
	browser: string;
	language: string;
	location: string;
	referrer: string;
	timezone: string;
	size: {
		width: number;
		height: number;
	};
}

export interface ServerData extends Data {
	country?: string;
}
