import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Heart, Users, Building2, Gavel, CheckCircle2, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const whyUs = [
  {
    icon: <Building2 className="text-gold" size={32} />,
    title: "Established Presence in Baneshwor",
    description: "Our office is at the center of Nepal's legal and civic life, giving us immediate access to Kathmandu District Court and key government offices."
  },
  {
    icon: <Gavel className="text-gold" size={32} />,
    title: "Comprehensive Experience",
    description: "From criminal defense before the bench to meticulous corporate filings at the OCR, our attorneys operate across every major pillar of Nepalese law."
  },
  {
    icon: <FileText className="text-gold" size={32} />,
    title: "Precision in Legal Drafting",
    description: "Every contract, deed, and notice we draft is built to withstand legal scrutiny — protecting your interests today and eliminating ambiguity tomorrow."
  },
  {
    icon: <Users className="text-gold" size={32} />,
    title: "Client-First Approach",
    description: "We treat every case with urgency and care. You receive direct access to your attorney, not a rotating team of associates."
  }
];

const services = [
  {
    icon: <Shield size={24} />,
    title: "Criminal Defense",
    description: "Facing charges? We build aggressive, evidence-based strategies grounded in Nepal's Muluki Penal Code.",
    link: "/services#criminal-defense"
  },
  {
    icon: <Gavel size={24} />,
    title: "Appeals",
    description: "Unfavorable verdict? We review records and construct compelling appeals for High and Supreme Courts.",
    link: "/services#appeals"
  },
  {
    icon: <FileText size={24} />,
    title: "Legal Drafting",
    description: "We draft airtight contracts, deeds, and notices tailored to your specific transactions.",
    link: "/services#legal-drafting"
  },
  {
    icon: <Heart size={24} />,
    title: "Court Marriage",
    description: "Streamlined registration under Muluki Civil Code 2074, minimizing delays and friction.",
    link: "/services#court-marriage"
  },
  {
    icon: <Users size={24} />,
    title: "Divorce & Family Law",
    description: "Expert guidance through contested and mutual consent proceedings to protect your rights.",
    link: "/services#divorce"
  },
  {
    icon: <Building2 size={24} />,
    title: "Corporate Services",
    description: "From registration to compliance, we handle every step of your corporate legal journey.",
    link: "/services#corporate-services"
  }
];

const testimonials = [
  {
    quote: "I had the opportunity to work with Advocate Anuj Chand recently and was very impressed. He is incredibly meticulous. It's clear his background — LL.M. from Yale — translates into high-quality legal service.",
    author: "Saroj Ray"
  },
  {
    quote: "Best law firm of Kathmandu valley. Advocates are quick to respond, clear on fees, and don't charge high. They make complex legal issues understandable in plain language.",
    author: "Shisir Paudel"
  },
  {
    quote: "Knowledgeable and responsive legal team. They are professional, reliable, and provide excellent guidance throughout the process. Truly an outstanding firm.",
    author: "Rishansa K."
  },
  {
    quote: "Great service and very professional. They handle everything very smoothly. I truly appreciate their support and highly recommend this law firm.",
    author: "Nikita Marasini"
  }
];

const faqs = [
  {
    q: "Is my first consultation free?",
    a: "Yes. Your first consultation with Minerva Law Partners is completely free and confidential. We want to understand your matter before discussing fees."
  },
  {
    q: "Which courts do you practice in?",
    a: "We represent clients before District Courts, the High Court of Nepal, and the Supreme Court of Nepal, as well as various administrative bodies."
  },
  {
    q: "How quickly can you take on a criminal case?",
    a: "Criminal matters are treated as urgent. Contact us immediately at 9843756228 and we will respond the same day."
  },
  {
    q: "Do you handle matters outside Kathmandu?",
    a: "Our primary office is in Baneshwor. We handle matters across Nepal's court system at the appellate level, and can advise on matters from anywhere in Nepal."
  },
  {
    q: "Are my communications with your firm confidential?",
    a: "Absolutely. All communications are protected by attorney-client privilege and treated with complete confidentiality."
  }
];

