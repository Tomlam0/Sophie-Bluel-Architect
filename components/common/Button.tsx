import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

type Props = {
    text: string;
};

export default function Button({ text }: Props) {
    return (
        <button
            type="submit"
            className={`${syne.className} text-background text-sm font-bold
             bg-primary rounded-full px-14 py-2 mx-auto
             hover:bg-primaryHover hover:transition-all ease-in-out duration-300`}
        >
            {text}
        </button>
    );
}
