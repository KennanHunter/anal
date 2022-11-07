let scrolled = false;

export const data = () => ({
	browser: navigator.userAgent,
	language: navigator.language,
	location: window.location.href,
	referrer: document.referrer,
	timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
	size: {
		width: screen.width,
		height: screen.width,
	},
});

export const onScroll = () => {
	// TODO:
	if (!scrolled) return;
};
