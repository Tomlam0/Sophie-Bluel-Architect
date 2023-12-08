interface ModalProps {
    closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
    return (
        <>
            <div
                className="fixed inset-0 bg-textDark/50"
                onClick={closeModal}
            ></div>
            <div
                className="fixed z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-background p-8 rounded"
            >
                Galerie photo
            </div>
        </>
    );
}
