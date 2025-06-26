export async function getArticleBySlug(slug) {
  const res = await fetch(`https://backend-final-lj3i.onrender.com/api/articles/${slug}`);
  if (!res.ok) return null;
  const article = await res.json();
  return article;
}
