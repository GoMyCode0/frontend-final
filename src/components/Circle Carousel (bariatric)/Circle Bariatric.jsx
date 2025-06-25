"use client"

import React, { useState } from "react";
import styles from './circle.module.css'
import Link from "next/link";

const carouselItems = [
    {
        src: "/images/bypass.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Bypass gastrique : </a>,
        description: (
            <>
                <p>
                    Le bypass consiste à créer une petite poche gastrique et à la connecter directement à l’intestin grêle. Il diminue l’absorption des calories et procure une sensation de satiété rapide. Il est efficace pour une perte de poids importante et durable.
                </p>
            </>
        )
    },
    {
        src: "/images/sleeve.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Sleeve gastrectomie : </a>,
        description: (
            <>
                <p>
                    Cette intervention réduit la taille de l’estomac à un tube fin, diminuant la quantité d’aliments ingérés et la production de ghréline (l’hormone de la faim). Elle favorise une perte de poids rapide, avec une digestion quasi normale.
                </p>
            </>
        )
    },
    {
        src: "/images/anneau.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Anneau gastrique ajustable : </a>,
        description: (
            <>
                <p>
                    Un anneau en silicone est placé autour de la partie supérieure de l’estomac pour créer une petite poche. Il est ajustable par injection de sérum physiologique, permettant de réguler la sensation de satiété. Moins invasif, mais moins utilisé aujourd’hui.
                </p>
            </>
        )
    },
    {
        src: "/images/balloon.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Ballon gastrique : </a>,
        description: (
            <>
                <p>
                    Ce dispositif temporaire est placé dans l’estomac par voie endoscopique. Il occupe un volume qui limite l’apport alimentaire. Idéal pour les patients ne pouvant pas ou ne souhaitant pas de chirurgie lourde.
                </p>
            </>
        )
    },
    {
        src: "/images/mini.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Mini-bypass (Bypass en oméga) : </a>,
        description: (
            <>
                <p>
                    Cette technique crée une seule anastomose digestive (au lieu de deux dans le bypass classique), avec des résultats similaires sur la perte de poids et un temps opératoire réduit. Elle combine restriction et malabsorption.
                </p>
            </>
        )
    },
    {
        src: "/images/duo.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Switch duodénal (duodenal switch) : </a>,
        description: (
            <>
                <p>
                    C’est une chirurgie mixte, très puissante, qui associe une réduction de l’estomac à une dérivation intestinale importante. Elle offre une perte de poids maximale mais nécessite un suivi nutritionnel à vie très strict.
                </p>
            </>
        )
    }
];


export default function BariatricSurgeries() {
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
