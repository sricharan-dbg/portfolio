import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, description, tech, github, features = [], accent = 'violet', index = 0 }) {
  return (
    <motion.article
      className={`${styles.card} ${styles[`accent_${accent}`]}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className={styles.glow} />

      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <a href={github} target="_blank" rel="noreferrer" className={styles.githubLink} aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>

      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((f) => (
            <li key={f} className={styles.featureItem}>
              <span className={styles.featureDot} />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.techList}>
        {tech.map((t) => (
          <span key={t} className={`${styles.techBadge} ${styles[`techBadge_${accent}`]}`}>{t}</span>
        ))}
      </div>

      <a href={github} target="_blank" rel="noreferrer" className={styles.viewBtn}>
        View on GitHub
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </motion.article>
  )
}
