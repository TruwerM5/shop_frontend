import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/catalog.tsx"),
    route("cart", "routes/cart.tsx"),
    route("orders", "routes/orders.tsx"),
    layout("./layouts/auth.tsx", [
        route("login", "routes/login.tsx"),
        route("signup", "routes/signup.tsx"),
    ])

] satisfies RouteConfig;
