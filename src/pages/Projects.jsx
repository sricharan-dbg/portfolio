import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import styles from './Projects.module.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const projects = [
  {
    num: '01',
    title: 'Task Tracker for Teams',
    description:
      'A collaborative task management system designed for office environments to improve team productivity and visibility. Allows users to create, schedule, and assign tasks via a calendar-based interface. Managers get dynamic progress reports and real-time tracking across team members.',
    tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'CSS'],
    github: 'https://github.com/sricharan-dbg/chore-app',
    features: [
      'Calendar-based scheduling',
      'Team assignment & tracking',
      'Real-time progress reports',
      'Visual productivity dashboard',
    ],
  },
  {
    num: '02',
    title: 'Event-Driven Notification System',
    description:
      'A lightweight yet powerful event-driven notification system that simulates real-world asynchronous architecture. Uses Node.js EventEmitter with a custom priority queue and retry logic to ensure reliable job execution across multiple communication channels.',
    tech: ['Node.js', 'EventEmitter', 'React.js', 'Custom Queue', 'Express.js'],
    github: 'https://github.com/sricharan-dbg/Event-Notification-System',
    features: [
      'Email, SMS & Push notifications',
      'Priority queue system',
      'Automatic retry mechanism',
      'Auto-refreshing live dashboard',
    ],
  },
]

const upcoming = [
  'Cloud deployment pipeline with CI/CD',
  'DevOps-focused scalable system',
  'Full-stack production application',
]

export default function Projects() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.pageLabel}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            MY WORK
          </motion.div>

          <motion.h1
            className={styles.pageTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            Selected<br />
            <span className={styles.titleAccent}>Projects</span>
          </motion.h1>

          <motion.div
            className={styles.headerRule}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Projects */}
        <div className={styles.projectsList}>
          {projects.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.1}>
              <div className={styles.projectBlock}>
                <div className={styles.projectBlockTop}>
                  <span className={styles.projectNum}>{p.num}</span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.githubBtn}
                  >
                    View on GitHub ↗
                  </a>
                </div>

                <h2 className={styles.projectTitle}>{p.title}</h2>

                <div className={styles.projectBody}>
                  <div className={styles.projectLeft}>
                    <p className={styles.projectDesc}>{p.description}</p>
                    <div className={styles.techRow}>
                      {p.tech.map(t => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.projectRight}>
                    <span className={styles.featuresLabel}>Key Features</span>
                    <ul className={styles.featuresList}>
                      {p.features.map(f => (
                        <li key={f} className={styles.featureItem}>
                          <span className={styles.featureDot} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Upcoming */}
        <ScrollReveal delay={0.1}>
          <div className={styles.upcoming}>
            <div className={styles.upcomingLeft}>
              <span className={styles.buildingBadge}>
                <span className={styles.buildingDot} />
                Currently Building
              </span>
              <h3 className={styles.upcomingTitle}>More on the Way</h3>
            </div>
            <ul className={styles.upcomingList}>
              {upcoming.map((u, i) => (
                <li key={u} className={styles.upcomingItem}>
                  <span className={styles.upcomingIdx}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* GitHub CTA */}
        <ScrollReveal delay={0.15}>
          <div className={styles.cta}>
            <span className={styles.ctaEyebrow}>Follow my work</span>
            <a
              href="https://github.com/sricharan-dbg"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaLink}
            >
              github.com/sricharan-dbg →
            </a>
          </div>
        </ScrollReveal>

        <div className={styles.backRow}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
        </div>

      </div>
    </motion.div>
  )
}
