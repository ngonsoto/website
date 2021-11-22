<script lang="ts">
  export let title: string;
  export let path: string;
</script>

<style lang="postcss">
  a {
    @apply underline;
  }
</style>

<a href={path}>{title}</a>
