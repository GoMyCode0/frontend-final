"use client"

import React, { useState } from "react";
import styles from './circle.module.css'
import Link from "next/link";

const carouselItems = [
     {
    src: "/images/hydra.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Hydrafacial : </a>,
    description: (
      <p>
        Ce soin complet du visage associe nettoyage, extraction des impuretés et infusion de sérums actifs. Il laisse la peau lisse, éclatante et hydratée dès la première séance, sans éviction sociale.
      </p>
    )
  },
  {
    src: "/images/laser.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Laser épilatoire :</a>,
    description: (
      <p>
        Grâce à une lumière ciblée, le laser détruit le follicule pileux pour une épilation progressive et durable. Il convient aux différentes zones du corps et du visage, avec des résultats visibles dès les premières séances.
      </p>
    )
  },
  {
    src: "/images/laser pigmentaire.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Laser pigmentaire : </a>,
    description: (
      <p>
        Ce traitement cible les taches brunes, les lentigos solaires et les irrégularités pigmentaires. Il améliore visiblement l’uniformité du teint et ravive l’éclat de la peau.
      </p>
    )
  },
  {
    src: "/images/microneedling.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Microneedling : </a>,
    description: (
      <p>
        À l’aide de micro-aiguilles, ce soin favorise la production de collagène et d’élastine. Il atténue les cicatrices, pores dilatés, rides fines et imperfections cutanées, avec un effet « peau neuve » progressif.
      </p>
    )
  },
  {
    src: "/images/peeling.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Peeling chimique : </a>,
    description: (
      <p>
        En appliquant des acides (AHA, BHA, TCA…), le peeling exfolie les couches superficielles de la peau pour traiter l’acné, les taches, les ridules et le teint terne. Le choix de l’intensité dépend du type de peau et des objectifs.
      </p>
    )
  },
  {
    src: "/images/plasma.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Plasma Pen (plasma fibroblast) : </a>,
    description: (
      <p>
        Cette technique utilise une énergie plasma pour créer de petites rétractions cutanées ciblées. Elle est idéale pour les paupières tombantes, rides péribuccales et relâchements légers, sans incision.
      </p>
    )
  },
  {
    src: "/images/radiofrequence.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Radiofréquence : </a>,
    description: (
      <p>
        Par la chaleur générée en profondeur, la radiofréquence stimule le raffermissement cutané. Elle est utilisée sur le visage, le cou et le corps, pour lutter contre le relâchement sans chirurgie.
      </p>
    )
  },
  {
    src: "/images/led.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">LED photothérapie : </a>,
    description: (
      <p>
        Ce soin utilise différentes longueurs d’onde (rouge, bleu, jaune…) pour traiter l’acné, les rougeurs, le vieillissement cutané et améliorer la cicatrisation. Indolore et relaxant, il peut compléter d’autres traitements.
      </p>
    )
  },
  {
    src: "/images/mesotherapie.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Mésothérapie visage (skin booster) : </a>,
    description: (
      <p>
        Ce soin consiste en de multiples micro-injections d’acide hyaluronique fluide et de vitamines. Il booste l’éclat, l’élasticité et l’hydratation cutanée sans changer les volumes du visage.
      </p>
    )
  },
  {
    src: "/images/cryolipolyse.jpg",
    title: <a href="#" className="text-blue-600 hover:underline">Cryolipolyse : </a>,
    description: (
      <p>
        Ce traitement non invasif détruit les cellules graisseuses par refroidissement contrôlé. Il est utilisé pour affiner certaines zones comme l’abdomen, les hanches ou les bras, sans chirurgie ni arrêt de travail.
      </p>
    )
  }
];


export default function Soins() {
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
