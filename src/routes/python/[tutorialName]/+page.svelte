<script>
  import SvelteMarkdown from "svelte-markdown";

  /** @type {import('./$types').PageData} */
  export let data;
  let source = data.content;
</script>

<SvelteMarkdown {source} />
