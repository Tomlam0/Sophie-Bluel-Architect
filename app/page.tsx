import dynamic from "next/dynamic";

import ContactForm from "@/components/forms/ContactForm";
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Hero = dynamic(() => import("@/components/sections/Hero"));

export default function Home() {
    return (
        <main className="flex flex-col gap-20 lg:gap-36">
            <Hero />
            <Gallery />
            <ContactForm />
        </main>
    );
}
