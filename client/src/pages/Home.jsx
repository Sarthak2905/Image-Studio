import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => (
  <div className="space-y-20">
    <section className="grid md:grid-cols-2 gap-10 items-center py-12">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-luxury-gold tracking-[0.25em] text-xs mb-4">CINEMATIC WEDDING PHOTOGRAPHY</p>
        <h1 className="text-5xl font-semibold leading-tight mb-6">Luxury stories for timeless hearts.</h1>
        <p className="text-zinc-300 mb-8">We craft elegant, emotional wedding films and frames that feel grand, intimate, and forever premium.</p>
        <Link to="/contact" className="px-6 py-3 bg-luxury-gold text-black rounded-full font-medium">Reserve Your Date</Link>
      </motion.div>
      <div className="h-[420px] rounded-3xl bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200')] bg-cover bg-center border border-white/10" />
    </section>

    <section className="space-y-8">
      <SectionTitle eyebrow="Portfolio" title="Curated wedding journeys" description="A visual narrative of destination weddings, intimate vows, and royal celebrations." />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {['/wedding-story/royal-sunset','/wedding-story/mountain-vows','/wedding-story/lakefront-love'].map((to, idx) => (
          <Link key={to} to={to} className="h-64 rounded-2xl bg-luxury-slate border border-white/10 p-6 flex items-end hover:border-luxury-gold transition">
            <h3 className="text-xl">Wedding Story {idx + 1}</h3>
          </Link>
        ))}
      </div>
    </section>

    <section className="space-y-8">
      <SectionTitle eyebrow="Testimonials" title="Loved by modern couples" />
      <div className="grid md:grid-cols-3 gap-4">
        <TestimonialCard quote="Every photo looked like a movie still." name="Aarav & Siya" />
        <TestimonialCard quote="The team handled everything with class and calm." name="Karan & Meera" />
        <TestimonialCard quote="True luxury experience from inquiry to delivery." name="Reyansh & Tara" />
      </div>
    </section>
  </div>
);

export default Home;
