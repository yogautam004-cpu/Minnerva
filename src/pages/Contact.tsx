import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, Check, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const preparation = [
  {
    title: "For Criminal Matters",
    content: "Nature of charges or FIR, date of arrest, current status (remand/bail/charge sheet), and any documents from police or court."
  },
  {
    title: "For Civil & Family Matters",
    content: "Brief summary of dispute, key dates (marriage/property acquisition/dispute onset), and any existing agreements/court orders/notices."
  },
  {
    title: "For Corporate & Business Matters",
    content: "Type of business entity, names of proposed directors/shareholders, nature of activities, and any existing registration documents."
  },
  {
    title: "For Legal Drafting",
    content: "Type of document needed, parties involved, and any specific terms or conditions you need to ensure are included."
  }
];

const PrepItem: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gold/10 rounded-xl mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 flex justify-between items-center text-left transition-colors duration-300 ${isOpen ? 'bg-navy-800 text-gold' : 'bg-navy-900 text-text-primary hover:text-gold'}`}
      >
        <span className="font-display font-bold text-lg">{title}</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="p-6 pt-0 bg-navy-800 text-text-secondary border-t border-gold/10 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    matter: '',
    time: ''
  });
  const [services, setServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const toggleService = (service: string) => {
    setServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-navy-900 py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Discuss Your Case with Our Legal Experts" />
          <h3 className="text-xl md:text-2xl font-display font-semibold text-gold mb-6">
            Your first conversation with us is confidential, commitment-free, and focused entirely on understanding your situation.
          </h3>
          <p className="text-text-secondary text-lg leading-relaxed max-w-4xl">
            Whether you are facing a criminal matter, need a contract drafted, or are ready to register your company in Nepal, the right legal strategy begins with a single call. Our attorneys at Minerva Law Partners are available to provide an honest, experienced assessment of your case.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-navy-800 border-2 border-gold/50 rounded-3xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-gold/20">
                    <CheckCircleIcon size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-6">Inquiry Received</h2>
                  <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                    Thank you. A Minerva attorney will be in touch within one business day via the contact information provided.
                  </p>
                  <div className="p-4 bg-navy-900 rounded-xl border border-gold/10">
                     <p className="text-text-primary font-bold mb-2">For urgent matters, message us directly:</p>
                     <a href="https://wa.me/9779843756228" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-2xl font-display font-bold text-gold hover:text-gold-dark transition-colors">
                       <MessageCircle size={28} /> 9843756228
                     </a>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-4">Book a Consultation</h2>
                  <p className="text-text-secondary mb-10 italic underline underline-offset-4 decoration-gold">
                    Fill out the form below and a Minerva attorney will respond within one business day.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-text-primary uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-navy-800 border-b-2 border-gold/10 p-4 focus:border-gold outline-none transition-all text-white"
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-text-primary uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel" 
                          required 
                          className="w-full bg-navy-800 border-b-2 border-gold/10 p-4 focus:border-gold outline-none transition-all text-white"
                          value={formState.phone}
                          onChange={e => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-navy-800 border-b-2 border-gold/10 p-4 focus:border-gold outline-none transition-all text-white"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-text-primary uppercase tracking-wider block">Service Required</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {["Criminal Defense", "Appeals", "Legal Drafting", "Court Marriage", "Divorce / Family Law", "Corporate Services", "Other"].map(s => (
                          <label key={s} className="flex items-center gap-3 cursor-pointer group">
                            <div 
                              onClick={() => toggleService(s)}
                              className={`w-5 h-5 rounded border-2 transition-all group-hover:border-gold ${services.includes(s) ? 'bg-gold border-gold' : 'border-gold/20'}`}
                            >
                              {services.includes(s) && <Check size={16} className="text-white" />}
                            </div>
                            <span className="text-text-secondary group-hover:text-text-primary group-hover:text-white transition-colors">{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary uppercase tracking-wider">Brief Description of Your Matter</label>
                      <textarea 
                        rows={4} 
                        className="w-full bg-navy-800 border-b-2 border-gold/10 p-4 focus:border-gold outline-none transition-all text-white resize-none"
                        value={formState.matter}
                        onChange={e => setFormState({...formState, matter: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary uppercase tracking-wider">Preferred Contact Time</label>
                      <input 
                        type="text" 
                        className="w-full bg-navy-800 border-b-2 border-gold/10 p-4 focus:border-gold outline-none transition-all text-white"
                        placeholder="e.g. Early evening, Weekday mornings"
                        value={formState.time}
                        onChange={e => setFormState({...formState, time: e.target.value})}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full shadow-lg shadow-gold/20 !py-4 text-lg">
                      Submit Inquiry →
                    </button>
                    <p className="text-xs text-text-secondary/70 text-center italic">
                      All submissions are treated as strictly confidential and protected under attorney-client privilege.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12 lg:pl-10">
              <div>
                <h3 className="text-2xl font-display font-bold text-text-primary mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary mb-1">Office Location</p>
                      <a href="https://maps.app.goo.gl/QQWnB354KoSVRTKc9" target="_blank" rel="noopener noreferrer" className="not-italic text-text-secondary hover:text-gold transition-colors underline decoration-gold/30 inline-block">
                        Baneshwor, Kathmandu, Nepal
                      </a>
                      <p className="text-sm text-text-secondary/70 mt-2 italic leading-relaxed">
                         Conveniently located in Baneshwor — accessible legal hub near Kathmandu District Court and key government offices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary mb-1">WhatsApp</p>
                      <a href="https://wa.me/9779843756228" target="_blank" rel="noopener noreferrer" className="text-2xl font-display font-bold text-gold hover:text-gold-dark transition-colors">9843756228</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary mb-1">Office Hours</p>
                      <p className="text-text-secondary">Mon–Fri: 9:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alert Box */}
              <div className="p-8 border-2 border-gold rounded-3xl bg-gold/5 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 -rotate-12 translate-x-4 -translate-y-4 rounded-xl flex items-center justify-center">
                  <MessageCircle size={32} className="text-gold" />
                </div>
                <h4 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                  <span className="text-2xl">⚠️</span> Urgent Criminal Matter?
                </h4>
                <p className="text-text-secondary leading-relaxed font-bold">
                  Criminal matters — remand hearings and bail — are treated as emergencies. Do not wait for a form response.
                </p>
                <div className="space-y-4">
                  <a href="https://wa.me/9779843756228" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-3 text-3xl font-display font-bold text-gold hover:scale-105 transition-transform text-center py-4 bg-navy-900 rounded-2xl shadow-sm">
                    <MessageCircle size={32} /> 9843756228
                  </a>
                  <p className="text-center text-sm text-text-secondary/70 uppercase font-black tracking-widest italic">Available 24/7 for urgent legal crisis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prepare Section */}
      <section className="py-24 bg-navy-800 border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="What to Prepare Before You Reach Out" centered />
          <div className="mt-12">
            {preparation.map((item, i) => (
              <PrepItem key={i} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </section>

      {/* Big Contact Banner */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <MessageCircle size={48} className="mx-auto mb-8 text-gold animate-pulse" />
           <p className="text-2xl font-display font-bold text-gold uppercase tracking-[0.2em] mb-4">Message Now</p>
           <a href="https://wa.me/9779843756228" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center flex-wrap items-center gap-4 text-5xl md:text-7xl font-display font-bold tracking-tighter hover:text-gold transition-colors duration-300">
             9843756228
           </a>
           <p className="mt-10 text-text-secondary text-lg">Available Monday through Friday, 9 AM – 5 PM.<br />For urgent criminal matters, message anytime.</p>
        </div>
      </section>
    </PageTransition>
  );
}

function CheckIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CheckCircleIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
