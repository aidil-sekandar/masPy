<script>
  import SvelteMarkdown from "svelte-markdown";
  import Chapter from "./Chapter.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  $: source = data.content;
  $: currentParamIndex = data.chapterList.indexOf(data.params);
  $: pageTitle = data.pageTitle.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
</script>

<svelte:head>
  <title>Python - {pageTitle.join(" ")}</title>
</svelte:head>

<div class="tutorial-container">
  <div class="chapters">
    {#each data.chapters as chapter}
      <Chapter>
        <h3 slot="title">{chapter.topic}</h3>
        <ul slot="subtopic" class="subtopic">
          {#each chapter.subtopics as subtopic}
            <li><a href="/python/{subtopic.slug}">{subtopic["sub-title"]}</a></li>
          {/each}
        </ul>
      </Chapter>
    {/each}
  </div>

  <div class="tutorial-content">
    <SvelteMarkdown {source} />
    <div class="next-pre-btn">
      {#if data.params === "pengenalan"}
        <a href="/"
          ><i
            class="fa-sharp fa-solid fa-house"
            style="margin-right: .6em; margin-bottom: .15em"
          />Utama</a
        >
      {:else}
        <a href="/python/{data.chapterList[currentParamIndex - 1]}"
          ><i class="fa-solid fa-chevron-left" style="margin-right: .6em" />Sebelumnya</a
        >
      {/if}
      <a href="/python/{data.chapterList[currentParamIndex + 1]}"
        >Seterusnya <i class="fa-solid fa-chevron-right" style="margin-left: .4em" /></a
      >
    </div>
  </div>
</div>

<style>
  .tutorial-container {
    max-width: var(--max-width);
    margin: 2em auto 4em auto;
    padding: 0 1em;
    display: flex;
    gap: 2em;
  }
  .chapters {
    border: 1px solid #d3dce6;
    border-top: none;
    height: fit-content;
    box-shadow: rgba(177, 177, 177, 0.1) 0px 4px 8px;
  }
  .chapters:first-child {
    border-top: none;
  }
  .subtopic {
    width: 300px;
    padding: 1em;
    display: grid;
    gap: 1em;
    border-top: 1px solid #d3dce6;
  }
  .tutorial-content {
    width: 100%;
  }
  .next-pre-btn {
    margin-top: 1.9em;
    display: flex;
    justify-content: space-between;
  }
  .next-pre-btn a {
    display: flex;
    align-items: center;
    background-color: rgb(71, 71, 182);
    color: white;
    padding: 0.5em 1.5em;
    border-radius: 5px;
  }
  .next-pre-btn a {
    text-decoration: none;
  }
  .next-pre-btn a:hover {
    text-decoration: none;
    background-color: rgb(54, 54, 151);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media screen and (max-width: 900px) {
    .tutorial-container {
      flex-direction: column;
    }
    .chapters {
      display: none;
    }
  }
</style>
