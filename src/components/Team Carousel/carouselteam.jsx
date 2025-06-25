"use client"
import styles from "./team.module.css";
import React, { useState } from "react";

const carouselItems = [
    {
        src: "/images/23.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Dr. Léa Moreau – Hydrafacial :</a>,
        description: (
            <div className={styles.descriptionBlock}>
                <p><strong>Spécialité :</strong> Dermatologie esthétique, soins hydratants et régénérateurs cutanés.</p>
                <p><strong>Formation :</strong> Diplômée de la Faculté de Médecine Paris Descartes, DU de Techniques Dermatologiques Avancées à Bordeaux.</p>
                <p><strong>Expérience :</strong> Avec plus de 12 ans de pratique dans le domaine de la cosmétologie médicale, Dr. Moreau a dirigé plusieurs projets de recherche sur les soins non invasifs de rajeunissement cutané. Elle a introduit la technique Hydrafacial dans plus de 20 cliniques privées en France, en mettant l’accent sur des soins personnalisés, sans douleur ni éviction sociale. Elle participe régulièrement à des congrès internationaux comme l’IMCAS et la SFME.</p>
            </div>
        )
    },
    {
        src: "/images/21.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Dr. Karim Haddad – Laser épilatoire :</a>,
        description: (
            <div className={styles.descriptionBlock}>
                <p><strong>Spécialité :</strong> Médecine esthétique au laser, épilation définitive et phototypes complexes.</p>
                <p><strong>Formation :</strong> Diplômé de l’Université de Genève, formation avancée en lasers dermatologiques à l’Université de Barcelone.</p>
                <p><strong>Expérience :</strong> Dr. Haddad possède plus de 15 ans d’expérience dans le traitement au laser, avec une expertise reconnue dans l’épilation des peaux sensibles et foncées. Il a développé des protocoles spécifiques adaptés aux peaux méditerranéennes et afro-caribéennes, réduisant considérablement les risques de brûlures ou d’hyperpigmentation. Il a formé plus de 300 médecins en Europe et intervient régulièrement en tant que consultant pour des fabricants d’équipements médicaux laser.</p>
            </div>
        )
    },
    {
        src: "/images/15.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Dr. Alice Benayoun – Laser pigmentaire :</a>,
        description: (
            <div className={styles.descriptionBlock}>
                <p><strong>Spécialité :</strong> Dermatologie pigmentaire, photoréjuvénation et traitement des taches brunes.</p>
                <p><strong>Formation :</strong> Diplômée de l’Université Pierre et Marie Curie, spécialisation en dermatologie esthétique à la Pitié-Salpêtrière.</p>
                <p><strong>Expérience :</strong> Forte de 18 années d’expérience, Dr. Benayoun est une référence dans le domaine des traitements pigmentaires. Elle utilise des lasers de dernière génération pour cibler les lentigos, le mélasma et les irrégularités pigmentaires, en alliant efficacité et sécurité. Elle est l’auteure de nombreuses publications scientifiques et intervient régulièrement dans les médias spécialisés pour vulgariser les bonnes pratiques de la médecine esthétique. Son approche se base sur la personnalisation des traitements selon le phototype et l’historique cutané de chaque patient.</p>
            </div>
        )
    },
    {
        src: "/images/19.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Dr. Victor Elbaz – Microneedling :</a>,
        description: (
            <div className={styles.descriptionBlock}>
                <p><strong>Spécialité :</strong> Médecine anti-âge, régénération cutanée, techniques par stimulation naturelle.</p>
                <p><strong>Formation :</strong> Médecin diplômé de l’Hôpital Saint-Louis à Paris, master en biologie cutanée à l’Université de Lyon.</p>
                <p><strong>Expérience :</strong> Dr. Elbaz est reconnu pour sa maîtrise du microneedling et de ses variantes (avec PRP, peptides, acide hyaluronique). Avec plus de 10 ans d’expérience, il a mis au point des traitements combinés pour traiter les cicatrices d’acné, les rides et le relâchement cutané. Il a formé de nombreux praticiens dans des centres de référence à Paris, Milan et Dubaï. Son approche holistique favorise une stimulation naturelle des fibroblastes, réduisant le recours à des techniques plus invasives.</p>
            </div>
        )
    },
    {
        src: "/images/20.jpg",
        title: <a href="#" className="text-blue-600 hover:underline">Dr. Naïma Belkacem – Peeling chimique :</a>,
        description: (
            <div className={styles.descriptionBlock}>
                <p><strong>Spécialité :</strong> Dermo-cosmétologie, peelings chimiques superficiels à profonds, traitements de l’acné et du teint irrégulier.</p>
                <p><strong>Formation :</strong> Diplômée de l’Université de Lyon, avec un DU en Cosméto-Dermatologie Avancée à Bruxelles.</p>
                <p><strong>Expérience :</strong> Dr. Belkacem pratique les peelings chimiques depuis plus de 14 ans. Elle ajuste finement les concentrations en AHA, BHA ou TCA selon les objectifs esthétiques et le type de peau. Elle est régulièrement invitée à intervenir lors de conférences comme le Congrès Mondial de Dermatologie pour partager ses techniques de peeling multicouches et ses protocoles post-soin. Elle encadre également des ateliers de formation sur la prise en charge globale des peaux sensibles ou acnéiques.</p>
            </div>
        )
    }
];




export default function Team() {

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




                </div>

                <div className="flex justify-between mt-4">
                    <div className={styles.arrowButtons}>
                        <button onClick={prev} className="btn btn-outline btn-sm">
                            Précedent
                        </button>
                        <button onClick={next} className="btn btn-outline btn-sm">
                            Suivant
                        </button>
                    </div>
                </div>


            </div>

        </>
    );
}
