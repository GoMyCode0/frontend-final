export async function getArticleBySlug(slug) {
  const res = await fetch(`http://localhost:3001/api/articles/${slug}`);
  if (!res.ok) return null;
  const article = await res.json();
  return article;
}
