import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main className="flex flex-col gap-20 lg:gap-36">
            <Hero />
            <Gallery />
            <Contact />
        </main>
    );
}
