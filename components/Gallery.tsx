import Button from "./common/Button";

import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Gallery() {
    return (
        <section>
            <h2 className={`${syne.className} title`}>Mes projets</h2>
            <div className="flex flex-col mt-12">
                <Button text="Tous" />
                <Button text="Objets" />
                <Button text="Appartements" />
                <Button text="Hôtels & restaurants" />
            </div>
        </section>
    );
}
