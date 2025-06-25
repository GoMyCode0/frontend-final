"use client"

import React, { useState } from "react";
import styles from './circle.module.css'
import Link from "next/link";

const carouselItems = [
    {
        src: "/images/fox eyes.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Temporal Lift (lifting des tempes) : </a>,
        description: (
            <>
                <p>
                    Ce mini-lifting consiste à retendre la région des tempes et à remonter la queue du sourcil. Il offre un regard plus ouvert et dynamique, souvent préféré pour un effet « fox eyes » subtil.
                </p>
            </>
        )
    },
    {
        src: "/images/cat eye1.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Canthopexie : </a>,
        description: (
            <>
                <p>
                    Cette chirurgie vise à remonter légèrement le coin externe de l’œil, créant un effet « cat eye ». Elle permet de rajeunir le regard et d’harmoniser les traits, souvent recherchée pour son esthétique sophistiquée.
                </p>
            </>
        )
    },
    {
        src: "/images/blepharo.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Blépharoplastie (chirurgie des paupières) : </a>,
        description: (
            <>
                <p>
                    La blépharoplastie corrige les paupières tombantes et les poches sous les yeux. Elle vise à rajeunir le regard sans modifier l’expression naturelle du visage. L’intervention peut être réalisée sur les paupières supérieures, inférieures ou les deux.
                </p>
            </>
        )
    },
    {
        src: "/images/doublechin.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Chirurgie du double menton (lipo-menton) : </a>,
        description: (
            <>
                <p>
                    Elle consiste à aspirer la graisse sous le menton pour redéfinir l’ovale du visage. Elle peut être associée à une mini-lift ou une liposuccion du cou pour un résultat plus structuré.
                </p>
            </>
        )
    },
    {
        src: "/images/genioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Génioplastie (chirurgie du menton) : </a>,
        description: (
            <>
                <p>
                    Cette opération permet d’avancer, reculer ou remodeler le menton à l’aide d’implants ou par ostéotomie. Elle est souvent combinée à une rhinoplastie pour une amélioration globale du profil facial.
                </p>
            </>
        )
    },
    {
        src: "/images/browlift1.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Lifting du front (brow lift) : </a>,
        description: (
            <>
                <p>
                    Le lifting frontal remonte les sourcils tombants, réduit les rides horizontales et rajeunit l’expression. Il peut être réalisé par voie classique ou endoscopique pour une cicatrice discrète.
                </p>
            </>
        )
    },
    {
        src: "/images/facelift.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Lifting du visage (facelift) : </a>,
        description: (
            <>
                <p>
                    Le lifting cervico-facial traite le relâchement cutané au niveau des joues, du cou et de l’ovale. Il permet de retrouver des traits plus toniques tout en conservant un résultat naturel et personnalisé.
                </p>
            </>
        )
    },
    {
        src: "/images/lipofilling.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Lipofilling du visage : </a>,
        description: (
            <>
                <p>
                    Cette technique consiste à prélever de la graisse sur le corps et à la réinjecter dans le visage (pommettes, tempes, cernes). Elle restaure les volumes et améliore la texture de la peau, tout en étant 100 % biocompatible.
                </p>
            </>
        )
    },
    {
        src: "/images/otoplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Otoplastie (chirurgie des oreilles décollées) : </a>,
        description: (
            <>
                <p>
                    Elle permet de repositionner les oreilles jugées trop décollées ou asymétriques. Discrète et définitive, cette intervention est souvent pratiquée dès l’adolescence mais reste populaire chez les adultes.
                </p>
            </>
        )
    },
    {
        src: "/images/rhino.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Rhinoplastie : </a>,
        description: (
            <>
                <p>
                    La rhinoplastie vise à modifier la forme, la taille ou les angles du nez pour un meilleur équilibre facial. Elle peut également corriger des troubles respiratoires (rhinoseptoplastie) tout en apportant un résultat naturel.
                </p>
            </>
        )
    },

];


export default function FaceSurgeries() {
    const [current, setCurrent] = useState(0);
    const total = carouselItems.length;

    const next = () => setCurrent((current + 1) % total);
    const prev = () => setCurrent((current - 1 + total) % total);

    return (
        <>
            <div className={styles.upperContainer}>
                <div className={styles.firstWrapper}>
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-4">
                        {/* IMAGE CAROUSEL */}
                        <div className="relative w-80 h-64 overflow-hidden rounded-xl shadow-lg bg-neutral">
                            <img
                                key={current}
                                src={carouselItems[current].src}
                                alt={carouselItems[current].title}
                                className="object-cover w-full h-full transition-all duration-300"
                            />
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-sm"
                            >
                                ❮
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-sm"
                            >
                                ❯
                            </button>
                        </div>
                    </div>
                </div>

                {/* DESCRIPTION CAROUSEL */}
                <div className={styles.secondWrapper}>

                    <div className={styles.content}>
                        <div className="w-full md:w-[30rem] h-64 bg-base-100 p-4 rounded-xl shadow-lg flex flex-col justify-center">
                            <h2 className="text-xl font-bold mb-2">
                                {carouselItems[current].title}
                            </h2>
                            <p className="text-gray-600 text-sm overflow-y-auto max-h-40">
                                {carouselItems[current].description}
                            </p>
                        </div>
                    </div>


                    <div className={styles.ctaButtons}>
<Link href="/Formulaire">
            <button>Demander un devis</button>
        </Link>                        
                    </div>

                </div>

                <div className="flex justify-between mt-4">
                    <div className={styles.arrowButtons}>
                        <button onClick={prev} className="btn btn-outline btn-sm">
                            ▲
                        </button>
                        <button onClick={next} className="btn btn-outline btn-sm">
                            ▼
                        </button>
                    </div>
                </div>


            </div>

        </>
    );
}
