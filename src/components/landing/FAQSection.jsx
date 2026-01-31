import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does the treatment take?",
      answer: "The complete treatment process typically takes 90 minutes to 2 hours, depending on hair length and thickness. This includes the head check, treatment, and comb-out. Most clients are in and out in under 2 hours."
    },
    {
      question: "Is the treatment safe for children?",
      answer: "Absolutely! Our FDA-cleared device uses controlled heated air, similar to a blow dryer. It's completely chemical-free and safe for children of all ages. Kids often describe it as a warm, relaxing scalp massage. We even have movies and tablets to keep them entertained!"
    },
    {
      question: "What about 'super lice' that are resistant to OTC treatments?",
      answer: "Our heated air treatment works differently than chemical treatments. It dehydrates lice and eggs regardless of any chemical resistance. This is why our method is 98% effective even against so-called 'super lice.'"
    },
    {
      question: "Do you offer a guarantee?",
      answer: "Yes! We offer a 30-day guarantee. If lice return within 30 days of treatment (which is rare), we'll retreat at no additional charge. We're confident in our results."
    },
    {
      question: "How much does treatment cost?",
      answer: "We offer flat-rate pricing per person, regardless of hair length or infestation severity. Please call us or book online to see current pricing. We believe in transparent pricing with no surprise charges."
    },
    {
      question: "Do I need to do anything before my appointment?",
      answer: "Just come with dry hair that's free of any products, oils, or treatments. No need for any special preparation. We'll handle everything else!"
    },
    {
      question: "Should the whole family get treated?",
      answer: "We recommend head checks for all family members. Lice spread easily through close contact, so it's common for multiple family members to be affected. We offer family packages and can check everyone during your visit."
    },
    {
      question: "What about cleaning my house?",
      answer: "We'll provide you with simple, practical instructions. The good news: lice can't survive more than 24-48 hours off a human head, so extensive cleaning isn't necessary. Focus on bedding, hats, and hair accessories used in the past 48 hours."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know before your visit.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-gray-50 rounded-xl border border-gray-100 px-6 data-[state=open]:bg-teal-50 data-[state=open]:border-teal-200 transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal-600 py-5 [&[data-state=open]]:text-teal-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}