import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

// Luxury Corner Scrolls (Top-Right and Bottom-Right)
const CornerScroll = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 60 60" fill="none" stroke="url(#goldGrad)" strokeWidth="0.75" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 58 V2 H58" strokeWidth="1" opacity="0.8" />
    <path d="M6 54 V6 H54" strokeWidth="0.5" opacity="0.4" />
    {/* Decorative Scrolls */}
    <path d="M12 12 Q24 24 34 18 C39 15 37 10 32 12 C27 14 29 20 39 24" />
    <path d="M12 12 Q24 24 18 34 C15 39 10 37 12 32 C14 27 20 29 24 39" />
    <circle cx="32" cy="12" r="1.5" fill="#E5C170" />
    <circle cx="12" cy="32" r="1.5" fill="#E5C170" />
  </svg>
);

// Golden Leaf Branch SVG (Top-Left Corner)
const LeafBranch = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 110 Q 50 70 110 20" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M35 80 Q 20 75 15 82 Q 22 92 35 80" fill="url(#goldGrad)" />
    <path d="M50 65 Q 40 50 32 55 Q 40 70 50 65" fill="url(#goldGrad)" />
    <path d="M65 50 Q 75 40 82 45 Q 70 58 65 50" fill="url(#goldGrad)" />
    <path d="M80 35 Q 70 20 62 25 Q 70 40 80 35" fill="url(#goldGrad)" />
    <path d="M95 20 Q 105 10 110 15 Q 100 28 95 20" fill="url(#goldGrad)" />
  </svg>
);

// Luxury Flower SVG (Bottom-Left Corner)
const BigFlower = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="url(#goldGrad)">
      {/* Outer Petals */}
      <path d="M75 10 C50 40 10 40 75 75 Z" opacity="0.65" />
      <path d="M75 140 C50 110 10 110 75 75 Z" opacity="0.65" />
      <path d="M10 75 C40 50 40 10 75 75 Z" opacity="0.65" />
      <path d="M140 75 C110 50 110 10 75 75 Z" opacity="0.65" />
      
      {/* Diagonal Petals */}
      <path d="M30 30 C50 55 20 75 75 75 Z" opacity="0.75" />
      <path d="M120 30 C100 55 130 75 75 75 Z" opacity="0.75" />
      <path d="M30 120 C50 95 20 75 75 75 Z" opacity="0.75" />
      <path d="M120 120 C100 95 130 75 75 75 Z" opacity="0.75" />
      
      {/* Inner Petals */}
      <circle cx="75" cy="75" r="22" fill="#3A1E10" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="75" cy="75" r="10" fill="url(#goldGrad)" />
    </g>
    
    {/* Stamens */}
    <circle cx="67" cy="67" r="1.5" fill="#FFF" />
    <circle cx="83" cy="67" r="1.5" fill="#FFF" />
    <circle cx="67" cy="83" r="1.5" fill="#FFF" />
    <circle cx="83" cy="83" r="1.5" fill="#FFF" />
    <circle cx="75" cy="64" r="1" fill="#FFD700" />
    <circle cx="75" cy="86" r="1" fill="#FFD700" />
    <circle cx="64" cy="75" r="1" fill="#FFD700" />
    <circle cx="86" cy="75" r="1" fill="#FFD700" />
  </svg>
);

