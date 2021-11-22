<script lang="ts">
  export let name: string;
  export let path: string;
  export let icon: string;
</script>

<a href={path} class="flex items-center text-black font-semibold btn-cta">
  <div class="w-12 flex-shrink-0">
    <img src={icon} alt={`${name}-icon`} width="24px" />
  </div>
  <span class="truncate"> More on {name}</span>
</a>
