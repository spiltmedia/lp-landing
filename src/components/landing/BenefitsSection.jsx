import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  DollarSign, 
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function BenefitsSection({ calendarLink }) {
  const benefits = [
    {
      icon: Clock,
      title: "One Treatment. Done.",
      description: "No more repeated treatments or weeks of combing. Our single-session approach gets the job done right the first time.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: ShieldCheck,
      title: "30-Day Guarantee",
      description: "If lice return within 30 days, we'll retreat at no additional cost. That's our promise to you.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Chemical-Free Solution",
      description: "Our FDA-cleared device uses controlled heated air. Safe for kids, effective on super lice.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Comfortable Experience",
      description: "Kids watch movies during treatment. Most describe it as a warm, relaxing scalp massage.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: DollarSign,
      title: "Flat-Rate Pricing",
      description: "No surprises. One price per head regardless of infestation severity or hair length.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Same-Day Availability",
      description: "We understand the urgency. Most clients are seen within 24 hours of calling.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Smarter Way to
            <span className="text-teal-600"> Get Rid of Lice</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Forget everything you've tried. Our professional approach eliminates the guesswork and frustration.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg mb-5`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={calendarLink} target="_blank" rel="noopener noreferrer">
              Schedule Your Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}