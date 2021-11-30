<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let clazz = "";
  let dateNow = new Date(Date.now());
  export { clazz as class };
  export let storageKey: string;
  export let startDate: Date = new Date("2021-01-01");
  export let endDate: Date = new Date("2021-01-02");
  export let location: "top" | "bottom" = "top";

  let showBanner = false;

  const closeBanner = () => {
    showBanner = false;
    window.localStorage.setItem(storageKey, "true");
    if (clazz === "announcement-banner") {
      document.body.classList.remove("banner-is-shown");
    }
  };

  onMount(() => {
    showBanner = !window.localStorage.getItem(storageKey);
    if (clazz === "announcement-banner") {
      let isWithinTheDates = startDate < dateNow && dateNow < endDate;
      if (isWithinTheDates && showBanner) {
        document.body.classList.add("banner-is-shown");
      } else if (!isWithinTheDates || !showBanner) {
        closeBanner();
      }
    }
  });
</script>

<style lang="postcss">
  :global(.banner-is-shown) :global(.hero) {
    @apply mt-small !important;
  }

  :global(.banner-is-shown) :global(.docs-layout) {
    @apply mt-small;
  }

  .top {
    @apply top-0;
  }

  .bottom {
    @apply bottom-0 fixed z-10;
  }
</style>

{#if showBanner}
  <div
    transition:slide
    class="{location} px-4 py-2 flex justify-between items-center w-full bg-sand-dark shadow-sm text-xs sm:text-sm md:text-base"
  >
    <slot {closeBanner} />
  </div>
{/if}
