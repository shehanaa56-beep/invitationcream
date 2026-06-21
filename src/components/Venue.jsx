import { motion } from 'framer-motion';
import styles from './Venue.module.css';

export default function Venue({ settings }) {
  const venue = settings?.venue || 'The Royal Pearl Palace';
  const address = settings?.venueAddress || '100 Royal Avenue, Grand City';
  const mapsUrl = settings?.venueMapsUrl || 'https://maps.google.com/?q=The+Royal+Pearl+Palace';
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className={styles.section} id="venue">
      <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        The Place
      </motion.p>
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        Venue
      </motion.h2>
      
      <div className="gold-separator"><span className="gold-separator-icon">♦</span></div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.imageWrap}>
          <img 
            src={settings?.venueImage || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop'} 
            alt="Venue" 
            className={styles.venueImage} 
          />
        </div>

        <h3 className={styles.venueName}>{venue}</h3>
        <p className={styles.address}>{address}</p>

        <div className={styles.mapWrap}>
          <iframe
            title="Venue Map"
            src={mapEmbed}
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className={styles.btns}>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className={`btn-gold ${styles.btn}`}>
            Open Maps
          </a>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className={`btn-outline-gold ${styles.btn}`}>
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
