export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  pricePKR: number;
  pricePerNight: string;
  image: string;
  images?: string[];
  gallery?: string[];
  size: string;
  bedType: string;
  view: string;
  maxGuests: string;
  features: string[];
  detailedInclusions: string[];
  description: string;
}

export interface MenuItem {
  name: string;
  description: string;
  pricePKR: number;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  category: string;
  items: MenuItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  stayDate: string;
  roomType: string;
  locationDetails?: string;
  rating: number;
  comment: string;
}

export interface HotelViewSlide {
  id: string;
  src: string;
  title: string;
  tag: string;
  description: string;
}

export const HOTEL_VIEWS_SLIDES: HotelViewSlide[] = [
  {
    id: 'evening-lawn',
    src: '/unnamed.webp',
    title: 'Evening Garden & Ambient Lights',
    tag: 'Dusk View',
    description: 'Ambient evening lawn with warm lanterns, tea tables & mountain breeze'
  },
  {
    id: 'swimming-pool',
    src: '/WhatsApp Image 2026-10-07 at 3.11.45 PM.jpeg',
    title: 'Swimming Pool & Terrace Dining',
    tag: 'Pool & Lawn',
    description: 'Refreshing swimming pool with shaded outdoor tables and valley view'
  },
  {
    id: 'charpai-lounge',
    src: '/WhatsApp Image 2026-10-07 at 3.11.16 PM.jpeg',
    title: 'Traditional Swati Charpai Seating',
    tag: 'Outdoor Lounge',
    description: 'Authentic woven charpais with traditional cushions on lush green grass'
  },
  {
    id: 'hotel-building',
    src: '/unnamed.jpg',
    title: 'Hotel Main Building & Courtyard',
    tag: 'Main Building',
    description: 'Charming 3-story boutique hotel with curved balconies and private parking'
  },
  {
    id: 'sunny-lawn',
    src: '/WhatsApp Image 2026-10-07 at 3.11.15 PM (1).jpeg',
    title: 'Expansive Green Lawn & Mountain Panorama',
    tag: 'Garden View',
    description: 'Sprawling manicured lawns surrounded by tall poplars and Swat peaks'
  },
  {
    id: 'family-recreation',
    src: '/WhatsApp Image 2026-10-07 at 3.11.15 PM.jpeg',
    title: 'Family Play Area & Hillside Tents',
    tag: 'Family & Kids',
    description: 'Safe children swings, treehouse, recreation tents, and open gardens'
  },
  {
    id: 'garden-umbrella',
    src: '/unnamed (1).webp',
    title: 'Scenic Mountain Lawn with Parasols',
    tag: 'Malam Jabba View',
    description: 'Fresh mountain air with garden seating overlooking Malam Jabba slopes'
  }
];

export const HOTEL_INFO = {
  name: "IHRAM HOTEL AND RESORT",
  subname: "MALAM JABBA ROAD, SWAT",
  tagline: "Luxury Family Stay & Scenic Mountain Views near Malam Jabba",
  address: "Main Malam Jabba Road, Swat Valley, Pakistan",
  phonePrimary: "+92 319 0717774",
  phoneSecondary: "+92 333 9887544",
  whatsappNumber: "+923190717774",
  whatsappDisplay: "+92 319 0717774",
  email: "reservations@ihramhotel.com",
  checkInTime: "02:00 PM",
  checkOutTime: "12:00 PM",
  googleMapsUrl: "https://share.google/EnbQBbXCuXh0MKMNj",
  coordinates: "34.8012 N, 72.4180 E",
};

