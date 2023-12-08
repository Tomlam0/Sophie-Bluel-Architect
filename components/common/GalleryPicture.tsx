import Image from "next/image";

import PicturesData from "../../data/galleryPicturesData.json";

export default function GalleryPicture() {
    return (
        <>
            {PicturesData.map((picture) => (
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
