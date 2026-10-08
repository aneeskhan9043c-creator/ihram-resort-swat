import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RoomType } from './data/hotelData';

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  const scrollToHeroInquiry = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col bg-white text-zinc-900 selection:bg-[#C5A880]/30 selection:text-zinc-900 overflow-x-hidden scroll-smooth">
      {/* 1. HEADER & NAVIGATION (White Frosted Glass Header) */}
      <Navbar onQuickBookClick={scrollToHeroInquiry} />
      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. HERO SECTION */}
        <Hero />
        {/* 3. ABOUT THE HOTEL / MOUNTAIN EXPERIENCE */}
        <AboutSection />
        {/* 4. OUR ROOMS & SUITES */}
        <RoomsSection onSelectRoom={(room) => setSelectedRoom(room)} />
        {/* 5. KEY AMENITIES & FACILITIES */}
        <AmenitiesSection />
        {/* 6. GUEST REVIEWS & TESTIMONIALS */}
        <TestimonialsSection />
        {/* 7. LOCATION & GOOGLE MAPS */}
        <LocationSection />
      </main>
      {/* 8. FOOTER */}
      <Footer />
      {/* Interactive Dialogs & Sticky Affordances */}
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      <FloatingWhatsApp />
    </div>
  );
}
