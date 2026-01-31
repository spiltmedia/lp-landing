import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, CheckCircle, PartyPopper } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Head Check",
      description: "We thoroughly examine the scalp to assess the situation and create your treatment plan.",
      duration: "5-10 min"
    },
    {
      icon: Zap,
      step: "02",
      title: "Treatment",
      description: "Our FDA-cleared device dehydrates lice and eggs with controlled warm air. Relax and watch a movie!",
      duration: "60-90 min"
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Comb-Out",
      description: "We carefully comb through every section to remove all dehydrated lice and eggs.",
      duration: "15-30 min"
    },
    {
      icon: PartyPopper,
      step: "04",
      title: "Lice-Free!",
      description: "Leave our clinic completely lice-free with tips to prevent re-infestation. Guaranteed.",
      duration: "Go celebrate!"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            From Itchy to
            <span className="text-teal-600"> Lice-Free</span> in One Visit
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple, comfortable process that takes about 90 minutes from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step number circle */}
                  <div className="relative z-10 mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Step indicator */}
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                      Step {step.step}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Duration badge */}
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}