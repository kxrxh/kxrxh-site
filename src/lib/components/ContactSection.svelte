<script lang="ts">
import { t } from "$lib/i18n";
import { Mail, Code, Send } from "lucide-svelte";
</script>

<!-- Contact Section -->
<section id="contact" class="min-h-screen bg-white py-20 px-8">
  <div class="max-w-4xl mx-auto text-center">
    <div
      class="bg-green-500 text-white neobrut-shadow p-8 mb-12"
      style="transform: rotate(-0.5deg);"
    >
      <h2 class="neobrut-title text-5xl">{$t('contact.title')}</h2>
    </div>

    <div
      class="bg-orange-500 text-white neobrut-shadow p-8 mb-8"
      style="transform: rotate(0.5deg);"
    >
      <p class="text-xl font-bold mb-6">
        {$t('contact.description')}
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <a
          href="mailto:kxrxh.contact@gmail.com"
          class="neobrut-btn bg-white text-orange-500 hover:bg-pink-500 hover:text-white flex items-center justify-center gap-2"
        >
          <Mail size={16} />
          {$t('contact.email')}
        </a>
        <a
          href="https://github.com/kxrxh"
          target="_blank"
          class="neobrut-btn bg-blue-500 hover:bg-pink-500 flex items-center justify-center gap-2"
        >
          <Code size={16} />
          {$t('contact.github')}
        </a>
        <a
          href="https://t.me/kxrxh"
          target="_blank"
          class="neobrut-btn bg-pink-500 hover:bg-blue-500 flex items-center justify-center gap-2"
        >
          <Send size={16} />
          {$t('contact.telegram')}
        </a>
      </div>
    </div>

  </div>
</section>
