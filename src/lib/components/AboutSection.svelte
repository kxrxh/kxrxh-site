<script lang="ts">
import { Zap, Settings, GraduationCap } from "lucide-svelte";
import { t } from "$lib/i18n";
</script>

<!-- About Section -->
<section id="about" class="min-h-screen bg-white py-20 px-8">
  <div class="max-w-6xl mx-auto">
    <div
      class="bg-pink-500 text-white neobrut-shadow p-8 mb-12"
      style="transform: rotate(-0.5deg);"
    >
      <h2 class="neobrut-title text-5xl">{$t('about.title')}</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        class="bg-yellow-400 neobrut-shadow p-6"
        style="transform: rotate(0.5deg);"
      >
        <h3 class="neobrut-subtitle text-xl">{$t('about.whoIAm.title')}</h3>
        <p class="text-base font-bold leading-relaxed">
          {$t('about.whoIAm.description')}
        </p>
      </div>

      <div
        class="bg-blue-500 text-white neobrut-shadow p-6"
        style="transform: rotate(-0.5deg);"
      >
        <h3 class="neobrut-subtitle text-xl">{$t('about.keySkills.title')}</h3>
        <ul class="space-y-3 text-base font-bold">
          <li class="flex items-center gap-2">
            <span class="bg-white text-blue-500 px-2 py-1 neobrut-shadow-sm flex items-center justify-center"
              ><span class="font-bold text-xs">GO</span></span
            >
            {$t('about.keySkills.go')}
          </li>
            <li class="flex items-center gap-2">
              <span class="bg-white text-blue-500 px-2 py-1 neobrut-shadow-sm flex items-center justify-center"
                ><Zap size={14} /></span
              >
              {$t('about.keySkills.typescript')}
            </li>
            <li class="flex items-center gap-2">
              <span class="bg-white text-blue-500 px-2 py-1 neobrut-shadow-sm flex items-center justify-center"
                ><Settings size={14} /></span
              >
              {$t('about.keySkills.architecture')}
            </li>
        </ul>
      </div>

      <div
        class="bg-green-500 text-white neobrut-shadow p-6"
        style="transform: rotate(0.5deg);"
      >
        <h3 class="neobrut-subtitle text-xl flex items-center gap-2">
          <GraduationCap size={20} />
          {$t('about.education.title')}
        </h3>
        <div class="space-y-4 text-sm font-bold">
          <div>
            <div class="font-black text-yellow-300">{$t('about.education.itmo.name')}</div>
            <div class="text-xs opacity-90">{$t('about.education.itmo.location')} • 2022-2026</div>
            <div class="text-xs">{$t('about.education.itmo.degree')}</div>
          </div>
          <div>
            <div class="font-black text-yellow-300">{$t('about.education.yandex.name')}</div>
            <div class="text-xs opacity-90">2019-2021</div>
            <div class="text-xs">{$t('about.education.yandex.degree')}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
