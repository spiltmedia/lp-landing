import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function CalendarSection() {
  useEffect(() => {
    // Load the GHL embed script
    const script = document.createElement('script');
    script.src = 'https://app.liceliftersomaha.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-appointment" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            Book Your Appointment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a convenient time and get your family lice-free in one visit. Most appointments available within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <iframe 
            src="https://app.liceliftersomaha.com/widget/booking/dmzG5tfjUsHRICNYkTrU" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="d8cGvQuRsa1CWoYStHaP_1769865119200"
            title="Book Appointment"
          />
        </motion.div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Or call us directly at <a href="tel:+14027414425" className="text-blue-600 font-semibold hover:text-blue-700">(402) 741-4425</a>
        </p>
      </div>
    </section>
  );
}