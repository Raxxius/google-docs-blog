export default async function googleWebFetch(url) {
    const response = await fetch (
        url
    );

    const data = await response.json();

    return data;
}