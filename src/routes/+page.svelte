<script lang="ts">
import Navigation from "$lib/components/Navigation.svelte";
import HeroSection from "$lib/components/HeroSection.svelte";
import AboutSection from "$lib/components/AboutSection.svelte";
import ProjectsSection from "$lib/components/ProjectsSection.svelte";
import SkillsSection from "$lib/components/SkillsSection.svelte";
import ContactSection from "$lib/components/ContactSection.svelte";
import { t, locale } from "$lib/i18n";

let scrolled = $state(false);

function handleScroll() {
	scrolled = window.scrollY > 50;
}

$effect(() => {
	window.addEventListener("scroll", handleScroll);
	return () => window.removeEventListener("scroll", handleScroll);
});
</script>

<svelte:head>
  <title>{$t('meta.title')}</title>
  <meta
    name="description"
    content={$t('meta.description')}
  />
</svelte:head>

<Navigation {scrolled} />
<HeroSection />
<AboutSection />
<ProjectsSection />
<SkillsSection />
<ContactSection />
