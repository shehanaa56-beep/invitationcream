import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Hero({ settings, guestName }) {
  const weddingDate = new Date(settings?.weddingDate || '2026-12-12').toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <section className={styles.hero} id="hero">
      {/* Background Palace Image */}
      {/* High quality royal palace entrance placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1548625361-ec71dcb9a466?q=80&w=800&auto=format&fit=crop" 
        alt="Royal Palace" 
        className={styles.bgImage} 
      />
      
      <div className={styles.overlay} />
      <div className={styles.gradientBlend} />

      <div className={styles.content}>
        {/* Guest personalisation */}
        {guestName && (
          <motion.div
            className={styles.guestGreeting}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>Dear <span className={styles.guestName}>{guestName}</span>,</p>
            <p>You Are Cordially Invited</p>
          </motion.div>
        )}

        <motion.p 
          className={styles.label} 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1, delay: 0.8 }}
        >
          THE WEDDING OF
        </motion.p>

        <motion.div 
          className={styles.namesContainer}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 1 } }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.brideName} variants={fadeUp}>
            {settings?.brideName || 'Aaliya'}
          </motion.h1>

          <motion.div className={styles.ampersand} variants={fadeUp}>
            &amp;
          </motion.div>

          <motion.h1 className={styles.groomName} variants={fadeUp}>
            {settings?.groomName || 'Ibrahim'}
          </motion.h1>
        </motion.div>

        {/* Gold ornament divider */}
        <motion.div
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1, delay: 2 }}
        >
          <svg className={styles.ornament} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 2 L55 10 L80 10 L58 13 L65 20 L50 15 L35 20 L42 13 L20 10 L45 10 Z" fill="#E5C170" opacity="0.8"/>
            <line x1="0" y1="10" x2="35" y2="10" stroke="#E5C170" strokeWidth="0.5"/>
            <line x1="65" y1="10" x2="100" y2="10" stroke="#E5C170" strokeWidth="0.5"/>
          </svg>
        </motion.div>

        <motion.p 
          className={styles.tagline} 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1, delay: 2.2 }}
        >
          Together with their families<br />
          request the honour of your presence
        </motion.p>

        <motion.p 
          className={styles.date} 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1, delay: 2.4 }}
        >
          {weddingDate}
        </motion.p>
      </div>
    </section>
  );
}
