/** @type {import('./$types').PageLoad} */
export const load = async ({ params, fetch}) => {
  let title = params.tutorialName;
  const res = await fetch(`https://raw.githubusercontent.com/aidil-sekandar/masPy/main/static/tutorial/python/${title}.md`);
  const data = await res.text()

  return {
    content: data
  }
}