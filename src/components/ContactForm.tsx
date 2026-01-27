import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-stone-50 border border-green-500 rounded-2xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-display font-bold text-green-600 mb-2">Message Sent</h3>
        <p className="text-stone-600 font-light">Thank you for contacting W&F Electrical. We will be in touch shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-brand-primary hover:text-brand-dark underline uppercase tracking-wide"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold text-brand-dark uppercase tracking-wide">Full Name</label>
          <input 
            required 
            type="text" 
            id="name" 
            className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-light"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold text-brand-dark uppercase tracking-wide">Phone Number</label>
          <input 
            required 
            type="tel" 
            id="phone" 
            className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-light"
            placeholder="082 123 4567"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-bold text-brand-dark uppercase tracking-wide">Email Address</label>
        <input 
          required 
          type="email" 
          id="email" 
          className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-light"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-xs font-bold text-brand-dark uppercase tracking-wide">Service Required</label>
        <select 
          id="service" 
          className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-light"
        >
          <option>Residential Electrical</option>
          <option>Commercial Electrical</option>
          <option>Compliance Certificate (COC)</option>
          <option>Fault Finding / Repair</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold text-brand-dark uppercase tracking-wide">Message</label>
        <textarea 
          required 
          id="message" 
          rows={4}
          className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-light"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;