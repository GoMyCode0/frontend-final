import NavbarHome from "@/components/NavbarHome/navbar";
import styles from "./accueil.module.css";
import Buttondevis from "@/components/Button Devis/buttondevis";
import Footer from "@/components/Footer/footer";

export default function Accueil() {
    return (
        <div className={styles.accueil}>
            <NavbarHome />
            <div className={styles.title}>
                <div className={styles.slogan}>
                    <h1 >Parce que vous méritez</h1>
                    <h1>de vous sentir bien</h1>
                    <h1>dans votre  </h1>
                    
                </div>
                <div className={styles.paragraph}>
                    <p>Découvrez l’excellence de la chirurgie esthétique en <em>Tunisie</em>, où l’art 
                        de la transformation s’allie <br /> à des techniques de pointe. Notre équipe de
                        chirurgiens experts vous propose des solutions<br /> personnalisées pour
                        <em>sublimer votre beauté naturelle</em>.</p>
                </div>
                <Buttondevis />
            </div>
            <Footer/>
        </div>
    );
}