import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import styles from './Home.module.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const allSkills = [
  'React.js', 'Node.js', 'Express.js', 'JavaScript', 'Python',
  'AWS', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'REST APIs',
  'Git', 'UX Design', 'System Design', 'DevOps', 'TypeScript',
  'Event-Driven', 'Cloud Computing',
]

const interests = [
  'Cloud Architecture',
  'DevOps & CI/CD',
  'Scalable Backends',
  'Event-Driven Architecture',
  'Performance Optimization',
  'System Design',
  'Human-Centered Design',
]

const projects = [
  {
    num: '01',
    title: 'Task Tracker for Teams',
    tech: ['React.js', 'Node.js', 'Express.js'],
    github: 'https://github.com/sricharan-dbg/chore-app',
  },
  {
    num: '02',
    title: 'Event-Driven Notification System',
    tech: ['Node.js', 'EventEmitter', 'React.js'],
    github: 'https://github.com/sricharan-dbg/Event-Notification-System',
  },
]

function RevealWord({ text, baseDelay }) {
  return (
    <div className={styles.nameRow}>
      <span className={styles.nameRowInner} aria-label={text}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            className={styles.nameLetter}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + i * 0.038,
              duration: 0.72,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </div>
  )
}

const marqueeItems = [...allSkills, ...allSkills]

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>

        {/* Badge — constrained */}
        <div className={styles.heroPad}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            Available for opportunities
          </motion.div>
        </div>

        {/* Name — full viewport width */}
        <h1 className={styles.heroName}>
          <RevealWord text="SRICHARAN" baseDelay={0.32} />
          <RevealWord text="DONAKONDA" baseDelay={0.58} />
        </h1>

        {/* Divider + CTAs — constrained */}
        <div className={styles.heroPad}>
          <motion.div
            className={styles.heroDivider}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className={styles.heroBottom}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroRoles}>
              {['Full Stack Developer', 'Cloud & DevOps', 'UX-Focused Engineer'].map((r, i) => (
                <span key={r} className={styles.roleChip}>
                  {i > 0 && <span className={styles.roleSep}>·</span>}
                  {r}
                </span>
              ))}
            </div>
            <div className={styles.heroCtas}>
              <Link to="/projects" className={styles.ctaPrimary}>
                View Work →
              </Link>
              <a href="mailto:dvcharan999@gmail.com" className={styles.ctaGhost}>
                dvcharan999@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollCue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          <motion.div
            className={styles.scrollBar}
            animate={{ height: ['10px', '26px', '10px'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>SCROLL</span>
        </motion.div>
      </section>

      {/* ═══ SKILLS MARQUEE ═══ */}
      <div className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((s, i) => (
            <span key={i} className={styles.marqueeItem}>
              {s}<span className={styles.marqueeDot}> ·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ 01 — ABOUT ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionNum}>01</span>
              <span className={styles.sectionTag}>ABOUT</span>
            </div>
          </ScrollReveal>

          <div className={styles.aboutGrid}>
            <ScrollReveal delay={0.1}>
              <div className={styles.aboutText}>
                <p>
                  I&apos;m a Full Stack Developer with a strong interest in building scalable,
                  real-world applications. I enjoy working across the stack, from crafting
                  intuitive, user-friendly interfaces to designing efficient backend systems.
                </p>
                <p>
                  I&apos;ve taken multiple courses in Usability Engineering and UX design, which
                  has shaped how I approach building products, not just functional, but
                  intuitive, accessible, and genuinely pleasant to use.
                </p>
                <p>
                  Lately, I&apos;ve been deeply exploring Cloud Computing and DevOps, focusing on how
                  modern systems are deployed, scaled, and maintained. Particularly interested in
                  building reliable, event-driven systems that handle real-world complexity.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.statsGroup}>
                {[
                  { n: '2+', l: 'Years Coding' },
                  { n: '5+', l: 'Projects Shipped' },
                  { n: '10+', l: 'Technologies' },
                  { n: '∞', l: 'Curiosity' },
                ].map(({ n, l }) => (
                  <div key={l} className={styles.stat}>
                    <span className={styles.statNum}>{n}</span>
                    <span className={styles.statLabel}>{l}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ 02 — WHAT I EXPLORE ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionNum}>02</span>
              <span className={styles.sectionTag}>WHAT I EXPLORE</span>
            </div>
          </ScrollReveal>

          <div className={styles.interestGrid}>
            {interests.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
                <div className={styles.interestItem}>
                  <span className={styles.interestIdx}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.interestName}>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 03 — SELECTED WORK ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionNum}>03</span>
              <span className={styles.sectionTag}>SELECTED WORK</span>
            </div>
          </ScrollReveal>

          <div className={styles.projectList}>
            {projects.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 0.1}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectRow}
                >
                  <span className={styles.projectNum}>{p.num}</span>
                  <span className={styles.projectTitle}>{p.title}</span>
                  <div className={styles.projectTags}>
                    {p.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <span className={styles.projectArrow}>→</span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <div className={styles.workCta}>
              <Link to="/projects" className={styles.ctaOutline}>
                View All Projects
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 04 — CONTACT ═══ */}
      <section className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHead}>
              <span className={styles.sectionNum}>04</span>
              <span className={styles.sectionTag}>CONTACT</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className={styles.contactHeading}>
              Let&apos;s build<br />
              <span className={styles.contactAccent}>something great.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a href="mailto:dvcharan999@gmail.com" className={styles.contactEmail}>
              dvcharan999@gmail.com
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className={styles.contactLinks}>
              <a href="https://github.com/sricharan-dbg" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/sri-charan-870555333/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>© 2025 Sricharan Donakonda</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>

    </motion.div>
  )
}
