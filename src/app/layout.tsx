import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const font = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Seu Evento Começa Aqui",
  description: "Aplicação fullstack de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={font.className}>
        {children}
      </body>
    </html>
  );
}
