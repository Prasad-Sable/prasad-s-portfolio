import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prasad Sable — AI Engineer | Generative AI & Agentic Systems",
  description:
    "Portfolio of Prasad Sable, an AI Engineer specializing in Large Language Models (LLMs), RAG pipelines, Agentic AI, and production-ready backend systems.",
  keywords: [
    "Prasad Sable",
    "AI Engineer",
    "Generative AI",
    "LLM Applications",
    "Agentic AI",
    "RAG",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Prasad Sable" }],
  openGraph: {
    title: "Prasad Sable — AI Engineer Portfolio",
    description: "Building intelligent applications with LLMs, RAG pipelines, and Agentic AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#070709] text-[#f4f4f7] font-sans antialiased selection:bg-[#6c42e4]/30 selection:text-[#a78bfa] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
