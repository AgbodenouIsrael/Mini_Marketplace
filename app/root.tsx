import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";
import { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import type { Route } from "./+types/root";
import "./app.css";
import "./styles/tailwind.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
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
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");

  // `onNavigate` passe la cible en interne au header et effectue
  // la navigation via `useNavigate` — garde la logique centralisée
  const onNavigate = (page: string) => {
    setCurrentPage(page);
    // Map logical page names used throughout the app to real route paths
    const map: Record<string, string> = {
      home: '/',
      dashboard: '/dashboard',
      'mes-demandes': '/mes-demandes',
      'mesdemandes': '/mes-demandes',
      'my-requests': '/mes-demandes',
      messagerie: '/messagerie',
      messages: '/messagerie',
      profil: '/profil',
      profile: '/profil',
      notification: '/notification',
      notifications: '/notification',
      login: '/login',
      register: '/register',
      'profil/modifier': '/profil/modifier',
      'profil/supprimer': '/profil/supprimer',
      'notification/:id': '/notification',
    };

    const target = map[page] ?? `/${page}`;
    navigate(target);
  };

  return (
    <>
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main>
        <Outlet />
      </main>
      <Footer />
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
