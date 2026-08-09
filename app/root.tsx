import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate
} from "react-router";
import { useUserStore } from "./stores/user.store";
import Header from "./components/Header/Header";
import type { Route } from "./+types/root";
import "~/styles/app.css";
import Nav from "./components/Nav";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import { useEffect, useRef } from "react";
import { useUserNav } from "./hooks/useUserNav";
import { getUserPayload } from "./api/auth.api";
import { PROTECTED_ROUTES } from "./constants";
import type { ApiUserPayload } from "../types/user";

export async function clientLoader() {
  const { data } = await getUserPayload();
  return data;
}

export function Layout({ 
  children,
 }: { 
  children: React.ReactNode,
 }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({
  loaderData
}: Route.ComponentProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const navLinks = useUserNav();
  const user = useUserStore((state) => state.user);
  const authStatus = useUserStore((state) => state.authStatus);
  const setUser = useUserStore((state) => state.setUser);
  const isInitialized = useRef(false);
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => 
    location.pathname === route ||
    location.pathname.startsWith(`${route}/`)
  );
  const isAuthPath = location.pathname === "/login" || location.pathname === "/signup";
  const shouldRedirect = isProtectedRoute && !user.userId || (isAuthPath && user.userId);

  useEffect(() => {
    if(isInitialized.current && !loaderData.userId) {
      return;
    }
    let userData: ApiUserPayload = user.userId || loaderData.userId
    ? loaderData
    : { userId: null };
    setUser(userData);
    isInitialized.current = true;
  }, [
    loaderData.userId,
    setUser,
    authStatus,
    location.pathname,
  ]);

  useEffect(() => {
    if(!isInitialized.current) {
      return;
    }
    const from = !isAuthPath ? location.pathname : "/";
    if(loaderData.userId && isAuthPath) {
      navigate("/", {
        replace: true,
      });
      return;
    }

    if(!shouldRedirect) {
      return;
    }
    console.log(user.userId);
    navigate("/login", {
      replace: true, 
      state: { from },
    });
  }, [
    isProtectedRoute,
    location.pathname,
    navigate,
    loaderData.userId,
    user.userId,
  ]);

  if (!isInitialized.current || shouldRedirect) {
    return <GlobalLoading />;
  }

  return (
    <>
      <Header>
        <Nav links={navLinks} />
      </Header>
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
