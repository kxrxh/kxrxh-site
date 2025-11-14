<script lang="ts">
import { t } from "$lib/i18n";

$: copyright = $t("footer.copyright").replace(
	"{year}",
	new Date().getFullYear().toString(),
);
</script>

<!-- Footer -->
<footer class="bg-black text-white py-8 px-8">
  <div class="max-w-4xl mx-auto text-center">
    <div
      class="neobrut-card bg-white text-black"
      style="transform: rotate(0.5deg);"
    >
      <p class="font-black text-2xl">{copyright}</p>
    </div>
  </div>
</footer>
