import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Clock, MapPin } from 'lucide-react';

export default function FinalCTA() {
  const scrollToCalendar = () => {
    document.getElementById('book-appointment')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Clock className="h-4 w-4" />
            Same-Day & Next-Day Appointments Available
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Schedule Your Appointment at
            <span className="text-teal-400"> Lice Lifters Of Nassau County</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Don't waste money on ineffective over-the-counter treatments. Our professional, chemical-free lice removal gets results in one visit. Serving Wantagh and all of Nassau County.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={scrollToCalendar}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-xl font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Online Now
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-gray-900 px-10 py-7 text-xl font-semibold rounded-xl transition-all duration-300"
            >
              <a href="tel:+15168538242">
                <Phone className="mr-3 h-6 w-6" />
                (516) 853-8242
              </a>
            </Button>
          </div>

          {/* Location & Hours */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-teal-400" />
              <span>1400A Wantagh Ave, Wantagh, NY 11793</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-teal-400" />
              <span>Mon-Sun: 9:30 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-gray-500">
            ✓ 99.9% Effective • ✓ All-Natural & Non-Toxic • ✓ Certified Technicians
          </p>
        </motion.div>
      </div>
    </section>
  );
}