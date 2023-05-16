export default async function googleWebFetch(url) {
  const response = await fetch(url, { cache: 'no-store' });
  const data = await response.json();

  return data;
}