const partnersPreview = [
  {
    name: "Sunil Kumar Yadav",
    initials: "SKY",
    image: "/Sunil.png",
    title: "Partner • Criminal Law",
    bio: "A founding partner and criminal law specialist holding an LLM from Kathmandu School of Law, known for thorough preparation and courtroom advocacy.",
  },
  {
    name: "Anuj Chand",
    initials: "AC",
    image: "/anuj.png",
    title: "Partner • Corporate & Arbitration",
    bio: "Yale Law School LL.M. graduate and university gold medalist with vast experience in multi-million-dollar arbitration and Supreme Court appearances.",
  }
];

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gold/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors focus:outline-none"
      >
        <span className="font-display font-bold text-lg">{q}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-navy-700/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                Strategic Legal Advocacy in the Heart of <span className="text-gold">Kathmandu</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed">
                When your rights, your freedom, or your business are on the line — you deserve counsel that fights with precision.
              </p>
              <p className="text-text-secondary mb-10 text-lg leading-relaxed">
                Minerva Law Partners is Kathmandu's trusted legal firm for criminal defense, corporate compliance, and high-stakes litigation. Rooted in Baneshwor, we combine deep knowledge of Nepal's legal landscape with an uncompromising commitment to your outcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Book a Free Consultation
                </Link>
                <a href="https://wa.me/9779843756228" target="_blank" rel="noopener noreferrer" className="btn-outline !text-white !border-white/20 hover:!bg-white/10 flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Trust Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {[
              "6 Practice Areas",
              "District to Supreme Court",
              "Baneshwor, Kathmandu",
              "Confidential Consultations"
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-gold shrink-0" size={20} />
                <span className="text-text-secondary text-sm font-medium uppercase tracking-wider">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Minerva */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Clients Trust Minerva Law Partners" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="p-8 bg-navy-800 rounded-xl border border-gold/10 transition-transform hover:-translate-y-1">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Practice Areas" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div key={i} className="group p-8 bg-navy-900 rounded-xl shadow-sm border border-gold/10 hover:border-gold transition-all duration-300">
                <div className="w-12 h-12 bg-navy-800 flex items-center justify-center rounded-lg mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="text-gold font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Partners */}
      <section className="py-24 bg-navy-900 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Meet Our Partners" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {partnersPreview.map((partner, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 p-8 bg-navy-800 rounded-xl border border-gold/10 hover:border-gold transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-navy-700 font-display flex items-center justify-center text-xl font-bold text-text-primary shrink-0 shadow-md overflow-hidden">
                  {partner.image ? (
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                  ) : (
                    partner.initials
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-1">{partner.name}</h3>
                  <p className="text-gold text-sm font-medium mb-4">{partner.title}</p>
                  <p className="text-text-secondary leading-relaxed">{partner.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/about" className="btn-outline">
              Read Full Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 border border-gold/10 rounded-2xl bg-navy-900 relative">
                <div className="text-gold/20 absolute top-4 right-8 font-serif text-8xl">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-6 leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
                <p className="font-bold text-text-primary tracking-wide">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-navy-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How Working With Us Works" 
            centered 
          />
          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-navy-700 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "Step 1", title: "Contact Us", desc: "Call or fill our contact form. Tell us about your legal matter." },
                { step: "Step 2", title: "Free Consultation", desc: "We assess your case, explain options, and outline our strategy." },
                { step: "Step 3", title: "We Take Action", desc: "Our attorneys go to work — in the courtroom and the boardroom." }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-navy-900 text-gold rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gold/10 font-bold group-hover:scale-110 transition-transform shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3 text-text-primary">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            centered 
          />
          <div className="mt-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-gold/5 blur-[150px] translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Do not navigate Nepal's legal system alone. Minerva Law Partners is ready to fight for your rights, protect your business, and guide your family through every legal challenge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <a href="https://wa.me/9779843756228" target="_blank" rel="noopener noreferrer" className="btn-outline !text-white !border-white/20 hover:!bg-white/10 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
