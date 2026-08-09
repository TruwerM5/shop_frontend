import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useUserStore } from "./stores/user.store";
import Header from "./components/Header/Header";
import type { Route } from "./+types/root";
import "~/styles/app.css";
import Nav from "./components/Nav";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import { useEffect, useState } from "react";
import { useUserNav } from "./hooks/useUserNav";
import { getUserPayload } from "./api/auth.api";

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

export default function App() {
  const navLinks = useUserNav();
  const setUser = useUserStore((state) => state.setUser);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if(isInitialized) {
      return;
    }

    async function isAuthenticated() {
      const { data } = await getUserPayload();
      setUser(data);
      setIsInitialized(true);
    }
    
    isAuthenticated();
  }, [
    setUser,
  ]);

  if (!isInitialized) {
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
