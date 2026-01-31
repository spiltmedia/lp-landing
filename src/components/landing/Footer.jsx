import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Lice Lifters Of Nassau County</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional, all-natural lice removal in Wantagh, NY. Safe, non-toxic, and 99.9% effective. Serving Nassau County families.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a href="tel:+15163477156" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <Phone className="h-4 w-4" />
                (516) 347-7156
              </a>
              <a href="https://liceliftersnassaucounty.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <Mail className="h-4 w-4" />
                liceliftersnassaucounty.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1" />
                <span>1400A Wantagh Ave<br />Wantagh, NY 11793</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Monday to Sunday</p>
                  <p>9:30 AM - 8:00 PM</p>
                  <p className="text-teal-400 font-medium mt-1">
                    Same-day appointments available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Lice Lifters Of Nassau County. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}