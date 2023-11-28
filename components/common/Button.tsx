import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

type Props = {
    text: string;
};

export default function Button({ text }: Props) {
    return (
        <button
            className={`${syne.className} text-primary font-bold
            border border-primary rounded-full px-5 py-2`}
        >
            {text}
        </button>
    );
}