export default function Hero({ settings, guestName }) {
  const dateObj = new Date(settings?.weddingDate || '2026-12-12T17:00:00');
  const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const month = dateObj.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const day = dateObj.toLocaleDateString('en-US', { day: '2-digit' });
  const year = dateObj.getFullYear();

  // Create floating gold sparkles
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * -20,
  }));

  return (
    <section className={styles.hero} id="hero">
      {/* Background Gold Sparkle Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [-100, -800],
            x: [0, Math.random() * 60 - 30],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Double Gold Line Border Frame */}
      <div className={styles.frame}>
        <div className={styles.innerFrame} />
      </div>

      {/* Decorative Ornaments (Corner and Swaying animations) */}
      <motion.div
        className={styles.topLeftDecor}
        animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <LeafBranch className={styles.decorSvg} />
      </motion.div>

      <CornerScroll className={styles.topRightDecor} />

      <motion.div
        className={styles.bottomLeftDecor}
        animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <BigFlower className={styles.decorSvg} />
      </motion.div>

      <CornerScroll className={styles.bottomRightDecor} />

      {/* Global Gradients for SVGs */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E3B5" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#8A6714" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content Area */}
      <div className={styles.content}>
        {guestName && (
          <motion.div
            className={styles.guestGreeting}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p>Dear <span className={styles.guestName}>{guestName}</span>,</p>
            <p className={styles.guestSubtitle}>You Are Cordially Invited</p>
          </motion.div>
        )}

        {/* Top Flourish */}
        <motion.div
          className={styles.topFlourishWrapper}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className={styles.topFlourish}>
            <path d="M30 2 C32 6 36 8 36 10 C36 12 30 14 30 14 C30 14 24 12 24 10 C24 8 28 6 30 2Z" fill="url(#goldGrad)" />
            <path d="M30 10 C27 8 20 8 15 10" stroke="url(#goldGrad)" strokeWidth="0.75" />
            <path d="M30 10 C33 8 40 8 45 10" stroke="url(#goldGrad)" strokeWidth="0.75" />
            <circle cx="15" cy="10" r="1" fill="#E5C170" />
            <circle cx="45" cy="10" r="1" fill="#E5C170" />
          </svg>
        </motion.div>

        <motion.p
          className={styles.label}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          THE WEDDING OF
        </motion.p>

        {/* Names Section */}
        <motion.div
          className={styles.namesContainer}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h1 className={styles.brideName} variants={fadeUp}>
            {settings?.brideName || 'Aaliya'}
          </motion.h1>

          <motion.div className={styles.ampersandWrapper} variants={fadeUp}>
            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" className={styles.sideLeafLeft}>
              <path d="M40 7.5 H10 Q25 2 30 5" stroke="url(#goldGrad)" strokeWidth="1" />
              <circle cx="8" cy="7.5" r="1" fill="#E5C170" />
            </svg>
            <span className={styles.ampersand}>&amp;</span>
            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" className={styles.sideLeafRight}>
              <path d="M0 7.5 H30 Q15 2 10 5" stroke="url(#goldGrad)" strokeWidth="1" />
              <circle cx="32" cy="7.5" r="1" fill="#E5C170" />
            </svg>
          </motion.div>

          <motion.h1 className={styles.groomName} variants={fadeUp}>
            {settings?.groomName || 'Ibrahim'}
          </motion.h1>
        </motion.div>

        {/* Middle Floret Divider */}
        <motion.div
          className={styles.middleDivider}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.dividerLine} />
          <svg width="14" height="14" viewBox="0 0 16 16" fill="url(#goldGrad)" className={styles.dividerFloret}>
            <path d="M8 0 L10 5 L16 8 L10 11 L8 16 L6 11 L0 8 L6 5 Z" />
          </svg>
          <div className={styles.dividerLine} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Together with their families<br />
          request the honour of your presence
        </motion.p>

        {/* Decorative flourish line */}
        <motion.div
          className={styles.bottomFlourishLine}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <svg width="100" height="10" viewBox="0 0 100 10" fill="url(#goldGrad)">
            <path d="M50 5 C40 5 35 2 30 5 C25 8 20 8 10 5" stroke="url(#goldGrad)" strokeWidth="0.5" fill="none" />
            <path d="M50 5 C60 5 65 2 70 5 C75 8 80 8 90 5" stroke="url(#goldGrad)" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="5" r="2" />
            <circle cx="30" cy="5" r="1" />
            <circle cx="70" cy="5" r="1" />
          </svg>
        </motion.div>

        {/* Date Container (Grid Layout) */}
        <motion.div
          className={styles.dateContainer}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className={styles.weekday}>{weekday}</p>
          <div className={styles.dateGrid}>
            <div className={styles.dateMonth}>{month}</div>
            <div className={styles.dateDivider} />
            <div className={styles.dateDay}>{day}</div>
            <div className={styles.dateDivider} />
            <div className={styles.dateYear}>{year}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
