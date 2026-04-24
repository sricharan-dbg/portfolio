import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-72px 0px -72px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      initial={{ opacity: 0, y: 22 }}
      transition={{
        duration: isInView ? 0.7 : 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: isInView ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  )
}