export const ROOMS: RoomType[] = [
  {
    id: "standard-family",
    name: "Standard Family Room",
    tagline: "Comfortable Family Stay & Mountain Air",
    pricePKR: 5000,
    pricePerNight: "PKR 5,000",
    image: "/images/rooms/family-room-wide.jpg",
    gallery: [
      "/images/rooms/family-room-wide.jpg",
      "/images/rooms/family-room-angle.jpg",
      "/images/rooms/family-room-beds.jpg",
      "/images/rooms/family-room-bath.jpg"
    ],
    size: "280 sq. ft",
    bedType: "3 Single Wooden Beds",
    view: "Pine & Mountain View",
    maxGuests: "3 - 4 Guests",
    features: [
      "3 Single Wooden Beds with Warm Red Rose Blankets",
      "Attached Private Washroom with 24/7 Hot Water Geyser",
      "Clean Marble Flooring, Window Curtains & Wi-Fi"
    ],
    detailedInclusions: [
      "3 authentic wooden single beds with fresh white pillows & warm floral blankets",
      "Attached private washroom with ceramic tiles, washbasin & 24/7 hot water",
      "Polished marble tiled flooring with full-length window curtains",
      "Free high-speed Wi-Fi access",
      "24/7 generator backup for uninterrupted electricity",
      "Daily room cleaning & room service"
    ],
    description: "Authentic, clean and family-friendly room featuring 3 comfortable wooden beds with warm red rose blankets, clean marble flooring, large curtained windows, and an attached tiled washroom with 24/7 hot water."
  },
  {
    id: "executive-double",
    name: "Executive Double Room",
    tagline: "Ideal for Couples & Modern Comfort",
    pricePKR: 8000,
    pricePerNight: "PKR 8,000",
    image: "/images/rooms/executive-double.jpg",
    gallery: [
      "/images/rooms/executive-double.jpg",
      "/images/rooms/family-room-angle.jpg",
      "/images/rooms/family-room-bath.jpg"
    ],
    size: "320 sq. ft",
    bedType: "1 King Bed",
    view: "Malam Jabba Valley View",
    maxGuests: "2 Adults + 1 Child",
    features: [
      "1 King Bed with Luxury Linen",
      "Sitting Lounge & Smart LED TV",
      "24/7 Hot Water & Power Backup"
    ],
    detailedInclusions: [
      "Plush King-size bed with comfortable orthopedic mattress",
      "Comfortable sitting area with tea table",
      "Attached modern tiled washroom with 24/7 hot water",
      "High-speed Wi-Fi & Smart TV with cable",
      "24/7 heavy generator power backup",
      "Direct room service from in-house kitchen"
    ],
    description: "Elegant executive room featuring plush king bedding, tea lounge seating, and panoramic vistas of the Malam Jabba valley."
  },
  {
    id: "vip-mountain-view",
    name: "VIP Mountain View Room",
    tagline: "Breathtaking Balcony Mountain Panorama",
    pricePKR: 10000,
    pricePerNight: "PKR 10,000",
    image: "/images/rooms/vip-mountain-view.jpg",
    gallery: [
      "/images/rooms/vip-mountain-view.jpg"
    ],
    size: "380 sq. ft",
    bedType: "1 King Bed + 1 Single Bed",
    view: "Direct Mountain & Peak Panorama",
    maxGuests: "3 Adults",
    features: [
      "Private Balcony with 180° Mountain Views",
      "VIP Interior & Sitting Area",
      "24/7 Hot Water & Fast Room Service"
    ],
    detailedInclusions: [
      "Private open-air balcony facing scenic Swat mountain peaks",
      "1 Master King Bed plus additional single bed",
      "Attached premium tiled bathroom with constant hot water",
      "Tea table set with fresh mountain breeze",
      "Full generator power backup around the clock",
      "Priority 24/7 in-room dining service"
    ],
    description: "VIP suite experience with private scenic balcony, luxury bedding, and unobstructed 180-degree mountain peaks scenery."
  },
  {
    id: "guest-house-suite",
    name: "Guest House Suite - 2 Rooms + TV Lounge",
    tagline: "Ultimate Large Family & Group Suite",
    pricePKR: 12000,
    pricePerNight: "PKR 12,000",
    image: "/images/rooms/guesthouse-lounge.jpg",
    images: [
      "/images/rooms/guesthouse-lounge.jpg",
      "/images/rooms/guesthouse-bedroom1.jpg",
      "/images/rooms/guesthouse-bedroom2.jpg",
      "/images/rooms/guesthouse-bathroom.jpg"
    ],
    gallery: [
      "/images/rooms/guesthouse-lounge.jpg",
      "/images/rooms/guesthouse-bedroom1.jpg",
      "/images/rooms/guesthouse-bedroom2.jpg",
      "/images/rooms/guesthouse-bathroom.jpg"
    ],
    size: "650 sq. ft",
    bedType: "2 Master Bedrooms + Living Lounge",
    view: "Panoramic Mountain & Valley View",
    maxGuests: "6 - 8 Guests",
    features: [
      "2 Separate Bedrooms + Living TV Lounge",
      "Private Dining Space for Families",
      "2 Attached Washrooms with 24/7 Hot Water"
    ],
    detailedInclusions: [
      "Two fully private bedrooms with clean double/king beds",
      "Spacious furnished living room with sofa set & LED TV",
      "Two attached modern washrooms with constant hot water",
      "Family dining table for private in-suite meals",
      "Heavy-duty generator backup for uninterrupted electricity",
      "Dedicated room service attendant for tea & dining"
    ],
    description: "Complete guest house suite with two private master bedrooms, dedicated furnished TV lounge, dining area, and 2 attached baths."
  }
];

