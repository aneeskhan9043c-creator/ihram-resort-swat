import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/923190717774?text=*IHRAM%20Hotel%20%26%20Resort%20-%20General%20Inquiry*%20%F0%9F%8F%A8%0A%0AHello!%20I%20would%20like%20to%20check%20room%20availability%20for%20my%20upcoming%20family%20stay.';

  // Parallax Background on Scroll
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-[100dvh] flex flex-col justify-start bg-slate-950 text-white overflow-hidden">
      {/* 1. PARALLAX BACKGROUND & DUAL-LAYER GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          style={{ y: yBg }}
          src="./images/hotel-front.jpg"
          alt="IHRAM Hotel and Resort - Main Malam Jabba Road Swat"
          className="w-full h-[115%] -top-[5%] relative object-cover object-center brightness-[1.03] contrast-[1.02] scale-105 will-change-transform"
          loading="eager"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = '/unnamed.webp';
          }}
        />
        {/* Dual-layer dark gradient overlay guaranteeing 100% crisp text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60 z-10"
          aria-hidden="true"
        />
      </div>

      {/* 2. TEXT LAYOUT & POSITIONING (Shifted Upwards into Sky Area) */}
      <div className="pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-20 relative w-full">
        {/* 4. SUBTLE EDITORIAL GLASS CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl max-w-3xl"
        >
          {/* 3. COMPACT INTEGRATED BADGE PILL (Fade-In Down with 100ms delay) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mb-4 inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-slate-950/60 text-slate-200 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg flex-wrap sm:flex-nowrap">
              <span className="flex items-center gap-1.5 text-amber-300">
                <span>📍</span>
                <span>Main Malam Jabba Road, Swat</span>
              </span>
              <span className="text-slate-400 font-normal hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-100">
                <span className="text-amber-400">⭐</span>
                <span>4.7 Rated on Google</span>
              </span>
            </div>
          </motion.div>

          {/* 2. DISTINCTIVE & UNIQUE TYPOGRAPHY DESIGN */}
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 text-amber-400 font-bold tracking-[0.25em] text-xs uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full backdrop-blur-md">
              ✦ LUXURY MOUNTAIN SANCTUARY
            </span>
          </motion.div>

          {/* Dual-Tone Headline (Slide-up fade-in with 250ms delay) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-xl"
          >
            Your Luxury Family Stay <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              in Swat Valley
            </span>
          </motion.h1>

          {/* Description (Slide-up fade-in with 400ms delay) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-xl leading-relaxed mb-6 drop-shadow"
          >
            Experience peaceful family comfort on Main Malam Jabba Road. Enjoy spacious Guest House Suites, 24/7 hot water, uninterrupted generator power, and a green lawn with kids pool.
          </motion.p>

          {/* 5. ACTION BUTTONS (Scale-up elastic entrance with 550ms delay) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            {/* Primary CTA: Glowing Emerald WhatsApp Button with breathing pulse aura */}
            <div className="relative group/btn">
              <span className="absolute -inset-0.5 rounded-xl bg-emerald-500/30 blur-sm group-hover/btn:bg-emerald-400/50 transition-all duration-300 pointer-events-none animate-pulse" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                <span>Book Your Stay on WhatsApp</span>
              </a>
            </div>

            {/* Secondary CTA: Explore Suites & Rates */}
            <a
              href="#rooms"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 text-sm sm:text-base text-center cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Explore Suites &amp; Rates ↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
