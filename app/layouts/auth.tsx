import type { Route } from "../+types/root";
import { Outlet } from "react-router";
import '@styles/auth-layout.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Auth" },
  ];
}


export default function AuthLayout() {
    return (
        <div className="layoyt auth-layout">
          <Outlet />
        </div>
    )
}