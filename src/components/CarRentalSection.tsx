import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Car,
  Maximize2
} from 'lucide-react';

interface CarItem {
  id: string;
  title: string;
  mainImage: string;
  additionalImages: string[];
}

const CARS: CarItem[] = [
  {
    id: 'executive-van',
    title: 'Executive Group Van / Luxury Transport',
    mainImage: 'https://i.postimg.cc/Y0PzqFtR/Whats-App-Image-2026-10-13-at-8-23-56-PM-(1).jpg',
    additionalImages: [
      'https://i.postimg.cc/x8Z3Tm9F/Whats-App-Image-2026-10-13-at-8-23-56-PM.jpg',
      'https://i.postimg.cc/FFCZxM05/Whats-App-Image-2026-10-13-at-8-23-57-PM.jpg',
    ],
  },
  {
    id: 'city-car',
    title: 'Comfortable City Rental Car',
    mainImage: 'https://i.postimg.cc/ZqmzjB65/Whats-App-Image-2026-10-13-at-8-23-57-PM.jpg',
    additionalImages: [
      'https://i.postimg.cc/Z5r19bXk/Whats-App-Image-2026-10-13-at-8-23-58-PM.jpg',
      'https://i.postimg.cc/qv89tJSF/Whats-App-Image-2026-10-13-at-8-23-58-PM-(1).jpg',
    ],
  },
];

export const CarRentalSection: React.FC = () => {
  // Store active image index per car
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: string]: number }>({
    'executive-van': 0,
    'city-car': 0,
  });

  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
  } | null>(null);

  const handleSelectImage = (carId: string, index: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [carId]: index,
    }));
  };

  const getCarImages = (car: CarItem) => [car.mainImage, ...car.additionalImages];

  const openLightbox = (car: CarItem, index: number) => {
    setLightboxData({
      images: getCarImages(car),
      currentIndex: index,
      title: car.title,
    });
  };

  const nextLightboxImage = () => {
    if (!lightboxData) return;
    setLightboxData((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length,
          }
        : null
    );
  };

  const prevLightboxImage = () => {
    if (!lightboxData) return;
    setLightboxData((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
          }
        : null
    );
  };

  return (
    <section id="car-rental" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto">
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-[11px] font-bold tracking-wider uppercase mb-2">
            <Car className="w-3.5 h-3.5 text-amber-700" />
            <span>Transport Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-zinc-900 tracking-tight">
            Car Rental Services
          </h2>
        </div>

        {/* 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARS.map((car) => {
            const allImages = getCarImages(car);
            const activeIndex = activeImageIndexes[car.id] || 0;
            const currentImg = allImages[activeIndex] || car.mainImage;

            return (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
              >
                {/* Main Photo Container */}
                <div className="relative aspect-16/10 bg-zinc-900 overflow-hidden select-none group">
                  <img
                    src={currentImg}
                    alt={car.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 cursor-pointer"
                    onClick={() => openLightbox(car, activeIndex)}
                  />

                  {/* Simple "Rent Available" Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-600 text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Rent Available
                    </span>
                  </div>

                  {/* Expand icon button */}
                  <button
                    type="button"
                    onClick={() => openLightbox(car, activeIndex)}
                    className="absolute bottom-2.5 right-2.5 bg-zinc-900/75 hover:bg-zinc-900 text-white backdrop-blur-xs p-1.5 rounded-lg text-xs transition shadow cursor-pointer"
                    aria-label="View photo fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnails Row */}
                <div className="p-3 pb-1 flex items-center gap-2 overflow-x-auto scrollbar-none bg-zinc-50/60 border-b border-zinc-100">
                  {allImages.map((imgUrl, imgIdx) => {
                    const isSelected = activeIndex === imgIdx;
                    return (
                      <button
                        key={imgIdx}
                        type="button"
                        onClick={() => handleSelectImage(car.id, imgIdx)}
                        className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 shadow-xs ring-1 ring-amber-500/40'
                            : 'border-zinc-200 opacity-65 hover:opacity-100 hover:border-zinc-300'
                        }`}
                        aria-label={`View photo ${imgIdx + 1} of ${car.title}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${car.title} thumbnail ${imgIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Minimal Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-zinc-900 mb-1 leading-snug">
                    {car.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Rental cars available for local and long-distance travel
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxData(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="w-full flex items-center justify-between text-white pb-3 px-2">
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base">{lightboxData.title}</h4>
                  <span className="text-xs text-zinc-400">
                    Photo {lightboxData.currentIndex + 1} of {lightboxData.images.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxData(null)}
                  className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition cursor-pointer"
                  aria-label="Close image viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image in Lightbox */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950">
                <img
                  src={lightboxData.images[lightboxData.currentIndex]}
                  alt={`${lightboxData.title} view`}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {lightboxData.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevLightboxImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer active:scale-95"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={nextLightboxImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer active:scale-95"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Lightbox Thumbnails */}
              {lightboxData.images.length > 1 && (
                <div className="flex items-center gap-2 pt-4">
                  {lightboxData.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setLightboxData((prev) => (prev ? { ...prev, currentIndex: idx } : null))
                      }
                      className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        lightboxData.currentIndex === idx
                          ? 'border-amber-400 scale-105'
                          : 'border-zinc-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
