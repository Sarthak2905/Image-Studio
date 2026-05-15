import SectionTitle from '../components/SectionTitle';

const Portfolio = () => (
  <div className="space-y-8">
    <SectionTitle title="Portfolio" description="A premium selection of weddings, portraits, and moments." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="h-56 bg-luxury-slate rounded-xl border border-white/10" />
      ))}
    </div>
  </div>
);

export default Portfolio;
