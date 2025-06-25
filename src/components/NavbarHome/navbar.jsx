import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavbarHome() {
    return (
        <div style={{ padding: '2rem' }}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                    Menu <svg
  fill="white"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g data-name="Layer 2">
      <g data-name="menu-2">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        ></rect>
        <circle cx="4" cy="12" r="1" fill="white"></circle>
        <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" fill="white"></rect>
        <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" fill="white"></rect>
        <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" fill="white"></rect>
      </g>
    </g>
  </g>
</svg>

                </button>
                <div className={styles.dropdownContent}>
                    <Link href="/Accueil">Accueil</Link>
                    <Link href="/Interventions">Nos Interventions</Link>
                    <Link href="/blog">Notre Blog</Link>
                    <Link href="/Quisommesnous">Qui Sommes-Nous</Link>
                    <Link href="/Formulaire">Formulaire</Link>
                </div>
            </div>
        </div>
    );
}