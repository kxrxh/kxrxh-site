<script lang="ts">
import { Settings, Zap, Network } from "lucide-svelte";
import { t } from "$lib/i18n";
</script>

<!-- Skills Section -->
<section id="skills" class="min-h-screen bg-green-500 py-20 px-8">
  <div class="max-w-6xl mx-auto">
    <div
      class="bg-white neobrut-shadow p-8 mb-12"
      style="transform: rotate(0.5deg);"
    >
      <h2 class="neobrut-title text-5xl">{$t('skills.title')}</h2>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Backend -->
      <div
        class="bg-white neobrut-shadow p-6"
        style="transform: rotate(-0.5deg);"
      >
        <div class="bg-blue-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('skills.backend.title')}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            class="bg-yellow-400 text-black px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >GO (Fiber, Gin, GORM)</span
          >
          <span
            class="bg-pink-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >TYPESCRIPT (Express, ElysiaJS)</span
          >
          <span
            class="bg-orange-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >JAVA (Spring, Hibernate)</span
          >
          <span
            class="bg-green-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >PYTHON (FastAPI)</span
          >
        </div>
      </div>

      <!-- Frontend -->
      <div
        class="bg-white neobrut-shadow p-6"
        style="transform: rotate(0.5deg);"
      >
        <div class="bg-pink-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('skills.frontend.title')}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            class="bg-yellow-400 text-black px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >REACT</span
          >
          <span
            class="bg-blue-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >SVELTE</span
          >
          <span
            class="bg-orange-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >TAILWIND</span
          >
          <span
            class="bg-green-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >TANSTACK QUERY</span
          >
          <span
            class="bg-blue-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >ZUSTAND</span
          >
          <span
            class="bg-green-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >CAPACITOR</span
          >
          <span
            class="bg-orange-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >C++ (Qt5)</span
          >
        </div>
      </div>

      <!-- Infrastructure -->
      <div
        class="bg-white neobrut-shadow p-6"
        style="transform: rotate(-0.5deg);"
      >
        <div class="bg-orange-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('skills.infrastructure.title')}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            class="bg-pink-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >DOCKER</span
          >
          <span
            class="bg-yellow-400 text-black px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >KUBERNETES</span
          >
          <span
            class="bg-blue-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >RABBITMQ</span
          >
          <span
            class="bg-green-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >KAFKA (REDPANDA)</span
          >
          <span
            class="bg-green-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >PROMETHEUS</span
          >
          <span
            class="bg-yellow-400 text-black px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >NGINX</span
          >
          <span
            class="bg-pink-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >TRAEFIK</span
          >
          <span
            class="bg-blue-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >HELM</span
          >
          <span
            class="bg-orange-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >TERRAFORM</span
          >
          <span
            class="bg-purple-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >HAPROXY</span
          >
        </div>
      </div>

      <!-- Databases -->
      <div
        class="bg-white neobrut-shadow p-6"
        style="transform: rotate(0.5deg);"
      >
        <div class="bg-green-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('skills.databases.title')}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            class="bg-yellow-400 text-black px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >POSTGRESQL</span
          >
          <span
            class="bg-pink-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >MONGODB</span
          >
          <span
            class="bg-blue-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >REDIS</span
          >
          <span
            class="bg-orange-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >MINIO</span
          >
          <span
            class="bg-yellow-400 text-black px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >DUCKDB</span
          >
          <span
            class="bg-pink-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >DGRAPH</span
          >
          <span
            class="bg-blue-500 text-white px-3 py-1 text-sm font-bold neobrut-shadow-sm"
            >INFLUXDB</span
          >
        </div>
      </div>


      <!-- Current Focus -->
      <div
        class="bg-white neobrut-shadow p-6"
        style="transform: rotate(0.5deg);"
      >
        <div class="bg-pink-500 text-white p-4 mb-4 neobrut-shadow-sm">
          <h3 class="font-black text-xl">{$t('skills.currentFocus.title')}</h3>
        </div>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="bg-green-500 text-white px-2 py-1 neobrut-shadow-sm flex items-center justify-center">
              <Settings size={16} />
            </span>
            <span class="font-bold text-sm">System Architecture</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-blue-500 text-white px-2 py-1 neobrut-shadow-sm flex items-center justify-center">
              <Zap size={16} />
            </span>
            <span class="font-bold text-sm">High-Performance APIs</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-orange-500 text-white px-2 py-1 neobrut-shadow-sm flex items-center justify-center">
              <Network size={16} />
            </span>
            <span class="font-bold text-sm">Distributed Systems</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
