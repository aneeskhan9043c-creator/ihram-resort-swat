import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_GENERAL_URL } from '../data/hotelData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-4 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3 animate-fade-in"
    >
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2.5 bg-zinc-950/90 backdrop-blur-xl text-white text-xs font-medium py-2.5 px-4 rounded-full shadow-2xl border border-[#C5A880]/30 animate-in fade-in slide-in-from-right-2">
          <span className="text-zinc-200">Need quick room rates &amp; availability?</span>
          <button
            type="button"
            onClick={() => setTooltipVisible(false)}
            className="text-zinc-400 hover:text-white p-0.5 transition-colors cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button Container with Luxury Emerald Glow Effect */}
      <div className="relative group">
        {/* Ambient Pulsing Glow Rings */}
        <span
          className="absolute -inset-1.5 rounded-full bg-emerald-500/35 blur-md animate-pulse pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping pointer-events-none"
          style={{ animationDuration: '3.5s' }}
          aria-hidden="true"
        />

        {/* Core Luxury WhatsApp CTA Button */}
        <a
          href={WHATSAPP_GENERAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTooltipVisible(true)}
          className="relative z-10 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white flex items-center justify-center shadow-xl shadow-emerald-950/40 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
          aria-label="Direct WhatsApp Chat with IHRAM Hotel Front Desk"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>
    </aside>
  );
};
