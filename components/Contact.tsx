import Button from "./ui/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center">
            <h2 className={`${syne.className} title`}>Contact</h2>
            <p className="mt-1">Vous avez un projet ? Discutons-en !</p>

            {/* Form */}
            <form className="flex flex-col gap-10 mt-10 w-2/4 lg:w-1/3">
                <div>
                    <label className="text-sm" htmlFor="name">
                        Nom
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md
                        outline-none focus:border focus:border-primary focus:rounded"
                        type="text"
                        id="name"
                    />
                </div>
                <div>
                    <label className="text-sm" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md
                        outline-none focus:border focus:border-primary focus:rounded"
                        type="email"
                        id="email"
                    />
                </div>
                <div>
                    <label className="text-sm" htmlFor="message">
                        Message
                    </label>

                    <textarea
                        className="w-full p-3 text-sm shadow-md
                        outline-none focus:border focus:border-primary focus:rounded"
                        rows={6}
                        id="message"
                    ></textarea>
                </div>
                <Button text="Envoyer" />
            </form>

            <ToastContainer />
        </section>
    );
}
