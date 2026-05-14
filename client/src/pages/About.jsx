import SectionTitle from '../components/SectionTitle';

const About = () => (
  <div className="space-y-8">
    <SectionTitle title="About Image Studio" description="We are a premium wedding photography house blending editorial composition with emotional storytelling." />
    <div className="grid md:grid-cols-2 gap-8">
      <p className="text-zinc-300">Our team documents weddings with an artistic, cinematic language rooted in elegance and authenticity.</p>
      <p className="text-zinc-300">From pre-wedding to final album, every touchpoint is crafted as a luxury service experience.</p>
    </div>
  </div>
);

export default About;
