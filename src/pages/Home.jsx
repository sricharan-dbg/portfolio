import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import styles from './Home.module.css'
import profilePic from '../assets/pic.jpeg'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } },
}

const crossPositions = [
  [110, 180], [640, 70], [980, 380], [280, 720],
  [1090, 680], [750, 830], [450, 330], [1140, 480],
]

function BgSvgs() {
  const { scrollYProgress } = useScroll()

  const ringsY       = useTransform(scrollYProgress, [0, 1], [0, -160])
  const ringsOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.065, 0.04, 0.018])
  const hexY         = useTransform(scrollYProgress, [0, 1], [0, -90])
  const dotY         = useTransform(scrollYProgress, [0, 1], [0, -55])
  const crossesY     = useTransform(scrollYProgress, [0, 1], [0, -35])

  return (
    <div className={styles.svgBg} aria-hidden="true">
      {/* Concentric rings — top-right: spin + scroll parallax + opacity fade */}
      <motion.svg
        className={`${styles.svgEl} ${styles.svgRings}`}
        viewBox="0 0 560 560"
        fill="none"
        style={{ y: ringsY, opacity: ringsOpacity }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="280" cy="280" r="258" stroke="rgba(200,255,0,1)"   strokeWidth="0.8" />
        <circle cx="280" cy="280" r="194" stroke="rgba(255,255,255,1)" strokeWidth="0.8" />
        <circle cx="280" cy="280" r="130" stroke="rgba(200,255,0,1)"   strokeWidth="0.8" />
        <circle cx="280" cy="280" r="66"  stroke="rgba(255,255,255,1)" strokeWidth="0.8" />
      </motion.svg>

      {/* Nested hexagons — bottom-left: reverse spin + scroll parallax */}
      <motion.svg
        className={`${styles.svgEl} ${styles.svgHex}`}
        viewBox="0 0 440 440"
        fill="none"
        style={{ y: hexY }}
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <polygon points="220,22 391,121 391,319 220,418 49,319 49,121"
          stroke="rgba(200,255,0,1)" strokeWidth="0.8" />
        <polygon points="220,72 348,146 348,294 220,368 92,294 92,146"
          stroke="rgba(255,255,255,1)" strokeWidth="0.8" />
        <polygon points="220,122 305,171 305,269 220,318 135,269 135,171"
          stroke="rgba(200,255,0,1)" strokeWidth="0.8" />
      </motion.svg>

      {/* Dot grid — full viewport: slow parallax drift + subtle breathe */}
      <motion.svg
        className={`${styles.svgEl} ${styles.svgDotGrid}`}
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: dotY }}
        animate={{ opacity: [0.035, 0.055, 0.035] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <pattern id="bgDotPattern" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgDotPattern)" />
      </motion.svg>

      {/* Scattered cross marks — scroll parallax + staggered blink */}
      <motion.svg
        className={`${styles.svgEl} ${styles.svgCrosses}`}
        viewBox="0 0 1200 900"
        fill="none"
        style={{ y: crossesY }}
      >
        {crossPositions.map(([cx, cy], i) => (
          <motion.g
            key={i}
            stroke="rgba(200,255,0,1)"
            strokeWidth="1"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{
              delay: i * 0.3,
              duration: 2.6 + (i % 4) * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} />
            <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  )
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

function PhotoCard({ src }) {
  const innerRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${((y - 0.5) * -16).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((x - 0.5) * 16).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  }

  const handleMouseLeave = () => {
    const el = innerRef.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div className={styles.photoFloat}>
      <div
        ref={innerRef}
        className={styles.photoCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={src} alt="Sricharan Donakonda" className={styles.profileImg} />
        <div className={styles.photoSheen} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
    <BgSvgs />
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      style={{ position: 'relative', zIndex: 1 }}>

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
              <div className={styles.aboutRight}>
                <PhotoCard src={profilePic} />
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
    </>
  )
}
