import {
  isRouteErrorResponse,
  Links,
  Meta,
  Navigate,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { useUserStore } from "./stores/user.store";
import Header from "./components/Header/Header";
import type { Route } from "./+types/root";
import "~/styles/app.css";
import Nav from "./components/Nav";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import { useEffect, useMemo } from "react";
import { useUserNav } from "./hooks/useUserNav";
import { getUserPayload } from "./api/auth.api";
import { PROTECTED_ROUTES } from "./constants";

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
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
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
  const { pathname } = useLocation();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const isAuthInitialized = useUserStore((state) => state.isAuthInitialized);
  const setAuthInitialized = useUserStore((state) => state.setAuthInitialized);
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => 
    route === pathname ||
    pathname.startsWith(`${route}/`)
  );
  const redirectState = useMemo(() => ({
    from: pathname,
    }), 
    [pathname]
  );
 

  useEffect(() => {
    async function isAuthenticated() {
      try {
        const { data } = await getUserPayload();
        setUser(data);
      } finally {
        setAuthInitialized(true);
      }
    }
    
    isAuthenticated();
  }, [
    setUser,
    setAuthInitialized,
  ]);


  if (!isAuthInitialized) {
    return <GlobalLoading />;
  }

  if(isProtectedRoute && !user.userId) {
    return <Navigate to='/login' state={redirectState} />;
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
