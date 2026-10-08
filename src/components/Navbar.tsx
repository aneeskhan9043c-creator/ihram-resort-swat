import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onQuickBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Rooms & Rates', href: '#rooms' },
    { label: 'Experience', href: '#experience' },
    { label: 'Key Amenities', href: '#facilities' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const primaryPhoneUrl = 'tel:+923190717774';
  const whatsappInquiryUrl =
    'https://wa.me/923190717774?text=*IHRAM%20Hotel%20%26%20Resort%20-%20General%20Inquiry*%20%F0%9F%8F%A8%0A%0AHello!%20I%20would%20like%20to%20check%20room%20availability';

  return (
    <>
      {/* 1. White Frosted Glass Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          {/* Main Hotel Logo / Title */}
          <a
            href="#"
            className="flex flex-col group shrink-0"
            aria-label="IHRAM Hotel and Resort Home"
          >
            <span className="text-lg sm:text-xl font-serif font-extrabold tracking-[0.16em] text-slate-900 group-hover:text-[#B89762] transition-colors duration-300 leading-none">
              IHRAM HOTEL
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-bold text-amber-600 group-hover:text-amber-500 transition-colors duration-300 leading-none mt-1">
              AND RESORT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-600 transition-colors py-1 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Right Actions Container */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Call Button */}
            <a
              href={primaryPhoneUrl}
              className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              title="Call IHRAM Hotel (+92 319 0717774)"
              aria-label="Call IHRAM Hotel"
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span className="hidden lg:inline font-semibold text-xs tracking-wide">
                Call Now
              </span>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span className="hidden lg:inline font-semibold text-xs tracking-wide">
                WhatsApp
              </span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden bg-slate-100 hover:bg-slate-200 text-slate-800 p-2.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. Mobile Navigation Drawer (100% Mobile Optimized) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="relative w-full max-w-xs sm:max-w-sm h-full bg-white/95 backdrop-blur-xl border-l border-slate-200/80 shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto animate-in slide-in-from-right duration-300"
          >
            <div>
              {/* Drawer Header: Brand + Clean Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/80">
                <div className="flex flex-col">
                  <span className="text-base font-serif font-bold tracking-wider text-slate-900">
                    IHRAM HOTEL
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-amber-600">
                    AND RESORT · SWAT
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-slate-950 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with >=48px Touch Target */}
              <nav
                className="mt-5 flex flex-col gap-1.5"
                aria-label="Mobile primary navigation"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] px-3.5 py-3 rounded-xl text-slate-800 hover:text-emerald-700 hover:bg-emerald-50/70 font-semibold text-sm transition-all flex items-center justify-between active:scale-[0.99]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col gap-3 mt-6">
              {/* Call Now Full-Width CTA */}
              <a
                href={primaryPhoneUrl}
                className="w-full min-h-[48px] py-3.5 px-5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-md shadow-amber-500/20 transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Now (+92 319 0717774)</span>
              </a>

              {/* WhatsApp Booking Full-Width CTA */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-md shadow-emerald-600/20 transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp Booking</span>
              </a>

              <div className="text-[11px] text-center text-slate-500 pt-1">
                Main Malam Jabba Road, Swat Valley
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
