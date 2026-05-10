import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-navy-800 border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Minerva Law Partners Logo" className="h-20 md:h-24 w-auto" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Strategic Legal Advocacy in Kathmandu. Dedicated to protecting your rights with wisdom and precision.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=100083395596348" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-text-primary">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-text-secondary hover:text-gold transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-text-secondary hover:text-gold transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-gold transition-colors text-sm">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-gold transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-text-primary">Contact Info</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold mt-1 shrink-0" size={18} />
                <a href="https://maps.app.goo.gl/QQWnB354KoSVRTKc9" target="_blank" rel="noopener noreferrer" className="not-italic text-sm text-text-secondary hover:text-gold transition-colors block">
                  Baneshwor, Kathmandu,<br />Nepal
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gold mt-1 shrink-0" size={18} />
                <a href="tel:9843756228" className="text-sm text-text-secondary hover:text-gold transition-colors">
                  9843756228
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-gold mt-1 shrink-0" size={18} />
                <div className="text-sm text-text-secondary">
                  <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary/70 gap-4">
          <p>© {currentYear} Minerva Law Partners. All Rights Reserved.</p>
          <p>Baneshwor, Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
