<script>
  import SvelteMarkdown from "svelte-markdown";

  /** @type {import('./$types').PageData} */
  export let data;
  let source = data.content;
</script>

<div class="tutorial-container">
  <div class="chapters">
    {#each data.chapters as chapter}
      <div class="chapter">
        <h3>{chapter.topic}</h3>
      </div>
      {#if chapter.subtopics}
        <ul class="subtopic">
          {#each chapter.subtopics as subtopic}
            <li><a href="/python/{subtopic.slug}">{subtopic["sub-title"]}</a></li>
          {/each}
        </ul>
      {/if}
    {/each}
  </div>

  <SvelteMarkdown {source} />
</div>

<style>
  .tutorial-container {
    max-width: var(--max-width);
    margin: 2em auto;
    padding: 0 1em;
    display: flex;
    gap: 2em;
  }
  .chapters {
    border: 1px solid #d3dce6;
    border-radius: 5px;
  }
  .chapter {
    width: 300px;
    padding: 1em;
    border-bottom: 1px solid #d3dce6;
  }
  .subtopic {
    width: 300px;
    padding: 1em;
    display: grid;
    gap: 1em;
    border-bottom: 1px solid #d3dce6;
  }
  .chapters .subtopic:last-child {
    border-bottom: none;
  }
  .subtopic li a {
    font-size: 1.1rem;
  }
</style>
