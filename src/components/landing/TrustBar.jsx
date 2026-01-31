import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Heart, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: BadgeCheck, label: "Licensed Technicians" },
    { icon: Award, label: "No Heat Treatment" },
    { icon: Heart, label: "Kid-Friendly Process" },
    { icon: Sparkles, label: "Non-Toxic Treatment" },
  ];

  return (
    <section className="bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 text-white/90"
            >
              <item.icon className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}