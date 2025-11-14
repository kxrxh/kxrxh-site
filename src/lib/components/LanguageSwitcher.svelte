<script lang="ts">
import { locale, t } from "$lib/i18n";
import { goto } from "$app/navigation";
import { page } from "$app/stores";

const languages = [
	{ code: "en", name: "EN", fullName: "English" },
	{ code: "ru", name: "RU", fullName: "Русский" },
];

function switchLanguage(newLocale: string) {
	// Save current scroll position
	const currentScrollY = window.scrollY;

	$locale = newLocale;

	localStorage.setItem("preferred-language", newLocale);

	// Restore scroll position after the DOM updates
	setTimeout(() => {
		window.scrollTo(0, currentScrollY);
	}, 0);
}
</script>

<div class="fixed bottom-4 right-4 z-60">
	<div class="bg-white border-4 border-black p-1 flex gap-1 transform -rotate-1">
		{#each languages as lang}
			<button
				class="font-black text-sm px-3 py-1 border-2 {lang.code === $locale ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-black hover:text-white'} transition-colors"
				onclick={() => switchLanguage(lang.code)}
				aria-label={`Switch to ${lang.fullName}`}
			>
				{lang.name}
			</button>
		{/each}
	</div>
</div>
