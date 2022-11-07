const data = {
	browser: navigator.userAgent,
	language: navigator.language,
	timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
	size: {
		width: screen.width,
		height: screen.width,
	},
};

console.dir(data);

export {};
