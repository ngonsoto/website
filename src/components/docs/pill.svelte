<script lang="ts">
  export let text: string;
  const capitalised = text.charAt(0).toUpperCase() + text.slice(1);
</script>

<span
  class="ml-1.5 px-3 py-0.5 text-xs font-semibold text-black bg-pink-900 rounded-lg shadow-light"
  class:bg-pink-900={text === "soon"}
  class:bg-orange-700={text === "beta"}
>
  {capitalised}
</span>
