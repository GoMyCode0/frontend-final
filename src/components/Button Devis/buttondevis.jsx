import Link from 'next/link';
import styles from './buttondevis.module.css';

export default function Buttondevis() {
    return (
        <Link href="/Formulaire">
            <button className={styles.buttondevis}>Demander un devis</button>
        </Link>
    );
}