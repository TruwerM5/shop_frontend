import type { Route } from "./+types/catalog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="page catalog-page">
      <h1>Catalog</h1>
    </div>
  )
}
