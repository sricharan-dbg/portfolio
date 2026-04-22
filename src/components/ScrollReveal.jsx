import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
