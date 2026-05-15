import { useState } from 'react';
import toast from 'react-hot-toast';
import SectionTitle from '../components/SectionTitle';
import { submitInquiry } from '../services/inquiryService';

const initialState = { name: '', email: '', phone: '', weddingDate: '', message: '', budget: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await submitInquiry(form);
      toast.success('Inquiry submitted successfully. We will connect shortly.');
      setForm(initialState);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to submit inquiry');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <SectionTitle title="Contact" description="Share your wedding vision and preferred date — our team will respond within 24 hours." />
      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 bg-luxury-slate p-6 rounded-2xl border border-white/10">
        {[
          ['name', 'Name'],
          ['email', 'Email'],
          ['phone', 'Phone'],
          ['weddingDate', 'Wedding Date'],
          ['budget', 'Estimated Budget'],
        ].map(([name, placeholder]) => (
          <input
            key={name}
            name={name}
            value={form[name]}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-black/30 rounded-lg px-4 py-3 border border-white/10"
            required={name !== 'budget'}
          />
        ))}
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell us about your wedding plans"
          className="bg-black/30 rounded-lg px-4 py-3 border border-white/10 md:col-span-2 min-h-28"
          required
        />
        <button disabled={loading} className="md:col-span-2 px-6 py-3 rounded-full bg-luxury-gold text-black font-medium disabled:opacity-60">
          {loading ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
