"use client"

import React, { useState } from "react";
import styles from './circle.module.css'
import Link from "next/link";

const carouselItems = [
    {
        src: "/images/fue.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Greffe capillaire FUE : </a>,
        description: (
            <>
                <p>
                    La technique FUE (Follicular Unit Extraction) consiste à prélever des follicules un par un à l’arrière du crâne, puis à les réimplanter dans les zones dégarnies. Elle permet un rendu naturel, avec une cicatrisation rapide et sans trace linéaire.
                </p>
            </>
        )
    },
    {
        src: "/images/dhi.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Greffe capillaire DHI : </a>,
        description: (
            <>
                <p>
                    Variante de la FUE, la méthode DHI utilise un stylo implanteur (Choi Pen) pour insérer les follicules directement sans incision préalable. Elle offre une meilleure maîtrise de l’angle, de la direction et de la profondeur des cheveux implantés.
                </p>
            </>
        )
    },
    {
        src: "/images/beard.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Greffe de barbe : </a>,
        description: (
            <>
                <p>
                    Cette technique utilise les mêmes principes que la greffe capillaire (FUE ou DHI) pour implanter des follicules sur les joues, le menton ou la moustache. Idéale pour combler des zones clairsemées ou dessiner une barbe complète et symétrique.
                </p>
            </>
        )
    },
    {
        src: "/images/brows.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Greffe de sourcils : </a>,
        description: (
            <>
                <p>
                    Elle consiste à implanter des follicules fins et bien orientés dans la ligne sourcilière, pour un résultat naturel et durable. Elle est indiquée en cas de sourcils clairsemés, surépilés ou absents.
                </p>
            </>
        )
    },
    {
        src: "/images/prp.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">PRP (Plasma Riche en Plaquettes) : </a>,
        description: (
            <>
                <p>
                    Ce traitement utilise le propre plasma enrichi du patient pour stimuler la croissance capillaire, ralentir la chute des cheveux et renforcer les bulbes. Il est souvent combiné à une greffe pour optimiser les résultats.
                </p>
            </>
        )
    },
    {
        src: "/images/micro.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Micropigmentation capillaire : </a>,
        description: (
            <>
                <p>
                    Cette technique esthétique consiste à tatouer des micro-points pigmentaires sur le cuir chevelu pour imiter l’apparence de follicules. Elle est idéale pour créer un effet densité ou camoufler une alopécie diffuse.
                </p>
            </>
        )
    }
];


export default function HairSurgeries() {
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
