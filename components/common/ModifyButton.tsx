import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function ModifyButton() {
    return (
        <button
            className="flex justify-center items-center gap-1
                    hover:text-secondary hover:transition-all ease-in-out duration-300"
        >
            <HiOutlinePencilSquare className="h-5 w-5" />
            <p className="text-sm">modifier</p>
        </button>
    );
}
