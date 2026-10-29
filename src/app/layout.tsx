import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Asraful Islam | Portfolio",
  description:
    "Portfolio of Md Asraful Islam, a CSE student and aspiring full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <footer className="site-footer">
          <div className="container footer-content">
            <a href="/#home" className="logo">
              Asraful<span>.</span>
            </a>

           <p>© 2026 Md Asraful Islam</p>
          </div>
        </footer>
      </body>
    </html>
  );
}