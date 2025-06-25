import styles from "./interventions.module.css";
import Buttondevis from "@/components/Button Devis/buttondevis";
import Footer from "@/components/Footer/footer";
import PhotoCarousel from "@/components/Carousel Interventions/Carousel";
import NavbarHome from "@/components/NavbarHome/navbar";
import FaceSurgeries from "@/components/Circle Carousel (face)/Circle Face";
import BodySurgeries from "@/components/Circle Carousel (body)/Circle Body";
import BariatricSurgeries from "@/components/Circle Carousel (bariatric)/Circle Bariatric";
import HairSurgeries from "@/components/Circle Carousel (hair)/Circle Hair";
import Soins from "@/components/Circle Carousel (soins)/Circle Soins";
import IntimateSurgeries from "@/components/Circle Carousel (intime)/Circle intime";

export default function Interventions() {
    return (
        <div className={styles.interventions}>
            <main className={styles.mainContent}>

                <div className={styles.heroWrapper}>
                    <div className={styles.firstHalf}>
                        <NavbarHome/>
                        <div className={styles.hero}>
                            <div className={styles.title}>
                                <h1>Sublimez votre silhouette,</h1>
                                <h1>vivez votre confiance.</h1>
                            </div>
                            <Buttondevis />
                        </div>
                    </div>
                </div>

                <div className={styles.introduction}>
                    <h2>Des soins personnalisés pour chaque corps, chaque désir.</h2>
                    <p>Nous proposons une gamme complète d’interventions esthétiques,
                        adaptées aux besoins de chaque patient. Qu’il s’agisse de chirurgie 
                        du visage, de la silhouette, de<br /> la poitrine ou de soins plus ciblés,
                        chaque acte est réalisé avec précision, sécurité et sens de l’harmonie. 
                        Notre objectif : sublimer votre apparence tout en respectant votre identité.</p>
                </div>

                <div className={styles.carouselWrapper}>
                    <PhotoCarousel />
                </div>

                <h2 className={styles.titleH2}>Nos Chirurgies</h2>
                <p className={styles.introductionAccordion}>
                    La Tunisie s’impose aujourd’hui comme une destination de référence en chirurgie esthétique,
                    alliant expertise médicale reconnue, technologies de pointe et encadrement rigoureux. <br /><br />
                    Dans notre clinique, chaque intervention est pratiquée par des chirurgiens qualifiés
                    dans un environnement sécurisé, avec une attention particulière portée à l’écoute du patient,
                    la personnalisation du résultat et le respect des standards internationaux. Du visage au corps,
                    nous proposons une large gamme de chirurgies adaptées à vos objectifs esthétiques, toujours avec
                    l’ambition de révéler votre beauté en toute confiance.
                </p>

                <div className={styles.chirurgies}>
                    
                    <FaceSurgeries/>
                    <BodySurgeries/>
                    <HairSurgeries/>
                    <Soins/>
                    <IntimateSurgeries/>
                    <BariatricSurgeries/>
                    
                </div>

            </main>

            <div className={styles.secondHalf}>
                <Footer />
            </div>
        </div>
    );
}
