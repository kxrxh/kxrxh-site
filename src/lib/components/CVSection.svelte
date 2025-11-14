<script lang="ts">
	import { t, locale } from "$lib/i18n";
	import { Download, MessageCircle, FileText } from "lucide-svelte";

	$: downloadFilename =
		$locale === "ru" ? "ПархоменкоКирилл_Резюме.pdf" : "ParkhomenkoKirill_CV.pdf";
</script>

<section id="cv" class="min-h-screen bg-white py-20 px-8">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- CV Info Panel -->
      <div class="lg:w-1/3">
        <div
          class="bg-yellow-400 neobrut-shadow p-4 mb-4"
          style="transform: rotate(1deg);"
        >
          <h2 class="neobrut-title text-2xl">{$t('cv.title')}</h2>
        </div>

        <div
          class="bg-white neobrut-shadow p-6"
          style="transform: rotate(-0.5deg);"
        >
          <h3 class="text-xl font-black mb-4">{$t('cv.actions')}</h3>
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
              href="#contact"
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
              data="cv.pdf"
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
                  href="cv.pdf"
                  download={downloadFilename}
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
