import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Nav from "@/components/Nav";
import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"] });

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
            <body
                className={`${inter.className} bg-background flex flex-col 
                mx-4 mt-8 md:mx-8 xl:mx-72 xl:mt-12`}
            >
                <NextTopLoader color="#93532F" height={5} showSpinner={false} />
                <Nav />
                {children}
            </body>
        </html>
    );
}
