<script lang="ts">
import { FileText, Menu, X } from "lucide-svelte";
import { t } from "$lib/i18n";

interface Props {
	scrolled: boolean;
}

let { scrolled }: Props = $props();
let isMenuOpen = $state(false);

function toggleMenu() {
	isMenuOpen = !isMenuOpen;
}

function closeMenu() {
	isMenuOpen = false;
}
</script>

<!-- Navigation -->
<nav
  class="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 neobrut-shadow-sm"
  style="transition: all 0.3s ease;"
>
  <div class="bg-white neobrut-border p-2 md:p-3 flex justify-between items-center">
    <div class="font-black text-lg md:text-xl">KXRXH</div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex gap-2">
      <a href="#about" class="neobrut-btn text-xs px-3 py-1.5">{$t('nav.about')}</a>
      <a
        href="#projects"
        class="neobrut-btn text-xs px-3 py-1.5 bg-pink-500 hover:bg-yellow-400 text-white hover:text-black"
        >{$t('nav.projects')}</a
      >
      <a
        href="#skills"
        class="neobrut-btn text-xs px-3 py-1.5 bg-orange-500 hover:bg-pink-500"
        >{$t('nav.skills')}</a
      >
      <a
        href="#contact"
        class="neobrut-btn text-xs px-3 py-1.5 bg-blue-500 hover:bg-orange-500"
        >{$t('nav.contact')}</a
      >
      <a
        href="#cv"
        class="neobrut-btn text-xs px-3 py-1.5 bg-green-500 hover:bg-yellow-400 text-white hover:text-black flex items-center gap-1"
      >
        <FileText size={12} />
        {$t('nav.cv')}
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden neobrut-btn p-1.5"
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >
      {#if isMenuOpen}
        <X size={16} />
      {:else}
        <Menu size={16} />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      class="md:hidden bg-white neobrut-border mt-3 p-3 flex flex-col gap-2 neobrut-shadow-sm"
      style="transition: all 0.3s ease;"
    >
      <a href="#about" class="neobrut-btn text-sm px-3 py-1.5 text-center" onclick={closeMenu}>
        {$t('nav.about')}
      </a>
      <a
        href="#projects"
        class="neobrut-btn text-sm px-3 py-1.5 bg-pink-500 hover:bg-yellow-400 text-white hover:text-black text-center"
        onclick={closeMenu}
        >{$t('nav.projects')}</a
      >
      <a
        href="#skills"
        class="neobrut-btn text-sm px-3 py-1.5 bg-orange-500 hover:bg-pink-500 text-center"
        onclick={closeMenu}
        >{$t('nav.skills')}</a
      >
      <a
        href="#contact"
        class="neobrut-btn text-sm px-3 py-1.5 bg-blue-500 hover:bg-orange-500 text-center"
        onclick={closeMenu}
        >{$t('nav.contact')}</a
      >
      <a
        href="#cv"
        class="neobrut-btn text-sm px-3 py-1.5 bg-green-500 hover:bg-yellow-400 text-white hover:text-black flex items-center justify-center gap-1"
        onclick={closeMenu}
      >
        <FileText size={12} />
        {$t('nav.cv')}
      </a>
    </div>
  {/if}
</nav>
