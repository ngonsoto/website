<script lang="ts">
  import type { SecondaryFeature } from "../types/secondary-feature.type";
  export let secondaryFeature: SecondaryFeature;
  const { icon, title, text, link } = secondaryFeature;
</script>

<style lang="postcss">
  .h4 {
    @apply mb-micro;
  }
</style>

<div
  class="bg-off-white rounded-5xl px-x-small py-small text-center shadow-normal w-full max-w-sm sm:max-w-none sm:w-96 lg:w-1/3"
>
  <img src={icon} alt={title} class="mx-auto h-16 w-20" />
  <h2 class="h4 mt-x-small">{title}</h2>
  <p>{@html text}</p>
  {#if link}
    <a href={link.href}>{link.text}</a>
  {/if}
</div>
