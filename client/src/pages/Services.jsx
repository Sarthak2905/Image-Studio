import SectionTitle from '../components/SectionTitle';

const services = [
  'Wedding Day Coverage',
  'Pre-Wedding Editorial',
  'Cinematic Films',
  'Luxury Album Design',
  'Destination Wedding Documentation',
];

const Services = () => (
  <div className="space-y-8">
    <SectionTitle title="Services" description="Tailored wedding media solutions with premium direction, delivery, and detail." />
    <div className="grid md:grid-cols-2 gap-4">
      {services.map((item) => (
        <div key={item} className="p-6 rounded-xl bg-luxury-slate border border-white/10">{item}</div>
      ))}
    </div>
  </div>
);

export default Services;
