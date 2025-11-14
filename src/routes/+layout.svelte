<script lang="ts">
import "../app.css";
import favicon from "$lib/assets/favicon.svg";
import { locale, loading } from "$lib/i18n";
import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $loading}
	<!-- Loading state while i18n loads -->
	<div>Loading translations...</div>
{:else}
	<div lang={$locale}>
		<LanguageSwitcher />
		{@render children()}
	</div>
{/if}
