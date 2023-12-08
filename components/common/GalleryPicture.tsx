import Image from "next/image";

type Picture = {
    id: number;
    src: string;
    title: string;
    category: string;
};

interface GalleryPictureProps {
    pictures: Picture[];
}

export default function GalleryPicture({ pictures }: GalleryPictureProps) {
    return (
        <>
            {pictures.map((picture) => (
                <figure key={picture.id} className="flex flex-col gap-2">
                    <Image
                        src={picture.src}
                        alt={picture.title}
                        width={610}
                        height={813}
                    />
                    <figcaption className="text-sm">{picture.title}</figcaption>
                </figure>
            ))}
        </>
    );
}
