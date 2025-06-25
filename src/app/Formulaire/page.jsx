"use client";

import { useState } from "react";
import Select from "react-select";
import countries from "world-countries";
import Navbar from "@/components/Navbar/navbar";
import styles from "./form.module.css";
import { addUser } from "@/api/user.js";

export default function Formulaire() {
    const [formData, setFormData] = useState({
        prénom: "",
        nom: "",
        email: "",
        pays: "",
        DOB: "",
        numéro: "",
    });

    const [selected, setSelected] = useState([]);
    const [country, setCountry] = useState(null);

    const interventions = [
        "Chirurgie Esthétique du visage",
        "Chirurgie Esthétique du corps",
        "Chirurgie Esthétique des zones intimes",
        "Greffe de cheveux",
        "Soins Faciaux",
        "Des interventions bariatriques",
    ];

    const countryOptions = countries.map((c) => ({
        value: c.name.common,
        label: `${c.flag} ${c.name.common}`,
    }));

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleSelection = (item) => {
        if (selected.includes(item)) {
            setSelected(selected.filter((i) => i !== item));
        } else if (selected.length < 3) {
            setSelected([...selected, item]);
        }
    };

    const isDisabled = (item) => selected.length >= 3 && !selected.includes(item);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!country) return alert("Veuillez choisir un pays");

        const payload = {
            ...formData,
            pays: country.value,
            intervention: selected,
        };

        try {
            await addUser(payload);
            alert("Formulaire soumis avec succès !");
        } catch (err) {
            console.error("Erreur de soumission :", err);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <div className={styles.formPage}>
            <Navbar />
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.formBox}>
                    <h2>Formulaire de demande de renseignements du patient</h2>

                    <div className={styles.inputGroup}>
                        <input type="text" name="prénom" placeholder="Prénom" onChange={handleChange} required />
                        <input type="text" name="nom" placeholder="Nom" onChange={handleChange} required />
                        <input type="date" name="DOB" placeholder="Date de naissance" onChange={handleChange} required />

                        <Select
                            options={countryOptions}
                            onChange={setCountry}
                            placeholder="Choisissez votre pays"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    backgroundColor: "#222",
                                    borderColor: "#333",
                                    color: "#fff",
                                }),
                                menu: (base) => ({
                                    ...base,
                                    backgroundColor: "#222",
                                    color: "#fff",
                                }),
                                singleValue: (base) => ({ ...base, color: "#fff" }),
                            }}
                        />

                        <input type="tel" name="numéro" placeholder="Numéro de téléphone" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    </div>

                    <div className={styles.interventions}>
                        <p>Vous pouvez choisir jusqu'à 3 interventions :</p>
                        {interventions.map((item) => (
                            <label key={item}>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(item)}
                                    disabled={isDisabled(item)}
                                    onChange={() => toggleSelection(item)}
                                />
                                {item}
                            </label>
                        ))}
                        {selected.length >= 3 && (
                            <p className={styles.warning}>Vous ne pouvez pas choisir plus de 3 interventions.</p>
                        )}
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Soumettre
                    </button>
                </form>
            </div>
        </div>
    );
}
