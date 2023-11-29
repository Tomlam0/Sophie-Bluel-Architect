import dynamic from "next/dynamic";

import Contact from "@/components/Contact";
const Gallery = dynamic(() => import("@/components/Gallery"));
const Hero = dynamic(() => import("@/components/Hero"));

export default function Home() {
    return (
        <main className="flex flex-col gap-20 lg:gap-36">
            <Hero />
            <Gallery />
            <Contact />
        </main>
    );
}
