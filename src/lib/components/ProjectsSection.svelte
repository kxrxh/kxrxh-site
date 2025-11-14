<script lang="ts">
import { t } from "$lib/i18n";
</script>

<!-- Projects Section -->
<section id="projects" class="min-h-screen bg-pink-500 py-20 px-8">
  <div class="max-w-6xl mx-auto">
    <div
      class="bg-white neobrut-shadow p-8 mb-12"
      style="transform: rotate(0.5deg);"
    >
      <h2 class="neobrut-title text-5xl">{$t('projects.title')}</h2>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- BeesBiz Project -->
      <div
        class="bg-white neobrut-shadow p-6 flex flex-col"
        style="transform: rotate(-1deg);"
      >
        <div class="bg-green-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('projects.beesbiz.title')}</h3>
        </div>
        <div class="flex-flex-grow">
          <p class="font-bold text-lg mb-4">
            {$t('projects.beesbiz.description')}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
          <span
            class="bg-yellow-400 text-black px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >GO</span
          >
          <span
            class="bg-cyan-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >GRPC</span
          >
          <span
            class="bg-pink-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >SVELTE</span
          >
          <span
            class="bg-blue-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >KUBERNETES</span
          >
          <span
            class="bg-orange-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >TIDB</span
          >
          <span
            class="bg-purple-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >POSTGRESQL</span
          >
          <span
            class="bg-green-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >RABBITMQ</span
          >
          <span
            class="bg-blue-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >PROMETHEUS</span
          >
          <span
            class="bg-yellow-400 text-black px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >GRAFANA</span
          >
          </div>
        </div>
        <a
          href="https://github.com/OrientalLines/BeesBiz"
          target="_blank"
          class="neobrut-btn bg-orange-500 hover:bg-green-500 w-full inline-block text-center"
        >
          {$t('projects.viewOnGithub')}
        </a>
      </div>

      <!-- RISC Processor Project -->
      <div
        class="bg-white neobrut-shadow p-6 flex flex-col"
        style="transform: rotate(1deg);"
      >
        <div class="bg-orange-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('projects.riscProcessor.title')}</h3>
        </div>
        <div class="grow">
          <p class="font-bold text-lg mb-4">
            {$t('projects.riscProcessor.description')}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
          <span
            class="bg-pink-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >PYTHON</span
          >
          <span
            class="bg-blue-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >RISC</span
          >
          <span
            class="bg-yellow-400 text-black px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >ASSEMBLER</span
          >
          <span
            class="bg-green-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >CI/CD</span
          >
          </div>
        </div>
        <a
          href="https://github.com/kxrxh/CA-Experiment"
          target="_blank"
          class="neobrut-btn bg-green-500 hover:bg-orange-500 w-full inline-block text-center"
        >
          {$t('projects.viewOnGithub')}
        </a>
      </div>

      <!-- DriveGoMingle Project -->
      <div
        class="bg-white neobrut-shadow p-6 flex flex-col"
        style="transform: rotate(0.5deg);"
      >
        <div class="bg-purple-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('projects.driveGoMingle.title')}</h3>
        </div>
        <div class="grow">
          <p class="font-bold text-lg mb-4">
            {$t('projects.driveGoMingle.description')}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
          <span
            class="bg-pink-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >SVELTE</span
          >
          <span
            class="bg-cyan-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >CAPACITOR</span
          >
          <span
            class="bg-blue-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >SVELTEKIT</span
          >
          <span
            class="bg-green-500 text-white px-2 py-1 text-sm font-bold neobrut-shadow-sm"
            >TailwindCSS</span
          >
          </div>
        </div>
        <a
          href="https://github.com/OrientalLines/DriveGoMingle"
          target="_blank"
          class="neobrut-btn bg-purple-500 hover:bg-pink-500 w-full inline-block text-center"
        >
          {$t('projects.viewOnGithub')}
        </a>
      </div>
    </div>
  </div>
</section>
