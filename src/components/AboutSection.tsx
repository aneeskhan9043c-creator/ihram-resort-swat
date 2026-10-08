import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, WHATSAPP_GENERAL_URL } from '../data/hotelData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const AboutSection: React.FC = () => {
  return (
    <section id="experience" className="bg-zinc-50 py-12 sm:py-16 px-4 sm:px-8 border-y border-zinc-200/60">
      <div className="max-w-6xl mx-auto">
        {/* Header copy with reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          {/* Eyebrow Badge */}
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#B89762] font-semibold mb-2">
            THE MOUNTAIN RESORT EXPERIENCE
          </div>
          {/* Main H2 Headline */}
          <h2 className="text-2xl sm:text-4xl font-serif text-zinc-900 font-bold leading-tight mb-4">
            A Peaceful Mountain Retreat for Families
          </h2>
          {/* Sub-description */}
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            Located directly on Main Malam Jabba Road, IHRAM Hotel and Resort combines clean, comfortable lodging with lush green resort lawns, outdoor seating, swimming pool, and crisp pine mountain breezes close to Malam Jabba Ski Resort.
          </p>
        </motion.div>

        {/* 6-Image Static Photo Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 group aspect-4/3 bg-zinc-100">
            <img
              src="./images/regenerated_image_1791406010900.webp"
              alt="Main Lawn Area"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full border border-white/10">
              Main Lawn Area
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 group aspect-4/3 bg-zinc-100">
            <img
              src="./images/lawn-day.jpg"
              alt="Outdoor Seating"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full border border-white/10">
              Outdoor Seating
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 group aspect-4/3 bg-zinc-100">
            <img
              src="./images/garden-night.jpg"
              alt="Garden Night View"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full border border-white/10">
              Garden Night View
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 group aspect-4/3 bg-zinc-100">
            <img
              src="./images/pool-view.jpg"
              alt="Swimming Pool Ground"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full border border-white/10">
              Swimming Pool Ground
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 group aspect-4/3 bg-zinc-100">
            <img
              src="./images/building-main.jpg"
              alt="Daytime Lawn"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full border border-white/10">
              Daytime Lawn
            </div>
          </div>
        </div>

        {/* Feature Highlights & CTA Section */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Sleek Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">Malam Jabba Road Gateway</h3>
              <p className="text-xs text-zinc-500 leading-normal">
                Scenic mountain views with direct access to skiing, chairlifts, and zip-line.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">100% Family Atmosphere</h3>
              <p className="text-xs text-zinc-500 leading-normal">
                Spacious open garden, outdoor charpoy seating, and secure gated parking.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-white font-semibold py-3 px-6 rounded-full text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89762]" />
              <span>Inquire Front Desk</span>
            </a>
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] hover:scale-105 active:scale-95 text-white font-semibold py-3 px-6 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-500/40 flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp Reception</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
