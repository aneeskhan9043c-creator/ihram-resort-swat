import React, { useState, useEffect } from 'react';
import { Phone, MapPin, X, ShieldCheck, FileText, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, WHATSAPP_GENERAL_URL } from '../data/hotelData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPrivacyOpen(false);
    };
    if (isPrivacyOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPrivacyOpen]);

  return (
    <>
      <footer
        id="contact"
        className="bg-zinc-950 text-zinc-400 pt-14 pb-24 sm:pb-20 px-4 sm:px-8 border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
            {/* Brand Info */}
            <div className="md:col-span-5 space-y-2">
              <h3 className="text-xl font-serif font-bold text-white tracking-wider uppercase animate-fade-in">
                IHRAM HOTEL AND RESORT
              </h3>
              <div className="text-[11px] font-semibold tracking-widest text-[#D4AF37] uppercase">
                MALAM JABBA ROAD, SWAT
              </div>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed pt-1">
                Luxury mountain family lodging in Swat. Clean rooms, 24/7 hot water,
                uninterrupted generator power, and authentic local dining near Malam Jabba
                Ski Resort.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-2 text-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#rooms" className="text-zinc-400 hover:text-white transition-colors">
                    Rooms &amp; Suites
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">
                    The Mountain Experience
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="text-zinc-400 hover:text-white transition-colors">
                    Amenities &amp; Facilities
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-zinc-400 hover:text-white transition-colors">
                    Location &amp; Driving Map
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="md:col-span-4 space-y-2.5 text-xs text-zinc-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Contact Reception &amp; Booking
              </h4>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <div>
                  <a
                    href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="text-zinc-200 hover:text-[#D4AF37] font-semibold text-xs tracking-wide transition-colors"
                  >
                    {HOTEL_INFO.phonePrimary}
                  </a>
                  <span className="block text-[11px] text-zinc-400">
                    Calls &amp; WhatsApp Booking
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]/80 shrink-0" />
                <div>
                  <a
                    href={`tel:${(HOTEL_INFO.phoneSecondary || '+923339887544').replace(/\s+/g, '')}`}
                    className="text-zinc-200 hover:text-[#D4AF37] font-semibold text-xs tracking-wide transition-colors"
                  >
                    {HOTEL_INFO.phoneSecondary || '+92 333 9887544'}
                  </a>
                  <span className="block text-[11px] text-zinc-400">
                    General Inquiry / Management
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="pt-2">
                <a
                  href={WHATSAPP_GENERAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] hover:scale-105 active:scale-95 text-white rounded-full text-xs font-bold transition-all duration-300 shadow-md shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-500/40 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. ULTRA-LUXURY BOTTOM BAR & CREATOR BADGE REDESIGN */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 border-t border-slate-800 text-slate-400 text-xs text-center">
            {/* Copyright & Legal Links */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-slate-400">
              <p>&copy; 2026 IHRAM Hotel and Resort. All rights reserved.</p>
              <span className="hidden sm:inline text-slate-600">&middot;</span>
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="text-slate-400 hover:text-amber-400 underline transition-colors cursor-pointer"
              >
                Privacy Policy &amp; Guest Terms
              </button>
            </div>

            {/* Modern Luxury Creator Badge - Centered & Animated */}
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -3.5, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                className="relative inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/40 hover:border-amber-400 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300 group cursor-default"
              >
                {/* Glowing Aura Ring */}
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-600/20 blur-xs opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none" />

                {/* Code / Sparkle Icon */}
                <svg
                  className="relative w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-300 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>

                <span className="relative text-slate-300 text-xs font-medium tracking-wide">
                  Designed &amp; Developed by
                </span>

                <span className="relative bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-md text-[11px] tracking-wider uppercase shadow-sm group-hover:scale-105 transition-transform duration-300">
                  ANEES
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {/* 3. PRIVACY POLICY & LOCAL PROTOCOLS MODAL DIALOG */}
      {isPrivacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Smooth Backdrop Blur */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsPrivacyOpen(false)}
            aria-hidden="true"
          />

          {/* Clean Modal Card */}
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 text-slate-200 p-6 sm:p-7 rounded-2xl shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    id="privacy-modal-title"
                    className="text-base sm:text-lg font-serif font-bold text-white tracking-wide"
                  >
                    Privacy Policy &amp; Guest Terms
                  </h3>
                  <p className="text-[11px] text-amber-400/90 font-medium tracking-wider uppercase">
                    IHRAM HOTEL &amp; RESORT · SWAT VALLEY
                  </p>
                </div>
              </div>

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Pakistan Local Hospitality Standards */}
            <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {/* Clause 1: CNIC Requirement */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs mb-1">
                    CNIC / Identity Requirement
                  </h4>
                  <p className="text-slate-300 text-xs">
                    As per KPK Police and Pakistan Government regulations, all adult guests must present original CNIC or valid Passport at check-in.
                  </p>
                </div>
              </div>

              {/* Clause 2: Data Protection */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs mb-1">
                    Data Protection &amp; Confidentiality
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Customer contact details submitted via WhatsApp or phone are strictly used for booking confirmations and customer service. We do not sell or share personal data.
                  </p>
                </div>
              </div>

              {/* Clause 3: Family Stay Environment */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                <Users className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs mb-1">
                    Family Stay Environment
                  </h4>
                  <p className="text-slate-300 text-xs">
                    IHRAM Hotel &amp; Resort is committed to maintaining a secure, peaceful, and family-friendly atmosphere.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
              <span className="text-[11px] text-slate-500">
                Official Front Desk: +92 319 0717774
              </span>
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
