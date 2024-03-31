"use server";

export default async function create() {
  const res = await fetch(
    "https://api.github.com/repos/facebook/react/issues",
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const originalData = await res.json();
  const data = structuredClone(originalData);

  return { data, originalData };
}
