import type React from "react";
import type { Route } from "../+types/root";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Auth" },
  ];
}


export default function AuthLayout({ children }: {children: React.ReactElement}) {
    return (
        <div className="layoyt auth-layout">
            <h4>Auth</h4>
            <Outlet />
        </div>
    )
}