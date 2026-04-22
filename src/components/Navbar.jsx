import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Work' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>SD.</NavLink>

        <ul className={styles.links}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/sricharan-dbg"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:dvcharan999@gmail.com" className={styles.hire}>
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://github.com/sricharan-dbg"
              target="_blank"
              rel="noreferrer"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
            <a
              href="mailto:dvcharan999@gmail.com"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
