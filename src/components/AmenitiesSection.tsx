import React from 'react';
import { Droplets, Zap, Trees, Waves, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AMENITIES } from '../data/hotelData';

export const AmenitiesSection: React.FC = () => {
  const iconList = [
    { icon: Droplets, color: 'text-amber-600', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: Zap, color: 'text-amber-600', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: Trees, color: 'text-emerald-600', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { icon: Waves, color: 'text-sky-600', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
    { icon: UtensilsCrossed, color: 'text-rose-600', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    { icon: ShieldCheck, color: 'text-amber-600', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  ];

  return (
    <section id="facilities" className="py-12 sm:py-16 px-4 sm:px-8 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Header with spring fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#B89762] mb-1.5">
            COMFORT & CONVENIENCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Key Amenities & Facilities
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Essential comforts for a worry-free family holiday along Malam Jabba Road, Swat.
          </p>
        </motion.div>

        {/* 3x2 Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {AMENITIES.map((amenity, index) => {
            const config = iconList[index % iconList.length];
            const Icon = config.icon;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-xs hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/40 transition-all duration-500 ease-out flex items-start gap-4 group cursor-default"
              >
                <motion.div
                  initial={{ scale: 0.75, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18, delay: index * 0.1 + 0.1 }}
                  className={`w-12 h-12 rounded-xl ${config.bg} ${config.border} border flex items-center justify-center ${config.color} shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-1 group-hover:text-[#B89762] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
