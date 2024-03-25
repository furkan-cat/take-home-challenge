export default async function getData() {
  const res = await fetch(
    "https://api.github.com/repos/facebook/react/issues",
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
