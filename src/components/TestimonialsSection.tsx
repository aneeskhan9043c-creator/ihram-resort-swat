import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/hotelData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<any>(null);
  const totalReviews = TESTIMONIALS.length;

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
    setProgressKey((prev) => prev + 1);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
    setProgressKey((prev) => prev + 1);
  };

  // 3.0 Seconds Auto-Play rotation timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextReview();
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-zinc-950 text-white border-b border-[#C5A880]/20 relative overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#059669]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with spring fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2.5">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>GUEST EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-3 tracking-tight">
            Trusted by Families Across Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Real guest experiences from families staying on Malam Jabba Road, Swat Valley.
          </p>
        </motion.div>

        {/* Animated Single-Card Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-2xl mx-auto bg-zinc-900/90 backdrop-blur-xl text-white p-7 sm:p-10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-[#C5A880]/30 relative overflow-hidden text-center group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3-Second Gold Progress Bar at Top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800/80 overflow-hidden">
            <motion.div
              key={progressKey}
              initial={{ width: '0%' }}
              animate={isPaused ? { width: '0%' } : { width: '100%' }}
              transition={{ duration: 3.0, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] shadow-[0_0_10px_rgba(212,175,55,0.7)]"
            />
          </div>

          {/* Decorative Quote Icon in Warm Gold */}
          <div className="flex justify-center mb-4 text-[#D4AF37]/40">
            <Quote className="w-10 h-10 rotate-180" />
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-5 text-[#D4AF37]">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>

          {/* Review Text with Smooth AnimatePresence Slide/Fade */}
          <div className="min-h-[115px] flex items-center justify-center mb-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: direction * 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 25 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full px-2 sm:px-4"
              >
                <p className="text-base sm:text-lg text-zinc-100 font-serif italic font-normal leading-relaxed">
                  "{activeReview.comment}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Reviewer Details */}
          <div className="mb-6">
            <div className="font-serif font-bold text-lg text-white tracking-wide">
              {activeReview.author}
            </div>
            <div className="inline-block mt-1.5 px-3.5 py-1 rounded-full bg-zinc-800/90 text-[#D4AF37] text-xs font-medium border border-[#C5A880]/30 shadow-xs">
              {activeReview.locationDetails || `${activeReview.city} · Stayed in ${activeReview.roomType}`}
            </div>
          </div>

          {/* Controls: Left / Right Arrows & Pagination Dots */}
          <div className="flex items-center justify-between pt-5 border-t border-zinc-800/80 mt-2">
            <button
              type="button"
              onClick={prevReview}
              className="p-2.5 rounded-full bg-zinc-800/90 hover:bg-[#C5A880]/20 hover:border-[#C5A880]/50 border border-zinc-700/60 active:scale-95 text-zinc-300 hover:text-white transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                    setProgressKey((prev) => prev + 1);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-7 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              className="p-2.5 rounded-full bg-zinc-800/90 hover:bg-[#C5A880]/20 hover:border-[#C5A880]/50 border border-zinc-700/60 active:scale-95 text-zinc-300 hover:text-white transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
