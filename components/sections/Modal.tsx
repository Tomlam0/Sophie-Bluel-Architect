// Used in Home page / Displayed by ModifyButton

import { IoIosClose } from "react-icons/io";

import Button from "../common/Button";
import GalleryPicture from "../common/GalleryPicture";
import PicturesData from "../../data/galleryPicturesData.json";

interface ModalProps {
    closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
    return (
        <>
            {/* Background overlay div */}
            <div
                className="fixed inset-0 bg-textDark/50"
                onClick={closeModal}
            ></div>
            {/* End of background overlay div */}

            <div
                className="modal fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll
                flex flex-col gap-8 w-5/6 md:w-4/6 xl:w-3/5 h-2/3 
                bg-background rounded-lg py-8 md:py-12 px-6 md:px-20 xl:px-32"
            >
                <p className="text-2xl text-center">Galerie photo</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    <GalleryPicture
                        pictures={PicturesData}
                        showTitles={false}
                        showDeleteIcon={true}
                    />

                    {/* Delete picture icon */}
                </div>
                <hr className="h-0" />
                <Button text="Ajouter une photo" />

                {/* Close modal icon */}
                <button
                    onClick={closeModal}
                    className="absolute right-2 top-2 text-text
                    hover:text-secondary hover:transition-all ease-in-out duration-300"
                >
                    <IoIosClose className=" w-8 h-8 md:w-10 md:h-10" />
                </button>
            </div>
        </>
    );
}
