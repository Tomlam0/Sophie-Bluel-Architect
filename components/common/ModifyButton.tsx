import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function ModifyButton() {
    return (
        <div className="flex items-center justify-center gap-1">
            <button
                className="inline-flex items-center p-1
            hover:text-secondary hover:transition-all ease-in-out duration-300"
            >
                <HiOutlinePencilSquare className="h-5 w-5" />
                <p className="text-sm">modifier</p>
            </button>
        </div>
    );
}
