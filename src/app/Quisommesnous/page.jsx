"use client"
import Navbar from "@/components/Navbar/navbar";
import styles from "./quisommesnous.module.css";
import Team from "@/components/Team Carousel/carouselteam";
import Footer from "@/components/Footer/footer";
import Buttondevis from "@/components/Button Devis/buttondevis";

export default function Quisommesnous() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heroBG}>
                <Navbar />
                <div className={styles.hero}>
                    <h1>Bienvenue à notre clinique,</h1>
                    <h2>un espace dédié à la beauté, à la santé de la peau et au bien-être,<br />
                        au cœur de l’innovation médicale.</h2>
                    <Buttondevis />
                </div>
            </div>
            <div className={styles.intro}>
                <div className={styles.text}>
                    <p>Fondée par une équipe de médecins esthétiques passionnés et expérimentés, notre clinique allie expertise scientifique, technologies de pointe et approche humaine pour offrir à chaque patient(e) un accompagnement sur mesure. </p>
                    <h5>" Nous croyons que la beauté ne se résume pas à un standard, mais qu’elle est propre à chacun." </h5>
                    <p>Notre mission est de révéler et sublimer cette beauté naturelle, avec finesse, respect et discrétion.</p>
                    <h5>" Chez notre clinique, chaque visage, chaque corps est unique."</h5>
                    <p>
                        C’est pourquoi nous privilégions une approche globale, progressive et non invasive, afin d’obtenir des résultats naturels, durables et en parfaite harmonie avec vos attentes.
                        Nous mettons un point d’honneur à écouter, conseiller, et proposer des soins adaptés à votre morphologie, votre mode de vie, et vos envies – sans jamais pousser à la surcorrection. </p>
                    <p>  Notre démarche repose sur le respect de l’individualité, la prévention du vieillissement cutané, et l’éducation à une beauté saine et éclairée.</p>
                    <h5>" Plutôt que de masquer, nous choisissons de révéler. Plutôt que de transformer, nous préférons harmoniser." </h5>
                    <p>  Dans un monde où l’image est omniprésente, notre rôle est aussi de rassurer, réconcilier et redonner confiance. En travaillant dans la transparence, l’éthique et le dialogue, nous créons un lien de confiance durable avec chacun de nos patients. Parce que prendre soin de soi ne devrait jamais être un luxe, mais un acte de bienveillance envers soi-même.
                    </p>
                </div>
                <section className={styles.reviews}>
                    <h2>Avis de nos patients</h2>
                    <div class="elfsight-app-d2cc9c0d-f884-442d-8964-6f67709402c2" data-elfsight-app-lazy></div>
                </section>
            </div>


            <div className={styles.teamdiv}>
                <h2>Rencontrez nos médecins:</h2>
                <p>Notre équipe médicale est composée de spécialistes hautement qualifiés et passionnés, chacun expert dans son domaine. Grâce à une approche humaine, rigoureuse et personnalisée, nos médecins travaillent en synergie pour offrir à chaque patient des soins d'excellence, dans un cadre rassurant et professionnel. Leur savoir-faire, leur écoute et leur engagement font la force de notre clinique.</p>
            </div>
            <Team />
            <Footer />
        </div>
    );
}
