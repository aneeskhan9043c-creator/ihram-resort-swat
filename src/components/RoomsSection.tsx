import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS, RoomType, buildRoomBookingWhatsAppLink } from '../data/hotelData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface RoomsSectionProps {
  onSelectRoom: (room: RoomType) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom }) => {
  return (
    <section id="rooms" className="py-12 sm:py-16 px-4 sm:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with spring fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#B89762] mb-1.5">
            ACCOMMODATIONS & RATES
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight mb-2">
            Comfortable Rooms &amp; Mountain View Suites
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Clean, spacious, and fully equipped rooms for visiting families and tourists near Malam Jabba.
          </p>
        </motion.div>

        {/* Compact 4-Card Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROOMS.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
              className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 ease-out flex flex-col justify-between group"
            >
              {/* Clean Image with slow-zoom hover */}
              <div className="relative aspect-16/10 overflow-hidden bg-zinc-200">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallback = room.image.startsWith('./') ? room.image.replace('./', '/') : room.image;
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-serif font-bold text-zinc-900 group-hover:text-[#B89762] transition-colors">
                      {room.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-bold text-zinc-900">{room.pricePerNight}</span>
                      <span className="block text-[10px] text-zinc-500">/ night</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-[#B89762] mb-3">
                    {room.tagline}
                  </div>
                  {/* 3-Point Checklist */}
                  <ul className="space-y-2 mb-5 text-xs text-zinc-600">
                    {room.features.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-3 border-t border-zinc-200/80">
                  <a
                    href={buildRoomBookingWhatsAppLink(room)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] hover:scale-105 active:scale-95 rounded-full transition-all duration-300 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-500/40 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 fill-current" />
                    <span>Reserve on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onSelectRoom(room)}
                    className="w-full inline-flex items-center justify-center gap-1 py-1.5 text-[11px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    <span>View Room Specifications</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
