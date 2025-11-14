<script lang="ts">
import { FileText } from "lucide-svelte";
import { t } from "$lib/i18n";

interface Props {
	scrolled: boolean;
}

let { scrolled }: Props = $props();
</script>

<!-- Navigation -->
<nav
  class="fixed top-4 left-4 right-4 z-50 {scrolled ? 'neobrut-shadow' : ''}"
  style="transition: all 0.3s ease;"
>
  <div class="bg-white neobrut-border p-4 flex justify-between items-center">
    <div class="font-black text-2xl">KXRXH</div>
    <div class="flex gap-4">
      <a href="#about" class="neobrut-btn text-sm px-4 py-2">{$t('nav.about')}</a>
      <a
        href="#projects"
        class="neobrut-btn text-sm px-4 py-2 bg-pink-500 hover:bg-yellow-400 text-white hover:text-black"
        >{$t('nav.projects')}</a
      >
      <a
        href="#skills"
        class="neobrut-btn text-sm px-4 py-2 bg-orange-500 hover:bg-pink-500"
        >{$t('nav.skills')}</a
      >
      <a
        href="#contact"
        class="neobrut-btn text-sm px-4 py-2 bg-blue-500 hover:bg-orange-500"
        >{$t('nav.contact')}</a
      >
      <a
        href="/cv"
        class="neobrut-btn text-sm px-4 py-2 bg-green-500 hover:bg-yellow-400 text-white hover:text-black flex items-center gap-1"
      >
        <FileText size={14} />
        {$t('nav.cv')}
      </a>
    </div>
  </div>
</nav>
