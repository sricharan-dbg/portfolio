import { motion } from 'framer-motion'
import styles from './SkillBadge.module.css'

export default function SkillBadge({ skill, index = 0, variant = 'cyan' }) {
  return (
    <motion.span
      className={`${styles.badge} ${styles[variant]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, y: -2 }}
    >
      {skill}
    </motion.span>
  )
}
