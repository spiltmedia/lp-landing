import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Wantagh Mom",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      quote: "After weeks of trying everything from the drugstore, I was at my wit's end. Lice Lifters Of Nassau County got us lice-free in one visit! The staff was professional, gentle, and the chemical-free treatment worked perfectly. Highly recommend!",
      rating: 5
    },
    {
      name: "Jennifer K.",
      role: "Nassau County Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      quote: "I was skeptical at first, but Lice Lifters truly delivered. The all-natural treatment was safe for my daughter, and we were completely lice-free after just one appointment. The staff answered all my questions and made us feel comfortable throughout.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Local Dad",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      quote: "Both my daughters got sent home from school with lice. I called Lice Lifters and they got us in same day. The certified technicians were thorough and professional. Both girls were completely lice-free in one visit. Thank you!",
      rating: 5
    },
    {
      name: "Amanda T.",
      role: "Busy Mom",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
      quote: "Best decision I made! Instead of wasting more money on ineffective drugstore treatments, I took my son to Lice Lifters in Wantagh. One visit and we were done. The staff was kind, knowledgeable, and the results were guaranteed. Worth every penny!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-teal-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal-200 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            What Parents Are Saying
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <Quote className="h-12 w-12 text-teal-100 mb-6" />
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-teal-100"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-teal-600 rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-teal-600 rounded-full h-12 w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}