export const AMENITIES = [
  {
    title: "24/7 Hot Water (Garam Paani)",
    subtitle: "Commercial Geysers",
    description: "Steaming hot water anytime for relaxing showers after mountain trips."
  },
  {
    title: "Heavy Generator Backup",
    subtitle: "100% Load-Shedding Free",
    description: "Continuous uninterrupted power backup for lights, TV lounge, Wi-Fi, and charging."
  },
  {
    title: "Huge Open Lawn & Garden Seating",
    subtitle: "Lush Lawn & Bonfire",
    description: "Spacious lush green lawn with outdoor chairs, traditional charpais, and evening bonfire space."
  },
  {
    title: "Family Outdoor Swimming Pool",
    subtitle: "Refreshing Lawn Pool",
    description: "On-site lawn pool setup for family and kids refreshment."
  },
  {
    title: "In-House Restaurant & BBQ",
    subtitle: "Swat Trout Fish & BBQ",
    description: "Fresh Swat river trout, chicken karahi, and delicious outdoor lawn BBQ."
  },
  {
    title: "Secure On-Site Parking & Mountain Views",
    subtitle: "Malam Jabba Road",
    description: "Ample safe parking on Malam Jabba Road with scenic mountain views."
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "river-specialties",
    category: "Swat River Specialties",
    items: [
      {
        name: "Crispy Fried Swat River Trout",
         description: "Freshly caught local river trout fried with Swati spices, served with mint chutney and hot naan.",
         pricePKR: 1950,
         isPopular: true
       },
       {
         name: "Charcoal Grilled Trout Fish",
         description: "Whole fresh river trout grilled over wood embers with lemon butter and coriander.",
         pricePKR: 2150,
         isPopular: true
       }
     ]
   },
   {
     id: "karahi-bbq",
     category: "Karahi & Live BBQ",
     items: [
       {
         name: "Shinwari Chicken Karahi (1 KG)",
         description: "Cooked with fresh tomatoes, green chilies, and pure ghee. No artificial spices.",
         pricePKR: 1850,
         isPopular: true
       },
       {
         name: "Charcoal Chicken Malai Boti",
         description: "Tender boneless chicken morsels marinated in fresh cream and mild spices.",
         pricePKR: 1100,
         isPopular: true
       }
     ]
   },
   {
     id: "breakfast-tea",
     category: "Breakfast & Tea",
     items: [
       {
         name: "Swati Desi Breakfast",
         description: "Two crispy parathas, two eggs (fried/omelette), chana masala, and doodh patti chai.",
         pricePKR: 650,
         isPopular: true
       },
       {
         name: "Peshawari Cardamom Kahwa",
         description: "Green tea brewed with whole cardamom and rock sugar.",
         pricePKR: 180,
         isPopular: true
       }
     ]
   }
 ];
 
