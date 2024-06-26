import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PetSoft - Pey daycare software.",
    description: "Take care of your pets with PetSoft"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-sm min-h-screen text-zinc-900 bg-[#e5e8ec]`}>{children}</body>
        </html>
    );
}
