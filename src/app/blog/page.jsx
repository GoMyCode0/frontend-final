"use client"

import { useEffect, useState } from "react";
import styles from './blog.module.css'
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import ArticleCard from "@/components/Article Card/Article-card";


export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch("http://localhost:3001/api/articles")
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched articles:', data);
        setArticles(data);
      })
      .catch((err) => console.error("Error loading articles:", err));
  }, []);



  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <div className={styles.blog}>
      <div className={styles.wrapper}>
        <Navbar />

        <div className={styles.hero}>
          <div className={styles.introduction}>
            <h1>Découvrez notre expertise, au-delà du bloc opératoire</h1>
            <h6>
              Explorez en profondeur chaque intervention proposée, comprenez les techniques,
              les bénéfices et les suites <br />
              opératoires grâce à des contenus clairs et détaillés.
              Nos chirurgiens partagent également leur regard sur les dernières <br />
              avancées en chirurgie esthétique. Un espace d’information fiable,
              pour vous aider à faire des choix éclairés en toute confiance.
            </h6>
          </div>
        </div>

        <div className={styles.ctaButton}>
          <button>Demander un devis</button>
        </div>
      </div>

      {/* 📰 Blog Articles Section */}
      <div className={styles.articlesContainer}>
        {visibleArticles

          .map(article => (
            <ArticleCard
              key={article._id}
              title={article.title}
              image={article.image}
              description={article.description}
              author={article.author}
              slug={article._id}
            />

          ))}
      </div>
      {visibleCount < articles.length && (
        <div className={styles.loadMoreContainer}>
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Découvrir plus d’articles
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}
