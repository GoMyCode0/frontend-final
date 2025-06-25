"use client"

import React, { useState } from "react";
import styles from './circle.module.css'
import Link from "next/link";

const carouselItems = [

    {
        src: "/images/abdo.jpeg",
        title: <a href="#" className="text-blue-600 hover:underline">Abdominoplastie (tummy tuck) : </a>,
        description: (
            <>
                <p>
                    Cette chirurgie vise à retirer l’excès de peau et de graisse au niveau de l’abdomen, souvent après une grossesse ou une perte de poids importante. Elle permet aussi de retendre les muscles abdominaux affaiblis pour un résultat plus ferme et harmonieux.
                </p>
            </>
        )
    },
    {
        src: "/images/breast.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Augmentation mammaire :</a>,
        description: (
            <>
                <p>
                    Cette intervention consiste à augmenter le volume des seins à l’aide d’implants ou par lipofilling. Elle permet d’améliorer la forme, la symétrie ou la projection de la poitrine selon les souhaits et la morphologie de chaque patiente.
                </p>
            </>
        )
    },
    {
        src: "/images/bodylift.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Bodylift (lifting corporel) : </a>,
        description: (
            <>
                <p>
                    Le bodylift est une chirurgie globale qui corrige le relâchement cutané du ventre, des hanches, du dos et des fesses. Elle est particulièrement indiquée après une perte de poids massive.
                </p>
            </>
        )
    },
    {
        src: "/images/arms.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Bras (brachioplastie) : </a>,
        description: (
            <>
                <p>
                    Cette opération enlève l’excès de peau au niveau de la face interne des bras, souvent causé par le vieillissement ou une perte de poids importante. Elle redonne un aspect plus ferme et lisse aux bras.
                </p>
            </>
        )
    },
    {
        src: "/images/thighs.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Cuisses (cruroplastie) : </a>,
        description: (
            <>
                <p>
                    La cruroplastie permet de retirer l’excédent de peau et de graisse à l’intérieur des cuisses. Elle redessine le contour des jambes et améliore leur fermeté, notamment après une perte de poids.
                </p>
            </>
        )
    },
    {
        src: "/images/gynéco.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Gynecomastie (hommes) : </a>,
        description: (
            <>
                <p>
                    Cette chirurgie corrige le développement excessif des glandes mammaires chez l’homme. Elle consiste à retirer la glande et parfois la graisse, pour un résultat naturel et équilibré.
                </p>
            </>
        )
    },
    {
        src: "/images/butt.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Lifting des fesses : </a>,
        description: (
            <>
                <p>
                    Le lifting des fesses vise à retirer l’excès de peau relâchée et à repositionner les tissus pour des fesses plus hautes et fermes. Il peut être associé à un lipofilling ou à des implants selon le volume souhaité.
                </p>
            </>
        )
    },
    {
        src: "/images/lipos.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Liposuccion : </a>,
        description: (
            <>
                <p>
                    Cette technique consiste à aspirer la graisse résistante aux régimes et au sport dans des zones ciblées comme l’abdomen, les hanches, les cuisses ou les bras. Elle affine la silhouette et améliore les proportions corporelles.
                </p>
            </>
        )
    },
    {
        src: "/images/nipples.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Mamelons ombiliqués ou hypertrophiques : </a>,
        description: (
            <>
                <p>
                    Cette intervention vise à corriger les mamelons rentrés vers l’intérieur ou trop proéminents, pour des raisons esthétiques ou fonctionnelles. Le résultat est naturel, harmonieux et sans impact sur la sensibilité.
                </p>
            </>
        )
    },
    {
        src: "/images/breast1.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Seins tubéreux : </a>,
        description: (
            <>
                <p>
                    Cette chirurgie corrige une malformation mammaire congénitale caractérisée par une base étroite, des aréoles dilatées et une forme conique. Elle implique souvent une combinaison d’implants, de remodelage et de repositionnement de l’aréole.
                </p>
            </>
        )
    }
];


export default function BodySurgeries() {
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