export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dr. Tariq & Family",
    city: "Islamabad",
    stayDate: "August 2026",
    roomType: "Stayed in Guest House Suite",
    locationDetails: "Islamabad · Stayed in Guest House Suite",
    rating: 5,
    comment: "Very safe for family, easy private parking for our Prado, and the Guest House Suite was huge and comfortable for our entire family."
  },
  {
    id: "rev-2",
    author: "Kamran & Family",
    city: "Lahore",
    stayDate: "September 2026",
    roomType: "Stayed at Malam Jabba Road",
    locationDetails: "Lahore · Stayed at Malam Jabba Road",
    rating: 5,
    comment: "The large open lawn and kids pool setup kept the children happy. Uninterrupted power supply with heavy generator backup made our stay super smooth."
  },
  {
    id: "rev-3",
    author: "Shahid Khan",
    city: "Peshawar",
    stayDate: "October 2026",
    roomType: "Family Mountain Trip",
    locationDetails: "Peshawar · Family Mountain Trip",
    rating: 5,
    comment: "Perfect location right on Malam Jabba Road. Peaceful mountain views, 24/7 steaming hot water, and fresh lawn BBQ in the evening!"
  }
];
 
export interface AttractionItem {
  name: string;
  distance: string;
  description: string;
  icon: string;
}

export const NEARBY_ATTRACTIONS: AttractionItem[] = [
  {
    name: "Malam Jabba Zoo",
    distance: "5 km",
    description: "Family-friendly zoo & natural attraction nearby",
    icon: "🦁"
  },
  {
    name: "PC (Pearl Continental) Malam Jabba",
    distance: "13 km",
    description: "Luxury resort, ski spot & chairlift area",
    icon: "🏔️"
  },
  {
    name: "Mingora City",
    distance: "35 km",
    description: "Main commercial city center & market hub of Swat",
    icon: "🏙️"
  }
];

export const WHATSAPP_BASE_NUMBER = "923190717774";

export const WHATSAPP_HERO_URL =
  "https://wa.me/923190717774?text=*IHRAM%20Hotel%20%26%20Resort%20-%20General%20Inquiry*%20%F0%9F%8F%A8%0A%0AHello!%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20rates%20for%20my%20upcoming%20family%20trip%20to%20Swat.";

export const WHATSAPP_LOCATION_URL =
  "https://wa.me/923190717774?text=*IHRAM%20Hotel%20%26%20Resort%20-%20Location%20%26%20Directions*%20%F0%9F%93%8D%0A%0AHello!%20Please%20send%20me%20the%20exact%20live%20Google%20Maps%20location%20and%20driving%20directions%20for%20IHRAM%20Hotel%20on%20Malam%20Jabba%20Road.";

export const WHATSAPP_GENERAL_URL =
  "https://wa.me/923190717774?text=*IHRAM%20Hotel%20%26%20Resort*%20%F0%9F%8F%A8%0A%0AHello!%20I%20have%20a%20question%20regarding%20booking%20a%20stay%20at%20your%20resort.";

export function buildRoomBookingWhatsAppLink(
  room: { name: string; pricePKR?: number; pricePerNight?: string },
  details?: {
    guestName?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  }
): string {
  const priceDisplay = room.pricePKR
    ? room.pricePKR.toLocaleString()
    : room.pricePerNight?.replace(/[^0-9,]/g, '') || '0';

  const message = `*IHRAM HOTEL & RESORT - ROOM BOOKING* 🏨
━━━━━━━━━━━━━━━━━━━━━
🏨 *Selected Room:* ${room.name}
💰 *Rate:* PKR ${priceDisplay} / night
📍 *Location:* Main Malam Jabba Road, Swat Valley

📋 *BOOKING DETAILS:*
👤 *Guest Name:* ${details?.guestName || ''}
📅 *Check-in Date:* ${details?.checkIn || ''}
📅 *Check-out Date:* ${details?.checkOut || ''}
👥 *Total Guests:* ${details?.guests || ''}

_Please check availability for my requested dates. Thank you!_`;

  return `https://wa.me/923190717774?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppLink(params: {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  customMessage?: string;
}): string {
  const { roomName, checkIn, checkOut, guests, customMessage } = params;
  if (customMessage) {
    return `https://wa.me/923190717774?text=${encodeURIComponent(customMessage)}`;
  }
  if (roomName) {
    return buildRoomBookingWhatsAppLink(
      { name: roomName },
      { checkIn, checkOut, guests }
    );
  }
  return WHATSAPP_GENERAL_URL;
}
