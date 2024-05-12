import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Julian's Portfolio",
  description: "Julian Forme - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body">
        <Providers>
          <div className="text-neutral-900 dark:text-white bg-slate-100 dark:bg-neutral-900 scroll-smooth antialiased bg-light-shape-pattern dark:bg-dark-shape-pattern">
            <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto px-5">
              <Navbar />
              <div className="my-auto">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
