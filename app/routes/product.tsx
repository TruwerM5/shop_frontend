import "@styles/page.css";
import { getProductById } from "~/api/products.api";
import type { Route } from '../+types/root';
export async function clientLoader({
    params
}: Route.ClientLoaderArgs) {
    const { data } = await getProductById(Number(params.id));
    return data;
}

export default function ProductPage({
    loaderData
}: Route.ComponentProps) {

    console.log(loaderData);

    return (
        <div>
            Product Page!
        </div>
    )
}