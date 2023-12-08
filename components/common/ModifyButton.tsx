import React from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import Modal from "../sections/Modal";

export default function ModifyButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center gap-1">
                <button
                    onClick={() => {
                        setShowModal(true);
                    }}
                    className="inline-flex items-center p-1
            hover:text-secondary hover:transition-all ease-in-out duration-300"
                >
                    <HiOutlinePencilSquare className="h-5 w-5" />
                    <p className="text-sm">modifier</p>
                </button>
            </div>
            {showModal &&
                createPortal(
                    <Modal
                        closeModal={() => {
                            setShowModal(false);
                        }}
                    />,
                    document.body
                )}
        </>
    );
}
