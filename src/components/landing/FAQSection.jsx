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
      answer: "Absolutely! Our all-natural, non-toxic treatment method is completely safe for children of all ages. We don't use harsh chemicals or pesticides. Our certified technicians are experienced in working with kids and make the process as comfortable as possible."
    },
    {
      question: "What about 'super lice' that are resistant to OTC treatments?",
      answer: "Our professional treatment method is 99.9% effective at eliminating all types of lice, including those resistant to over-the-counter chemical treatments. Our natural approach targets lice physically, not chemically, making resistance impossible."
    },
    {
      question: "Where are you located?",
      answer: "We're conveniently located in Wantagh, NY and proudly serve families throughout Nassau County and neighboring communities. Call us at (516) 853-8242 for directions or to schedule your appointment."
    },
    {
      question: "How quickly can I get an appointment?",
      answer: "We understand that lice is urgent! We offer same-day appointments when available. Call us at (516) 853-8242 and our team will work to get you in as quickly as possible, often within 24 hours."
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