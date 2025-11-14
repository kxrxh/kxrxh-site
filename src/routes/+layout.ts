import type { LayoutLoad } from "./$types";
import { loadTranslations } from "$lib/i18n";
import { browser } from "$app/environment";

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	let initLocale = "en";
	if (browser) {
		const savedLocale = localStorage.getItem("preferred-language");
		if (savedLocale === "en" || savedLocale === "ru") {
			initLocale = savedLocale;
		}
	}

	await loadTranslations(initLocale, pathname);

	return {};
};
