const TestimonialCard = ({ quote, name }) => (
  <div className="bg-luxury-slate rounded-2xl p-6 border border-white/10">
    <p className="text-zinc-200 italic leading-relaxed">“{quote}”</p>
    <p className="mt-4 text-luxury-gold">— {name}</p>
  </div>
);

export default TestimonialCard;
