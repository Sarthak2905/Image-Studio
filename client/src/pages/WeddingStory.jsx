import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const WeddingStory = () => {
  const { slug } = useParams();

  return (
    <div className="space-y-8">
      <SectionTitle title="Wedding Story" description={`Story: ${slug?.replaceAll('-', ' ')}`} />
      <div className="h-80 rounded-2xl border border-white/10 bg-luxury-slate" />
      <p className="text-zinc-300 leading-relaxed">This wedding story page is SEO-friendly and route-driven, ready for dynamic API content integration.</p>
    </div>
  );
};

export default WeddingStory;
