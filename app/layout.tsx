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
                px-4 md:px-8 lg:px-16 xl:max-w-7xl mx-auto
                mt-8 xl:mt-12
                selection:bg-secondary selection:text-background`}
            >
                <NextTopLoader color="#93532F" height={5} showSpinner={false} />
                <Nav />
                {children}
            </body>
        </html>
    );
}
