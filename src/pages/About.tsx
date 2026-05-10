import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Award, ClipboardCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const commitments = [
  {
    icon: <Lock className="text-gold" size={32} />,
    title: "Confidentiality",
    description: "Client Confidentiality is absolute. Every matter discussed is protected by attorney-client privilege. We do not disclose information without authorization."
  },
  {
    icon: <Award className="text-gold" size={32} />,
    title: "Ethics",
    description: "Ethical Practice is non-negotiable. We are committed to the standards of the Nepal Bar Association and the integrity of the judicial process."
  },
  {
    icon: <ClipboardCheck className="text-gold" size={32} />,
    title: "Accountability",
    description: "We believe in transparency — about case strength, timelines, and outcomes. We do not offer false comfort; we offer honest counsel."
  }
];

const partners = [
  {
    name: "Sunil Kumar Yadav",
    initials: "SKY",
    image: "/Sunil.png",
    title: "Partner • Criminal Law • LLM, Kathmandu School of Law",
    bio: "Advocate Sunil Kumar Yadav is a founding partner at Minerva Law Partners and a criminal law specialist holding an LLM from Kathmandu School of Law. With experience spanning district-level prosecution, active litigation across Nepal's courts, and prior practice at Kantipur Law Associates, he leads the firm's criminal law mandate with a reputation for thorough preparation and clear-headed courtroom advocacy. He also serves as Assistant Professor at KSL and Course Facilitator at Premier College.",
    tags: ["Criminal litigation", "Court advocacy", "Legal research", "Faculty, KSL"]
  },
  {
    name: "Anuj Chand",
    initials: "AC",
    image: "/anuj.png",
    title: "Partner • Yale LL.M. • Bernstein Fellow, Yale Law School",
    bio: 'Advocate Anuj Chand is a partner at Minerva Law Partners and a Yale Law School LL.M. graduate who holds the university gold medal from Kathmandu School of Law and the Nepal Vidhya Padak "Ga." He practised for nearly four years at a Band 1-ranked Nepali law firm, representing national, international, and government clients in multi-million-dollar arbitration disputes and appearing before the Supreme Court of Nepal. His expertise spans international arbitration, corporate advisory, commercial agreements, and human rights law. He currently holds the Robert L. Bernstein Fellowship at Yale University and teaches at Kathmandu School of Law.',
    tags: ["International arbitration", "Corporate advisory", "Human rights law", "Supreme Court of Nepal", "Yale LL.M."]
  }
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            About Minerva Law Partners
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            Named for Minerva — the Roman goddess of wisdom, justice, and strategic warfare — our firm reflects a philosophy: the law is not merely procedure. It is a strategic field, and we approach it accordingly.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Our Mission" />
              <blockquote className="border-l-4 border-gold pl-6 py-2 mb-8 italic text-2xl text-text-primary font-display">
                "To uphold the rule of law, protect individual rights, and make credible legal representation accessible to every client who walks through our door."
              </blockquote>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Minerva Law Partners was established with a singular conviction: that quality legal counsel should not be a privilege reserved for corporations and the well-connected. Every individual — whether facing a criminal charge, navigating a family crisis, or building a business — deserves representation that is strategic, ethical, and fiercely committed to their interests.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Based in Baneshwor, Kathmandu, we serve clients across Nepal's court system, from District Courts to the Supreme Court of Nepal, and across administrative bodies including the Office of the Company Registrar and local government authorities.
              </p>
            </div>
            <div className="bg-navy-800 rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                alt="Law Firm Environment" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Litigation and Precision — In Equal Measure" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-text-primary">In the Courtroom</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Our litigators are experienced, prepared, and assertive. Our criminal defense and appellate attorneys understand that courtroom outcomes are shaped by evidence, procedure, and persuasion — and we master all three. We do not accept a case without preparing it thoroughly.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-text-primary">In Advisory</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Our corporate, drafting, and family law attorneys bring the precision of detail. A company registration executed correctly avoids years of compliance headaches. A contract drafted with foresight prevents disputes before they arise.
              </p>
            </div>
          </div>
          <p className="mt-12 text-center text-gold font-display font-bold text-xl italic p-8 bg-navy-900 rounded-xl shadow-sm border border-gold/10">
            This dual identity — aggressive litigator and meticulous legal architect — is what sets Minerva apart from single-focus law firms in Kathmandu.
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Commitment" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <div key={i} className="text-center p-10 bg-navy-800 rounded-3xl border border-gold/10 hover:border-gold transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-900 rounded-2xl mb-8 shadow-sm">
                  {c.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-text-primary mb-6 uppercase tracking-tight">{c.title}</h4>
                <p className="text-text-secondary leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-navy-800 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Partners" centered />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-navy-700 font-display flex items-center justify-center text-xl font-bold text-text-primary shrink-0 overflow-hidden">
                    {partner.image ? (
                      <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                    ) : (
                      partner.initials
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {partner.title}
                    </p>
                  </div>
                </div>
                <div className="bg-navy-900 border border-gold/10 rounded-2xl p-8 shadow-sm flex-1">
                  <p className="text-text-secondary leading-relaxed text-lg mb-8">
                    {partner.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-navy-800 text-text-secondary border border-gold/10 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Why Our Clients Choose Us
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Advocate Anuj Chand — LL.M. from Yale</h4>
                  <p className="text-text-secondary">Bringing global academic excellence to domestic legal challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Recognized for Excellence</h4>
                  <p className="text-text-secondary">Consistently ranked among Kathmandu's elite for corporate and criminal work.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Central Infrastructure</h4>
                  <p className="text-text-secondary">Strategically located in Baneshwor, minutes from District and High Courts.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-navy-800 p-12 text-center space-y-4">
              <p className="text-gold font-display text-lg tracking-widest uppercase">Member Of</p>
              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter">Nepal Bar Association</h3>
              <div className="h-0.5 w-16 bg-gold mx-auto" />
              <p className="text-text-secondary/70 text-sm italic">Upholding global standards of legal integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900 border-t border-gold/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-10">
            Meet us and discuss your case today.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <a href="tel:9843756228" className="btn-outline">
              Call 9843756228
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
