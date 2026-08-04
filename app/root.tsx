import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useUserStore } from "./stores/user.store";
import Header from "./components/Header";
import type { Route } from "./+types/root";
import "~/styles/app.css";
import Nav from "./components/Nav";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import { useEffect, useState, StrictMode } from "react";
import { useUserNav } from "./hooks/useUserNav";

export function Layout({ children }: { children: React.ReactNode }) {
  const checkIsAuthenticated = useUserStore((state) => state.checkIfAuthenticated);
  const [isLoading, setIsLoading] = useState(true);

  const navLinks = useUserNav();
  useEffect(() => {
    async function initializeAuth() {
      try {
        await checkIsAuthenticated();
      } finally {
        setIsLoading(false);
      }
    }

    initializeAuth();
  },[checkIsAuthenticated]);


  return (
    <StrictMode>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {isLoading ? (
            <GlobalLoading />
          ): (
            <>
            <Header>
              <Nav links={navLinks} />
            </Header>
            {children}
            </>
          )}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </StrictMode>
  );
}

export default function App() {
  return <Outlet />;
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
