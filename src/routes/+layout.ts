import type { LayoutLoad } from "./$types";
import { loadTranslations } from "$lib/i18n";

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	// Default to English, language switcher will handle locale changes
	const initLocale = "en";

	await loadTranslations(initLocale, pathname);

	return {};
};
