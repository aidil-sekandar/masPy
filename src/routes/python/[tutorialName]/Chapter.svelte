<script>
  export let open = false;
  const handleClick = () => (open = !open);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="chapter">
  <div on:click={handleClick} class="chapter-title">
    <slot name="title" />
  </div>

  {#if open}
    <slot name="subtopic" />
  {/if}
</div>

<style>
  .chapter {
    width: 300px;
  }
  .chapter-title {
    padding: 1em;
    border-top: 1px solid #d3dce6;
    cursor: pointer;
  }
</style>
