import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sophie Bluel - Architecte d'intérieur",
    description:
        "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <NextTopLoader />
                {children}
            </body>
        </html>
    );
}
