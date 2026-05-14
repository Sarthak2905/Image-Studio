import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-2xl"
  >
    {eyebrow ? <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs mb-4">{eyebrow}</p> : null}
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
    {description ? <p className="text-zinc-300 leading-relaxed">{description}</p> : null}
  </motion.div>
);

export default SectionTitle;
