import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697de8f0e16bb9fad3ffd3cb/95be42d30_LiceLifters_Horizontal_original-01.png"
              alt="Lice Lifters Of Omaha"
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
          >
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </motion.div>

          {/* Thank You Message */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            Your appointment has been confirmed
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We've sent you a confirmation email with all the details. We look forward to helping your family get lice-free!
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <Calendar className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
              <p className="text-sm text-gray-600">
                Your treatment will take 1-2 hours. We'll ensure everyone leaves 100% lice-free with our guaranteed method.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <MapPin className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us At</h3>
              <p className="text-sm text-gray-600">
                3015 Menke Cir bay 6<br />
                Omaha, NE 68134
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <Phone className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Questions?</h3>
              <p className="text-sm text-gray-600 mb-2">
                Call us anytime:
              </p>
              <a href="tel:+14027414425" className="text-teal-600 font-semibold hover:text-teal-700">
                (402) 741-4425
              </a>
            </motion.div>
          </div>

          {/* Preparation Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8 text-left mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Before Your Appointment</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Please arrive with <strong>dry, unwashed hair</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Bring any family members who may also need treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>No special preparation needed - we'll take care of everything</span>
              </li>
            </ul>
          </motion.div>

          {/* Back Button */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-gray-200 hover:border-teal-600 hover:text-teal-600 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300"
          >
            <Link to={createPageUrl('Home')}>
              Return to Homepage
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Lice Lifters Of Omaha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}