"use client";

import Button from "./ui/Button";

import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

interface Inputs {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!captchaToken) {
            toast.error("Veuillez résoudre le CAPTCHA.");
            return;
        }
        toast.success("Message envoyé avec succès!");
    };

    return (
        <section id="contact" className="flex flex-col items-center">
            <h2 className={`${syne.className} title`}>Contact</h2>
            <p className="mt-1">Vous avez un projet ? Discutons-en !</p>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10 mt-10 w-2/4 lg:w-1/3"
            >
                <div>
                    <label className="text-sm" htmlFor="name">
                        Nom
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md
                        outline-none focus:border focus:border-primary focus:rounded"
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "Ce champ est requis",
                            minLength: {
                                value: 2,
                                message: "Au moins 2 caractères requis",
                            },
                            maxLength: {
                                value: 50,
                                message: "Maximum 50 caractères",
                            },
                        })}
                    />
                    {errors.name && (
                        <span className="text-secondary text-xs">
                            {errors.name.message}
                        </span>
                    )}
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
                        {...register("email", {
                            required: "Ce champ est requis",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Adresse email invalide",
                            },
                            maxLength: {
                                value: 254,
                                message: "Maximum 254 caractères",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-secondary text-xs">
                            {errors.email.message}
                        </span>
                    )}
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
                        {...register("message", {
                            required: "Ce champ est requis",
                            minLength: {
                                value: 10,
                                message: "Au moins 10 caractères requis",
                            },
                            maxLength: {
                                value: 1000,
                                message: "Maximum 1000 caractères",
                            },
                        })}
                    ></textarea>
                    {errors.message && (
                        <span className="text-secondary text-xs">
                            {errors.message.message}
                        </span>
                    )}
                </div>
                <ReCAPTCHA
                    className="flex justify-center"
                    sitekey={
                        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                    }
                    onChange={setCaptchaToken}
                />
                <Button text="Envoyer" />
            </form>

            <ToastContainer />
        </section>
    );
}
