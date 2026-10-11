import React from 'react';
import { X, Check, Bed, Users, ShieldCheck } from 'lucide-react';
import { RoomType, buildRoomBookingWhatsAppLink } from '../data/hotelData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface RoomModalProps {
  room: RoomType | null;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (room) {
      setActiveImage(room.image);
    }
  }, [room]);

  if (!room) return null;

  const currentImage = activeImage || room.image;
  const galleryImages = (room.images && room.images.length > 0)
    ? room.images
    : (room.gallery && room.gallery.length > 0 ? room.gallery : [room.image]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-room-title"
      >
        {/* Modal Header Image with Carousel Chevrons */}
        <div className="relative aspect-16/10 w-full bg-zinc-900 shrink-0 group">
          {room.discountBadge && (
            <div className="absolute top-0 right-0 z-30">
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-900 text-amber-200 px-4 py-2 shadow-2xl border-b border-l border-amber-300/80 rounded-bl-2xl font-serif text-xs sm:text-sm font-black tracking-wider flex items-center gap-2">
                <span className="text-amber-300 drop-shadow">🎁</span>
                <span className="drop-shadow-md">{room.discountBadge}</span>
              </div>
            </div>
          )}
          <img
            src={currentImage}
            alt={room.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-all duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Carousel Left / Right Navigation Buttons */}
          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => {
                  const currentIndex = galleryImages.indexOf(currentImage);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setActiveImage(galleryImages[prevIndex]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-80 group-hover:opacity-100 z-10 cursor-pointer"
                aria-label="Previous photo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => {
                  const currentIndex = galleryImages.indexOf(currentImage);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setActiveImage(galleryImages[nextIndex]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-80 group-hover:opacity-100 z-10 cursor-pointer"
                aria-label="Next photo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Photo Index Counter */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider z-10 border border-white/20">
                {galleryImages.indexOf(currentImage) + 1} / {galleryImages.length}
              </div>
            </>
          )}

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10 cursor-pointer"
            aria-label="Close room details dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-5 right-5 text-white pointer-events-none">
            <h3 id="modal-room-title" className="text-xl sm:text-2xl font-serif font-bold text-white">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Multi-Photo Thumbnail Bar if Gallery Exists */}
        {galleryImages.length > 1 && (
          <div className="bg-zinc-900 px-4 py-2.5 flex items-center gap-2.5 overflow-x-auto border-b border-zinc-800 shrink-0">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider shrink-0 mr-1 font-semibold">
              Photos ({galleryImages.length}):
            </span>
            {galleryImages.map((imgSrc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(imgSrc)}
                className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  currentImage === imgSrc ? 'border-[#B89762] scale-105 shadow-md ring-2 ring-[#B89762]/40' : 'border-zinc-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`${room.name} ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Rate & Meta Specs */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-zinc-200/80">
            <div>
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                Nightly Rate {room.discountBadge && <span className="text-amber-600 font-bold ml-1">({room.discountBadge})</span>}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                {room.originalPricePerNight && (
                  <span className="text-sm text-zinc-400 line-through font-normal">
                    {room.originalPricePerNight}
                  </span>
                )}
                <span className="text-2xl sm:text-3xl font-sans font-black text-zinc-900 tabular-nums">
                  {room.pricePerNight}
                </span>
                <span className="text-xs font-bold text-zinc-600">/ night</span>
              </div>
              {room.promoTag && (
                <div className="mt-1.5 inline-block bg-amber-50 text-amber-800 text-[10px] font-semibold px-2 py-0.5 rounded border border-amber-200">
                  {room.promoTag}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-700">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#B89762]" />
                <span>{room.size}</span>
              </div>
              <span>&middot;</span>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#B89762]" />
                <span>{room.maxGuests}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Overview & Atmosphere
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Inclusions Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Included Amenities & Comforts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.detailedInclusions.map((inclusion, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                  <Check className="w-3.5 h-3.5 text-[#B89762] shrink-0 mt-0.5" />
                  <span>{inclusion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Mountain Guarantees */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs text-zinc-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>IHRAM Hotel Guest Guarantee</span>
            </div>
            <p>
              24/7 dedicated hot water geyser, round-the-clock silent generator power backup, secure gated parking, and family-first privacy protocol.
            </p>
          </div>
        </div>

        {/* Modal Sticky Footer Action */}
        <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-zinc-500 hidden sm:block">
            Fast WhatsApp Confirmation in 5 mins
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-2.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors min-h-[44px]"
            >
              Close
            </button>
            <a
              href={buildRoomBookingWhatsAppLink(room)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] hover:scale-105 active:scale-95 rounded-xl transition-all duration-300 shadow-md shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-500/40 min-h-[44px] cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Reserve Room on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
