import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Blog = () => (
  <div className="space-y-8">
    <SectionTitle title="Blog" description="Planning guides, wedding trends, and behind-the-scenes stories." />
    <div className="grid md:grid-cols-3 gap-4">
      {['How to Plan a Luxury Wedding Shoot', 'Top 2026 Wedding Visual Trends', 'Cinematic Couple Portrait Checklist'].map((post, i) => (
        <Link key={post} to={`/wedding-story/blog-${i + 1}`} className="p-6 rounded-xl bg-luxury-slate border border-white/10 hover:border-luxury-gold transition">
          <h3 className="text-lg mb-2">{post}</h3>
          <p className="text-zinc-400 text-sm">Read article</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Blog;
