<script lang="ts">
import CVErrorPage from "$lib/components/CVErrorPage.svelte";
import { onMount } from "svelte";
import { t, locale } from "$lib/i18n";
import { Download, MessageCircle, FileText } from "lucide-svelte";

let cvExists = true;
let isLoading = true;

$: downloadFilename =
	$locale === "ru" ? "ПархоменкоКирилл_Резюме.pdf" : "ParkhomenkoKirill_CV.pdf";

onMount(async () => {
	try {
		// Check if CV file exists by trying to fetch it
		const response = await fetch("/cv.pdf");
		cvExists = response.ok;
	} catch (error) {
		console.error("CV file check failed:", error);
		cvExists = false;
	} finally {
		isLoading = false;
	}
});
</script>

<svelte:head>
	<title>{$t('cv.pageTitle')}</title>
	<meta name="description" content={$t('cv.pageDescription')} />
</svelte:head>

{#if isLoading}
	<!-- Loading state -->
	<section class="min-h-screen bg-white flex items-center justify-center px-8 py-20">
		<div class="text-center">
			<FileText class="text-6xl mb-4 animate-bounce mx-auto" />
			<p class="text-xl font-bold">{$t('cv.loading')}</p>
		</div>
	</section>
{:else if !cvExists}
	<CVErrorPage />
{:else}

<!-- CV Display Page -->
<section class="min-h-screen bg-white py-10 px-8">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- CV Info Panel -->
      <div class="lg:w-1/3">
        <div
          class="bg-yellow-400 neobrut-shadow p-4 mb-4"
          style="transform: rotate(1deg);"
        >
          <h1 class="neobrut-title text-2xl">{$t('cv.title')}</h1>
        </div>

        <!-- Back to Home Button -->
        <div
          class="bg-gray-100 neobrut-shadow p-4 mb-4"
          style="transform: rotate(-0.5deg);"
        >
          <a
            href="/"
            class="neobrut-btn bg-black text-white hover:bg-gray-800 px-6 py-3 w-full text-center flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9,22 9,12 15,12 15,22"></polyline>
            </svg>
            {$t('cv.backHome')}
          </a>
        </div>

        <div
          class="bg-white neobrut-shadow p-6"
          style="transform: rotate(-0.5deg);"
        >
          <h2 class="text-xl font-black mb-4">{$t('cv.actions')}</h2>
          <div class="space-y-3">
            <a
              href="/cv.pdf"
              download={downloadFilename}
              class="neobrut-btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 w-full text-center flex items-center justify-center gap-2"
            >
              <Download size={16} />
              {$t('cv.download')}
            </a>
            <a
              href="/#contact"
              class="neobrut-btn bg-green-500 hover:bg-green-600 text-white px-6 py-3 w-full text-center flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              {$t('cv.contact')}
            </a>
          </div>
        </div>
      </div>

      <!-- PDF Viewer -->
      <div class="lg:w-2/3">
        <div
          class="bg-white p-4"
          style="transform: rotate(0.5deg);"
        >
          <div class="border-4 border-gray-300 bg-gray-100">
            <object
              data="/cv.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
              class="w-full"
              aria-label="CV/Resume PDF document"
            >
              <div class="text-center py-20">
                <FileText class="text-4xl mb-4 mx-auto" />
                <p class="text-lg font-bold text-gray-600 mb-4">
                  {$t('cv.pdfError')}
                </p>
                <a
                  href="/cv.pdf"
                  download
                  class="neobrut-btn bg-green-500 hover:bg-green-600 text-white px-8 py-4 inline-block"
                >
                  {$t('cv.downloadAlt')}
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/if}