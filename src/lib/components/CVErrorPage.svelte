<script lang="ts">
import { t } from "$lib/i18n";
import { FileText } from "lucide-svelte";
</script>

<!-- CV Error Page -->
<section class="min-h-screen bg-red-500 flex items-center justify-center px-8 py-20">
  <div class="max-w-2xl w-full">
    <div
      class="bg-white neobrut-shadow p-12 text-center"
      style="transform: rotate(-2deg);"
    >
      <div class="mb-8">
        <FileText class="text-8xl mb-4 mx-auto" />
        <h1 class="neobrut-title text-6xl mb-4">{$t('cvError.title')}</h1>
        <p class="text-xl font-bold text-gray-700 mb-6">
          {$t('cvError.message')}
        </p>
        <p class="text-lg font-medium text-gray-600 mb-8">
          {$t('cvError.help')}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/#projects" class="neobrut-btn bg-blue-500 hover:bg-blue-600 text-white px-8 py-4">
          {$t('cvError.viewProjects')}
        </a>
        <a href="/#skills" class="neobrut-btn bg-green-500 hover:bg-green-600 text-white px-8 py-4">
          {$t('cvError.viewSkills')}
        </a>
        <a href="/#contact" class="neobrut-btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-4">
          {$t('cvError.contactMe')}
        </a>
      </div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute top-20 left-10 w-16 h-16 bg-yellow-400 neobrut-shadow-sm opacity-20"
      style="transform: rotate(45deg);"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-12 h-12 bg-pink-400 neobrut-shadow-sm opacity-20"
      style="transform: rotate(-30deg);"
    ></div>
  </div>
</section>
