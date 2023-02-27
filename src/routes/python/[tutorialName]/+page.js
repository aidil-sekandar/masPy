/** @type {import('./$types').PageLoad} */
export const load = async ({ params, fetch }) => {
  let title = params.tutorialName;
  const resContent = await fetch(
    `https://raw.githubusercontent.com/aidil-sekandar/masPy/main/static/tutorial/python/${title}.md`
  );
  const dataContent = await resContent.text();
  const resChapters = await fetch("https://raw.githubusercontent.com/aidil-sekandar/masPy/main/static/tutorial/python/chapter.json")
  const dataChapters = await resChapters.json()

  return {
    content: dataContent,
    chapters: dataChapters.chapters
  };
};
