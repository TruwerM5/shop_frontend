import "@styles/page.css";
import { getProductById } from "~/api/products.api";
import type { Route } from "./+types/product";

export async function clientLoader({
    params
}: Route.ClientLoaderArgs) {
    const { data } = await getProductById(Number(params.id));
    return data;
}

export default function ProductPage({
    loaderData
}: Route.ComponentProps) {
    return (
        <div>
            Product Page!
        </div>
    )
}