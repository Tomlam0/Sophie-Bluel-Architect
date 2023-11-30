"use client";

import React, { useState } from "react";
import { Syne } from "next/font/google";
import clsx from "clsx";

const syne = Syne({ subsets: ["latin"] });

type FilterProps = {
    text: string;
};

export default function Filter({ text }: FilterProps) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            className={clsx(
                syne.className,
                "text-primary font-bold border border-primary rounded-full px-5 py-2",
                { "text-placeholder bg-primary": isActive }
            )}
            onClick={toggleActive}
        >
            {text}
        </button>
    );
}
