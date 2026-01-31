import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function TopRibbon() {
  return (
    <div className="bg-blue-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
          <a href="tel:+15163477156" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-medium">(516) 347-7156</span>
          </a>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>1400A Wantagh Ave, Wantagh, NY 11793</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Sun: 9:30 AM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}