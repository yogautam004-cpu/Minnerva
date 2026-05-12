import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Gavel, FileText, Heart, Users, Building2, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const detailedServices = [
  {
    id: "criminal-defense",
    icon: <Shield size={48} />,
    title: "Criminal Defense — Protecting Your Freedom with Vigor",
    tagline: "When the state brings its power against you, you need an attorney who brings equal force.",
    body: "Being accused of a crime in Nepal triggers a legal machinery that is complex, fast-moving, and consequential. Our criminal defense attorneys intervene early — from the moment of detention — to protect your procedural rights, challenge unlawful evidence, and build a defense strategy that prioritizes your freedom. We approach every case by thoroughly examining the FIR (First Information Report), interrogation records, forensic evidence, and witness statements. We do not simply react to prosecution — we anticipate it.",
    areas: [
      "Bail applications and remand hearings",
      "Defense against charges under the Muluki Penal Code",
      "Search warrant challenges and evidence suppression",
      "Cybercrime and financial fraud defense",
      "Narcotics, corruption, and organized crime matters",
      "Representation before District Court, High Court, and Supreme Court"
    ]
  },
  {
    id: "appeals",
    icon: <Gavel size={48} />,
    title: "Appeals — Because Justice Deserves a Second Look",
    tagline: "A verdict is a legal finding — not always the final truth.",
    body: "The Nepalese appellate system provides a critical mechanism for correcting errors of law and fact. Minerva's appellate practice is built on rigorous analysis of trial court records, identification of procedural irregularities, and the construction of legally precise arguments designed to persuade the High Court and Supreme Court of Nepal. Whether you received an unjust sentence in a criminal matter or an inequitable ruling in a civil dispute, our team reviews your case without assumptions — with fresh eyes and strategic intent.",
    areas: [
      "Criminal appeals following District Court convictions",
      "Civil appeals in property, contract, and family disputes",
      "Revision petitions and writ petitions (Constitutional matters)",
      "High Court and Supreme Court representation",
      "Review of court orders and interim injunctions",
      "Expedited appeal filing for time-sensitive matters"
    ]
  },
  {
    id: "legal-drafting",
    icon: <FileText size={48} />,
    title: "Legal Drafting — Words That Protect Your Interests",
    tagline: "A document is only as strong as the language it is written in.",
    body: "In law, ambiguity is a liability. Vague contract terms lead to disputes. Poorly structured deeds invite fraud. Unenforceable clauses leave you exposed. Minerva's legal drafting practice is built on the principle that every word matters. Our attorneys draft each document from the ground up, tailored to the specific transaction, jurisdiction, and risk profile of the client — never from a generic template.",
    areas: [
      "Business contracts and service agreements",
      "Property sale deeds and transfer documents",
      "Rental agreements and lease contracts",
      "Legal notices (demand notices, eviction notices)",
      "Memoranda of Understanding (MOUs)",
      "Power of Attorney documents",
      "Affidavits and statutory declarations"
    ]
  },
  {
    id: "court-marriage",
    icon: <Heart size={48} />,
    title: "Court Marriage — A Legal Union, Efficiently Secured",
    tagline: "Simplifying one of life's most significant legal milestones.",
    body: "Under Nepal's Muluki Civil Code 2074, citizens have the right to register their marriage through a legally recognized process. Minerva Law Partners streamlines this process entirely — from preparing the required documentation to accompanying clients through registration at the relevant government authority. We handle all procedural requirements, anticipate potential documentation gaps, and ensure your marriage certificate is issued with minimum delay and maximum legal validity.",
    areas: [
      "Eligibility verification and documentation review",
      "Marriage registration under the Muluki Civil Code 2074",
      "Inter-caste and inter-religion marriage registration",
      "Assistance with court appearance requirements",
      "Post-registration certified copy procurement",
      "Marriage affidavit and notarization services"
    ]
  },
  {
    id: "divorce",
    icon: <Users size={48} />,
    title: "Divorce & Family Law — Guidance Through Difficult Transitions",
    tagline: "Protecting what matters most — with compassion and legal precision.",
    body: "Divorce proceedings in Nepal are governed by the Muluki Civil Code 2074, and the process can be deeply stressful without proper legal representation. At Minerva, we believe that the law should serve as a tool of resolution — not a weapon of prolonged conflict. Our family law attorneys work to reach fair, durable outcomes — whether through mutual consent, mediation, or contested litigation. We protect your financial interests, parental rights, and personal dignity throughout the process.",
    areas: [
      "Mutual consent divorce (सहमतिमा सम्बन्धविच्छेद)",
      "Contested divorce proceedings",
      "Child custody and guardianship matters",
      "Division of marital property and assets",
      "Alimony and maintenance claims",
      "Domestic violence cases and protective orders"
    ]
  },
  {
    id: "corporate-services",
    icon: <Building2 size={48} />,
    title: "Corporate Services — Building Businesses on Legal Foundations",
    tagline: "Your company is an asset. Protect it with proper legal structure from day one.",
    body: "Nepal's business regulatory environment requires precision and compliance at every stage — from incorporation to annual filings. Whether you are launching a startup, restructuring an existing entity, or navigating a regulatory inquiry, Minerva's corporate services team is your dedicated legal partner. We guide businesses through the Company Registrar's Office, the Department of Industry, and Nepal Rastra Bank requirements.",
    areas: [
      "Registration of Private Limited Companies (Pvt. Ltd.)",
      "NGO/INGO registration and compliance",
      "Amendment of company name, address, and directors",
      "Annual General Meeting (AGM) compliance and filings",
      "Drafting MoA and AoA documents",
      "Foreign investment and FDI compliance",
      "Tax registration (PAN/VAT) and advisory"
    ]
  }
];

export default function Services() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-navy-900 py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-8">
            Legal Services Tailored to Every Challenge
          </h1>
          <h2 className="text-2xl font-display font-bold text-gold mb-10">
            A Multidisciplinary Approach to the Law
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-5xl">
            At Minerva Law Partners, we understand that legal challenges rarely arrive in neat categories. A business dispute can become a criminal matter. A divorce proceeding can intersect with property law. That is why we have built a firm that is genuinely multidisciplinary — a cohesive team of attorneys who collaborate across practice areas to deliver strategy, not just services. Backed by a thorough understanding of Nepal's evolving legal framework, including the Constitution of Nepal 2072, the Muluki Penal Code 2074, and the Company Act 2063 — we are equipped to serve you at every stage of your legal journey.
          </p>
        </div>
      </section>

      {/* detailed services */}
      <div className="bg-navy-900">
        {detailedServices.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id} 
            className="py-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/4">
                  <div className="w-20 h-20 bg-gold/10 text-gold flex items-center justify-center rounded-2xl mb-4">
                    {service.icon}
                  </div>
                  <div className="text-navy-700 font-display font-bold text-7xl md:text-8xl select-none">
                    0{index + 1}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
                    {service.title}
                  </h2>
                  <blockquote className="border-l-4 border-gold pl-6 py-2 mb-8 italic text-xl text-text-secondary">
                    "{service.tagline}"
                  </blockquote>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    {service.body}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="font-display font-bold text-text-primary text-lg mb-6 uppercase tracking-wider">Key Areas:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                      {service.areas.map((area, i) => (
                        <li key={i} className="flex items-center gap-3 text-text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact" 
                    className="group inline-flex items-center gap-3 text-gold font-bold text-lg hover:gap-5 transition-all"
                  >
                    Discuss This Matter <span className="text-2xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 bg-navy-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10">
            Ready to discuss your legal matter?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact#contact-form" className="btn-primary">
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
