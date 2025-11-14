<script lang="ts">
import { t } from "$lib/i18n";
import { Code, Zap } from "lucide-svelte";
</script>

<!-- Hero Section -->
<section
  class="min-h-screen flex items-center justify-center bg-yellow-400 px-8 py-20 relative overflow-hidden"
>
  <!-- Background decorative elements -->
  <div class="absolute inset-0 pointer-events-none">
    <div
      class="absolute top-20 left-10 w-16 h-16 bg-red-500 neobrut-shadow-sm"
      style="transform: rotate(15deg);"
    ></div>
    <div
      class="absolute top-32 right-20 w-12 h-12 bg-purple-500 neobrut-shadow-sm"
      style="transform: rotate(-20deg);"
    ></div>
    <div
      class="absolute bottom-40 left-20 w-20 h-20 bg-green-500 neobrut-shadow-sm"
      style="transform: rotate(45deg);"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-14 h-14 bg-orange-500 neobrut-shadow-sm"
      style="transform: rotate(-10deg);"
    ></div>
  </div>

  <div class="max-w-6xl w-full relative z-10">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <!-- Main greeting card -->
      <div>
        <div
          class="bg-white neobrut-shadow p-8 mb-8"
          style="transform: rotate(-1deg);"
        >
          <h1 class="neobrut-title text-6xl md:text-8xl leading-none">
            {$t("hero.greeting")}<br />
            <span
              class="bg-pink-500 text-white px-4 py-2 inline-block neobrut-shadow-sm"
              style="transform: rotate(1deg);">{$t("hero.name")}</span
            >
          </h1>
        </div>

        <div
          class="bg-blue-500 text-white neobrut-shadow p-6"
          style="transform: rotate(1deg);"
        >
          <p class="text-xl font-bold uppercase">
            {$t("hero.subtitle")}<br />
            {$t("hero.description")}
          </p>
        </div>
      </div>

      <!-- Additional info cards -->
      <div class="space-y-6">
        <!-- Language stack highlight -->
        <div
          class="bg-red-500 text-white neobrut-shadow p-6"
          style="transform: rotate(2deg);"
        >
          <h3 class="text-2xl font-bold mb-3 uppercase flex items-center gap-2">
            <Code class="w-8 h-8" />
            {$t("hero.languageStack")}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-white text-red-500 px-3 py-1 neobrut-shadow-sm font-bold"
              >Go</span
            >
            <span
              class="bg-white text-red-500 px-3 py-1 neobrut-shadow-sm font-bold"
              >JS/TS</span
            >
            <span
              class="bg-white text-red-500 px-3 py-1 neobrut-shadow-sm font-bold"
              >Java</span
            >
            <span
              class="bg-white text-red-500 px-3 py-1 neobrut-shadow-sm font-bold"
              >Python</span
            >
            <span
              class="bg-white text-red-500 px-3 py-1 neobrut-shadow-sm font-bold"
              >C++</span
            >
            <span
              class="bg-white text-red-500 px-3 py-1 neobrut-shadow-sm font-bold"
              >Rust</span
            >
          </div>
        </div>


        <!-- Status card -->
        <div
          class="bg-green-500 text-white neobrut-shadow p-6"
          style="transform: rotate(1deg);"
        >
          <h3 class="text-2xl font-bold mb-3 uppercase flex items-center gap-2">
            <Zap class="w-8 h-8" />
            {$t("hero.status")}
          </h3>
          <p class="font-bold">{$t("hero.statusDescription")}</p>
        </div>
      </div>
    </div>

    <!-- Bottom decorative line -->
    <div class="mt-12 flex justify-center">
      <div class="flex gap-2">
        <div class="w-4 h-4 bg-pink-500 neobrut-shadow-sm"></div>
        <div class="w-4 h-4 bg-blue-500 neobrut-shadow-sm"></div>
        <div class="w-4 h-4 bg-green-500 neobrut-shadow-sm"></div>
        <div class="w-4 h-4 bg-orange-500 neobrut-shadow-sm"></div>
        <div class="w-4 h-4 bg-purple-500 neobrut-shadow-sm"></div>
      </div>
    </div>
  </div>
</section>
