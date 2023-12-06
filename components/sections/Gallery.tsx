// Used in Home page

import Filter from "../common/Filter";

import Image from "next/image";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const pictures = [
    { id: 1, src: "https://picsum.photos/610/813?random=1.webp", alt: "Image" },
    { id: 2, src: "https://picsum.photos/610/813?random=2.webp", alt: "Image" },
    { id: 3, src: "https://picsum.photos/610/813?random=3.webp", alt: "Image" },
    { id: 4, src: "https://picsum.photos/610/813?random=4.webp", alt: "Image" },
    { id: 5, src: "https://picsum.photos/610/813?random=5.webp", alt: "Image" },
    { id: 6, src: "https://picsum.photos/610/813?random=6.webp", alt: "Image" },
    { id: 7, src: "https://picsum.photos/610/813?random=7.webp", alt: "Image" },
    { id: 8, src: "https://picsum.photos/610/813?random=8.webp", alt: "Image" },
    { id: 9, src: "https://picsum.photos/610/813?random=9.webp", alt: "Image" },
];

export default function Gallery() {
    return (
        <section id="gallery">
            <h2 className={`${syne.className} title`}>Mes projets</h2>

            {/* Buttons */}
            <div
                className="flex flex-col md:flex-row md:justify-center
            gap-7 mt-12 w-3/4 mx-auto md:w-full"
            >
                <Filter text="Tous" />
                <Filter text="Objets" />
                <Filter text="Appartements" />
                <Filter text="Hôtels & restaurants" />
            </div>

            {/* Picture Grid */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-4 mt-12"
            >
                {pictures.map((picture) => (
                    <figure key={picture.id} className="flex flex-col gap-2">
                        <Image
                            src={picture.src}
                            alt={picture.alt}
                            width={610}
                            height={813}
                        />
                        <figcaption className="text-sm">
                            Abat-jour Tahina
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
