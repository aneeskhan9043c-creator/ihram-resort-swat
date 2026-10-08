import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, NEARBY_ATTRACTIONS, WHATSAPP_LOCATION_URL } from '../data/hotelData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-12 sm:py-16 px-4 sm:px-8 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#B89762] mb-1.5">
            LOCATION &amp; ACCESSIBILITY
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Prime Mountain Location on Malam Jabba Road
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Directly situated on Main Malam Jabba Road with scenic mountain views and fast access to ski slopes, chairlift, and Swat valley attractions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Key Travel Distances & Address */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3.5 flex items-center justify-between">
                <span>Key Travel Distances</span>
                <span className="text-[10px] font-semibold text-[#B89762] bg-[#B89762]/10 px-2 py-0.5 rounded-full">
                  Malam Jabba Road
                </span>
              </h3>

              {/* Clean Travel Distances List with Spring Reveal */}
              <div className="space-y-3">
                {NEARBY_ATTRACTIONS.map((spot, idx) => (
                  <motion.div
                    key={spot.name}
                    initial={{ opacity: 0, x: -15, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: idx * 0.08 }}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-[#B89762]/50 hover:shadow-sm hover:-translate-x-0.5 transition-all group"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="text-xl shrink-0 w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                        {spot.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 truncate block group-hover:text-amber-700 transition-colors">
                          {spot.name}
                        </span>
                        <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                          {spot.description}
                        </p>
                      </div>
                    </div>
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15, delay: idx * 0.08 + 0.1 }}
                      className="text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 border bg-amber-500/10 text-amber-800 border-amber-500/25 shadow-2xs"
                    >
                      {spot.distance}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Address Line & Action Buttons */}
            <div className="pt-2 bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xs space-y-3.5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#B89762]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#B89762]" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    Official Hotel Address
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-100 hover:bg-zinc-200 active:scale-95 border border-zinc-200 text-zinc-700 rounded-full text-xs font-medium transition-all shadow-2xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={WHATSAPP_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] hover:scale-105 active:scale-95 text-white rounded-full text-xs font-semibold shadow-md shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>Send WhatsApp Location</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="rounded-3xl shadow-xl border border-zinc-300 overflow-hidden bg-white">
              {/* Map Preview Container with Clickable Overlay & Floating Top Button */}
              <div className="relative aspect-16/10 w-full group overflow-hidden bg-zinc-100">
                {/* 3. MAP IMAGE / IFRAME CLICKABLE OVERLAY */}
                <a
                  href="https://share.google/EnbQBbXCuXh0MKMNj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open IHRAM Hotel and Resort location on Google Maps"
                  className="absolute inset-0 z-10 block cursor-pointer transition-colors hover:bg-black/5"
                >
                  <span className="sr-only">Open IHRAM Hotel and Resort location on Google Maps</span>
                </a>

                {/* 1. TOP "Open in Maps" FLOATING BUTTON */}
                <a
                  href="https://share.google/EnbQBbXCuXh0MKMNj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/95 hover:bg-white active:scale-95 text-zinc-900 text-xs font-semibold rounded-full shadow-md backdrop-blur-md border border-zinc-200/80 transition-all hover:shadow-lg cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 ml-0.5" />
                </a>

                {/* Embedded Map Visual */}
                <iframe
                  title="IHRAM Hotel and Resort Malam Jabba Road Swat Location Map"
                  src="https://maps.google.com/maps?q=Malam+Jabba+Road+Swat+Khyber+Pakhtunkhwa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Map Footer Bar with Green Open in Google Maps Button */}
              <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-zinc-600">
                  <span className="font-bold text-zinc-900 text-sm block sm:inline">IHRAM Hotel &amp; Resort</span>
                  <span className="hidden sm:inline"> &middot; </span>
                  <span className="text-zinc-500">Malam Jabba Road, Swat</span>
                </div>

                {/* 2. GREEN "Open in Google Maps" MAIN CTA BUTTON */}
                <a
                  href="https://share.google/EnbQBbXCuXh0MKMNj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition-all duration-300 text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
