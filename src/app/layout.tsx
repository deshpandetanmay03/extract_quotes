import "~/styles/globals.css";
import {
    ClerkProvider,
} from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import TopBar from "./_components/topbar";

export const metadata: Metadata = {
    title: "PDF Quotes",
    description: "A PDF quote generator.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body className="text-text bg-base">
                <ClerkProvider>
                    <TopBar />
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
}
