import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBackground from "../components/GlobalBackground";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "DIGI BIZ OS" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "DIGI BIZ OS" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#020408" },
      {
        name: "google-site-verification",
        content: "jJZo2ub7m53-lwas-6UJVubjuDIw13STxZr-Gmltxqk",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://digibizos.co.uk/#organization",
          name: "DIGI BIZ OS",
          url: "https://digibizos.co.uk",
          logo: {
            "@type": "ImageObject",
            url: "https://digibizos.co.uk/logo-512.png",
            width: 512,
            height: 512,
          },
          image: "https://digibizos.co.uk/logo-512.png",
          sameAs: ["https://www.digiformation.co.uk/"],
          areaServed: ["GB", "PK", "US"],
          description:
            "DIGI BIZ OS is a JARVIS-style AI business operating system for Windows, combining voice control, AI agents, skills, tools, workflows and desktop automation.",
          parentOrganization: {
            "@type": "Organization",
            name: "Digiformation Ltd",
            url: "https://www.digiformation.co.uk/",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@digiformation.co.uk",
              telephone: "+92-316-446-7464",
              availableLanguage: ["en", "ur"],
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://digibizos.co.uk/#website",
          name: "DIGI BIZ OS",
          alternateName: ["DigiBiz OS", "DIGIBIZOS", "DIGI BIZ OS Windows"],
          inLanguage: "en-GB",
          url: "https://digibizos.co.uk",
          publisher: { "@id": "https://digibizos.co.uk/#organization" },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://digibizos.co.uk/compare?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          [
            ["Enterprise Business Modules", "/modules"],
            ["AI Models Universe", "/models"],
            ["JARVIS Voice AI Control", "/voice-ai"],
            ["Open Source Software Suite", "/open-source"],
            ["One-Time Lifetime Pricing", "/pricing"],
            ["Download for Windows", "/download"],
            ["Software Comparisons", "/compare"],
            ["Multi-Agent Platform", "/agents"],
            ["Desktop Automation OS", "/desktop-os"],
            ["Blog & Knowledge Hub", "/blog"],
            ["Terms & Conditions", "/terms"],
            ["About Digiformation", "/about"],
            ["Contact & Support", "/contact"],
          ].map(([name, path]) => ({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name,
            url: `https://digibizos.co.uk${path}`,
            isPartOf: { "@id": "https://digibizos.co.uk/#website" },
          })),
        ),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "DIGI BIZ OS Blog",
        href: "/rss.xml",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalBackground />
      <Navbar />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}
