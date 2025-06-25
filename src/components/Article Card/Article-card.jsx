import Link from 'next/link';
import styles from './article-card.module.css';


export default function ArticleCard({ title, image, description, author, slug }) {
  return (
    <div className={styles.articles}>
<Link href={`/blog/${slug}`} className={styles.article}>

        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.content}>
          <h2>{title}</h2>
          <h4>
            {description}
            <br />
            <br />
            🩺 Par {author}
          </h4>
        </div>
      </Link>
    </div>
  );
}


