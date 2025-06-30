"use client"

import React, { useState } from "react";
import styles from './carousel.module.css'
import Link from "next/link";

const carouselItems = [
    {
        src: "/images/lipo.jpg", title: "La Liposuccion", description: (
            <>
                <h2 className="text-lg font-semibold mb-1">Redessinez votre Silhouette</h2>
                <p>La liposuccion est une intervention qui vise à éliminer les excès de graisse localisés résistants aux régimes et à l’exercice.</p>
                <p>En ciblant des zones spécifiques comme l’abdomen, les cuisses, les hanches ou les bras, cette technique permet de sculpter le corps et d’harmoniser la silhouette.</p>
            </>
        ),
    },
    {
        src: "/images/breast2.jpg", title: "Augmentation Mammaire", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Sublimez votre féminité:</h2> <p>L’augmentation mammaire consiste à augmenter le volume des seins à l’aide d’implants ou de lipofilling.</p>
                <p> Cette intervention permet de retrouver une silhouette harmonieuse, de corriger une asymétrie ou de restaurer le galbe après une grossesse ou une perte de poids. </p>
            </>
        ),
    },

    {
        src: "/images/nose.jpg", title: "Rhinoplastie", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Affinez les traits de votre visage:</h2> <p>La rhinoplastie est une chirurgie du nez qui vise à corriger sa forme, sa taille ou ses proportions. </p>
                <p>Elle permet d’améliorer l’esthétique du visage tout en respectant l’harmonie globale et peut également corriger des troubles respiratoires. </p>
            </>
        ),
    },

    {
        src: "/images/blépharoplastie1.jpg", title: "Blépharoplastie", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Rajeunissez votre regard:</h2> <p>La blépharoplastie corrige les paupières tombantes et les poches sous les yeux, signes visibles de fatigue ou de vieillissement.</p>
                <p> Cette intervention redonne éclat et jeunesse au regard tout en conservant son expression naturelle.
                </p>
            </>
        ),
    },

    {
        src: "/images/lifting1.jpg", title: "Lifting Cervico-Facial", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Retrouvez la fraîcheur de votre visage:</h2> <p>Le lifting cervico-facial traite le relâchement cutané du visage et du cou.</p>
                <p> Il permet de redéfinir l’ovale du visage, lisser les rides et retrouver une apparence plus jeune, tout en garantissant un résultat naturel.
                </p>
            </>
        ),
    },

    {
        src: "/images/tummytuck.jpg", title: "Abdominoplastie", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Un ventre plat et tonique: </h2> <p>L’abdominoplastie est une chirurgie du ventre qui vise à retirer l’excès de peau et de graisse, souvent après une grossesse ou une perte de poids importante. </p>
                <p>Elle permet de retrouver un abdomen plus ferme et plus plat.
                </p>
            </>
        ),
    },

    {
        src: "/images/lips.jpg", title: "Lip Fillers", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Sublimez votre sourire avec élégance:</h2> <p>Les injections d’acide hyaluronique permettent de redessiner les lèvres, d’en augmenter le volume ou simplement d’en améliorer l’hydratation et la définition.
                </p>
            </>
        ),
    },

    {
        src: "/images/face.jpg", title: "Botox", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Redéfinissez votre expressivité avec finesse:</h2> <p>Les injections de toxine botulique ciblent les rides d’expression pour offrir un visuel plus lisse et naturel.
                </p>
            </>
        ),
    },

    {
        src: "/images/hair.jpg", title: "Greffe de cheveux", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Révélez votre densité capillaire:</h2> <p>Cette procédure attire un large public, notamment en Inde et en Allemagne, avec environ 117 000 recherches mensuelles.
                </p>
            </>
        ),
    },

    {
        src: "/images/gynéco.jpg", title: "Gynécomastie", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Retrouvez une poitrine masculine :</h2> <p>La gynécomastie est une intervention destinée à corriger un développement excessif des glandes mammaires chez l’homme.
                </p>
            </>
        ),
    },

    {
        src: "/images/abs1.jpg", title: "Sculpture des Abdominaux", description: (
            <>
                <h2 className="text-lg font-semibold mb-1"> Définissez votre musculature avec précision:</h2> <p>La sculpture abdominale est une technique de liposuccion haute définition pour faire ressortir les muscles. </p>
            </>
        ),
    },
];

export default function SynchronizedCarousels() {
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
            <button >Demander un devis</button>
        </Link>
                    </div>



                    <div className="flex justify-between mt-4">
                        <div className={styles.arrowButtons}>
                            <button onClick={prev} className="btn btn-outline btn-sm">
                                ❮ Précédent
                            </button>
                            <button onClick={next} className="btn btn-outline btn-sm">
                                Suivant ❯
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}
