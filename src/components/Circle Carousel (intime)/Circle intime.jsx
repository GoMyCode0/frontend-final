"use client"

import React, { useState } from "react";
import styles from './circle.module.css'
import Link from "next/link";

const carouselItems = [
    {
        src: "/images/labioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Labioplastie (réduction des petites lèvres) : </a>,
        description: (
            <p>
                Cette intervention consiste à réduire la taille des petites lèvres vaginales lorsqu’elles sont jugées trop longues ou asymétriques. Elle vise à améliorer l’esthétique intime, le confort au quotidien et durant les rapports.
            </p>
        )
    },
    {
        src: "/images/labioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Hyménoplastie : </a>,
        description: (
            <p>
                Cette chirurgie permet de reconstruire l’hymen pour des raisons culturelles, symboliques ou personnelles. Elle est réalisée avec précision et discrétion, sans cicatrice visible.
            </p>
        )
    },
    {
        src: "/images/labioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Nymphoplastie de réduction : </a>,
        description: (
            <p>
                Variante de la labioplastie, cette opération vise à harmoniser la zone vulvaire en réduisant les excès de peau, tout en conservant une sensibilité intacte. Elle peut être esthétique ou fonctionnelle.
            </p>
        )
    },
    {
        src: "/images/labioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Augmentation des grandes lèvres par lipofilling : </a>,
        description: (
            <p>
                En réinjectant de la graisse prélevée sur le corps, cette technique restaure le volume des grandes lèvres pour un aspect plus jeune et rebondi, tout en hydratant naturellement la peau de la zone intime.
            </p>
        )
    },
    {
        src: "/images/labioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Vaginoplastie : </a>,
        description: (
            <p>
                Cette chirurgie vise à restaurer le tonus vaginal, souvent après un accouchement ou avec l’âge. Elle améliore le confort intime et peut renforcer la sensation pendant les rapports sexuels.
            </p>
        )
    },
    {
        src: "/images/labioplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Lipofilling du mont de Vénus : </a>,
        description: (
            <p>
                En réduisant ou en augmentant le volume du mont de Vénus, cette intervention permet d’harmoniser cette zone selon les souhaits de la patiente, que ce soit par liposuccion ou injection de graisse.
            </p>
        )
    },
    {
        src: "/images/penoplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Pénoplastie d’allongement : </a>,
        description: (
            <p>
                Cette chirurgie masculine consiste à libérer le ligament suspenseur du pénis, permettant un allongement visible au repos. Elle est souvent associée à un travail esthétique global pour un résultat harmonieux.
            </p>
        )
    },
    {
        src: "/images/penoplastie.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Pénoplastie d’élargissement par lipofilling : </a>,
        description: (
            <p>
                Par injection de graisse autologue, cette technique permet d’augmenter le volume du pénis avec des résultats naturels et sans corps étranger. Elle peut être combinée à l’allongement pour un effet complet.
            </p>
        )
    }
];


export default function IntimateSurgeries() {
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
