export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  pricePKR: number;
  pricePerNight: string;
  originalPricePerNight?: string;
  discountBadge?: string;
  promoTag?: string;
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
  address: "Main Malam Jabba Road, Swat, Pakistan",
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
    id: "single-bed-standard",
    name: "Standard Single Bed Room",
    tagline: "Cozy & Budget-Friendly Stay with Mountain Air",
    pricePKR: 3000,
    pricePerNight: "PKR 3,000",
    image: "https://i.postimg.cc/Y9XwSYcQ/Whats-App-Image-2026-10-11-at-12-37-18-PM.jpg",
    images: [
      "https://i.postimg.cc/Y9XwSYcQ/Whats-App-Image-2026-10-11-at-12-37-18-PM.jpg",
      "https://i.postimg.cc/RFPz0KrN/Whats-App-Image-2026-10-11-at-12-37-18-PM-(1).jpg",
      "https://i.postimg.cc/1tWZzwxN/Whats-App-Image-2026-10-11-at-12-37-18-PM-(2).jpg",
      "https://i.postimg.cc/3RLHwmMg/Whats-App-Image-2026-10-11-at-12-37-19-PM.jpg"
    ],
    gallery: [
      "https://i.postimg.cc/Y9XwSYcQ/Whats-App-Image-2026-10-11-at-12-37-18-PM.jpg",
      "https://i.postimg.cc/RFPz0KrN/Whats-App-Image-2026-10-11-at-12-37-18-PM-(1).jpg",
      "https://i.postimg.cc/1tWZzwxN/Whats-App-Image-2026-10-11-at-12-37-18-PM-(2).jpg",
      "https://i.postimg.cc/3RLHwmMg/Whats-App-Image-2026-10-11-at-12-37-19-PM.jpg"
    ],
    size: "250 sq. ft",
    bedType: "1 Comfortable Single Bed",
    view: "Peaceful Neighborhood & Valley Breeze",
    maxGuests: "1 - 2 Guests",
    features: [
      "Cozy Single Bed with Fresh Linens & Warm Blanket",
      "Attached Private Washroom with 24/7 Hot Water",
      "Budget-Friendly Stay with High-Speed Wi-Fi"
    ],
    detailedInclusions: [
      "Comfortable single bed setup with clean pillows and warm bedding",
      "Attached private bathroom with running hot and cold water",
      "Quiet environment with great ventilation and natural light",
      "Free Wi-Fi access and 24/7 power backup",
      "Daily room cleaning service"
    ],
    description: "A cozy, affordable, and comfortable single bed room designed for solo travelers or budget visitors looking for a clean and peaceful stay in Swat."
  },
 {
  id: "standard-family",
  name: "Standard Family Room",
  tagline: "Comfortable Family Stay & Mountain Air",
  pricePKR: 5000,
  pricePerNight: "PKR 5,000",
  image: "https://i.postimg.cc/0NzVRSkb/Whats-App-Image-2026-10-07-at-3-10-18-PM.jpg",
  images: [
    "https://i.postimg.cc/0NzVRSkb/Whats-App-Image-2026-10-07-at-3-10-18-PM.jpg",
    "https://i.postimg.cc/KY10STGF/Whats-App-Image-2026-10-07-at-3-10-18-PM-(1).jpg",
    "https://i.postimg.cc/ZqWwtNbR/Whats-App-Image-2026-10-07-at-3-10-19-PM.jpg"
  ],
  gallery: [
    "https://i.postimg.cc/0NzVRSkb/Whats-App-Image-2026-10-07-at-3-10-18-PM.jpg",
    "https://i.postimg.cc/KY10STGF/Whats-App-Image-2026-10-07-at-3-10-18-PM-(1).jpg",
    "https://i.postimg.cc/ZqWwtNbR/Whats-App-Image-2026-10-07-at-3-10-19-PM.jpg"
  ],
  size: "280 sq. ft",
  bedType: "3 Single Wooden Beds",
  view: "Pine & Mountain View",
  maxGuests: "3 - 4 Guests",
  features: [
    "3 Single Wooden Beds with Warm Red Rose Blankets",
    "Attached Private Bathroom with Electric Geyser & 24/7 Hot Water",
    "Clean Marble Flooring, Window Curtains & Wi-Fi"
  ],
  detailedInclusions: [
    "3 authentic wooden single beds with fresh white pillows & warm floral blankets",
    "Attached private bathroom equipped with electric geyser for 24/7 hot water",
    "Polished marble tiled flooring with full-length window curtains",
    "Free high-speed Wi-Fi access",
    "24/7 generator backup for uninterrupted electricity",
    "Daily room cleaning & room service"
  ],
  description: "Authentic, clean and family-friendly room featuring 3 comfortable wooden beds with warm bedding, attached bathroom with electric geyser, and peaceful mountain atmosphere."
},
{
  id: "deluxe-mountain-view",
  name: "Deluxe Mountain View Room",
  tagline: "Spacious Room with Stunning Sunshine & Mountain Windows",
  pricePKR: 7000,
  pricePerNight: "PKR 7,000",
  originalPricePerNight: "PKR 7,778",
  discountBadge: "10% OFF",
  promoTag: "🔥 Limited Time Offer - 10% OFF",
  image: "https://i.postimg.cc/WbQGFyjf/Whats-App-Image-2026-10-07-at-3-05-36-PM.jpg",
  images: [
    "https://i.postimg.cc/WbQGFyjf/Whats-App-Image-2026-10-07-at-3-05-36-PM.jpg",
    "https://i.postimg.cc/jdGHw1KZ/Whats-App-Image-2026-10-07-at-3-05-36-PM-(1).jpg",
    "https://i.postimg.cc/hPHLzYgy/Whats-App-Image-2026-10-07-at-3-05-37-PM.jpg"
  ],
  gallery: [
    "https://i.postimg.cc/WbQGFyjf/Whats-App-Image-2026-10-07-at-3-05-36-PM.jpg",
    "https://i.postimg.cc/jdGHw1KZ/Whats-App-Image-2026-10-07-at-3-05-36-PM-(1).jpg",
    "https://i.postimg.cc/hPHLzYgy/Whats-App-Image-2026-10-07-at-3-05-37-PM.jpg"
  ],
  size: "350 sq. ft",
  bedType: "1 King Bed + Cozy Sitting Area",
  view: "Direct Sunshine & Mountain View Windows",
  maxGuests: "2 - 3 Guests",
  features: [
    "Large Sun-Kissed Windows with Mountain Panorama",
    "Comfortable Double Bed with Warm Bedding",
    "Attached Private Bathroom with Electric Geyser & 24/7 Hot Water"
  ],
  detailedInclusions: [
    "Expansive large windows bringing in natural morning sunlight and valley views",
    "Premium double bed with warm floral blankets and clean pillows",
    "Attached private bathroom equipped with electric geyser for 24/7 hot water",
    "Cozy sofa seating arrangement and elegant room decor",
    "Uninterrupted power backup with heavy generators",
    "High-speed Wi-Fi and 24/7 room service"
  ],
  description: "A gorgeous deluxe room featuring large windows flooded with natural mountain sunlight, traditional rug flooring, cozy seating area, and comfortable double bed with attached bathroom and electric geyser for a peaceful stay in Swat."
},
  {
  id: "vip-mountain-view",
  name: "VIP Mountain View Room",
  tagline: "Breathtaking Balcony Mountain Panorama",
  pricePKR: 10000,
  pricePerNight: "PKR 10,000",
  originalPricePerNight: "PKR 12,500",
  discountBadge: "20% OFF",
  promoTag: "⭐ Special VIP Deal - 20% OFF",
  image: "https://i.postimg.cc/YSK77BGq/Whats-App-Image-2026-10-07-at-3-08-05-PM.jpg",
  images: [
    "https://i.postimg.cc/YSK77BGq/Whats-App-Image-2026-10-07-at-3-08-05-PM.jpg",
    "https://i.postimg.cc/yN4KKCgd/Whats-App-Image-2026-10-07-at-3-08-06-PM.jpg",
    "https://i.postimg.cc/PqsHHnpq/Whats-App-Image-2026-10-07-at-3-08-06-PM-(1).jpg",
    "https://i.postimg.cc/HLDmm1cj/Whats-App-Image-2026-10-07-at-3-08-07-PM.jpg",
    "https://i.postimg.cc/LsKSSFY5/Whats-App-Image-2026-10-07-at-3-08-07-PM-(1).jpg",
    "https://i.postimg.cc/43TDMvqB/Whats-App-Image-2026-10-07-at-3-13-06-PM.jpg"
  ],
  gallery: [
    "https://i.postimg.cc/YSK77BGq/Whats-App-Image-2026-10-07-at-3-08-05-PM.jpg",
    "https://i.postimg.cc/yN4KKCgd/Whats-App-Image-2026-10-07-at-3-08-06-PM.jpg",
    "https://i.postimg.cc/PqsHHnpq/Whats-App-Image-2026-10-07-at-3-08-06-PM-(1).jpg",
    "https://i.postimg.cc/HLDmm1cj/Whats-App-Image-2026-10-07-at-3-08-07-PM.jpg",
    "https://i.postimg.cc/LsKSSFY5/Whats-App-Image-2026-10-07-at-3-08-07-PM-(1).jpg",
    "https://i.postimg.cc/43TDMvqB/Whats-App-Image-2026-10-07-at-3-13-06-PM.jpg"
  ],
  size: "380 sq. ft",
  bedType: "1 King Bed + 1 Single Bed",
  view: "Direct Mountain & Peak Panorama",
  maxGuests: "3 Adults",
  features: [
    "Private Balcony with 180° Mountain Views",
    "VIP Interior & Sitting Area",
    "Attached Private Bathroom with Electric Geyser & 24/7 Hot Water"
  ],
  detailedInclusions: [
    "Private open-air balcony facing scenic Swat mountain peaks",
    "1 Master King Bed plus additional single bed",
    "Attached premium tiled bathroom equipped with electric geyser for constant hot water",
    "Tea table set with fresh mountain breeze",
    "Full generator power backup around the clock",
    "Priority 24/7 in-room dining service"
  ],
  description: "VIP suite experience with private scenic balcony, luxury bedding, attached private bathroom with electric geyser, and unobstructed mountain views across Swat Valley."
},
 {
  id: "guest-house-suite",
  name: "Guest House Suite - 2 Rooms + TV Lounge",
  tagline: "Ultimate Large Family & Group Suite",
  pricePKR: 12000,
  pricePerNight: "PKR 12,000",
  image: "https://i.postimg.cc/jdmRS7w6/guesthouse-1-jpg.jpg",
  images: [
    "https://i.postimg.cc/jdmRS7w6/guesthouse-1-jpg.jpg",
    "https://i.postimg.cc/g2hmX239/guesthouse-2-jpg.jpg",
    "https://i.postimg.cc/P5DTp5YB/guesthouse-3-jpg.jpg",
    "https://i.postimg.cc/Cx8SBxk3/guesthouse-4-jpg.jpg",
    "https://i.postimg.cc/kgSq6gKL/guesthouse-5-jpg.jpg",
    "https://i.postimg.cc/mg9Bzg7b/guesthouse-6-jpg.jpg",
    "https://i.postimg.cc/mg9Bzg7Z/guesthouse-7-jpg.jpg",
    "https://i.postimg.cc/52zbY28t/guesthouse-8-jpg.jpg"
  ],
  gallery: [
    "https://i.postimg.cc/jdmRS7w6/guesthouse-1-jpg.jpg",
    "https://i.postimg.cc/g2hmX239/guesthouse-2-jpg.jpg",
    "https://i.postimg.cc/P5DTp5YB/guesthouse-3-jpg.jpg",
    "https://i.postimg.cc/Cx8SBxk3/guesthouse-4-jpg.jpg",
    "https://i.postimg.cc/kgSq6gKL/guesthouse-5-jpg.jpg",
    "https://i.postimg.cc/mg9Bzg7b/guesthouse-6-jpg.jpg",
    "https://i.postimg.cc/mg9Bzg7Z/guesthouse-7-jpg.jpg",
    "https://i.postimg.cc/52zbY28t/guesthouse-8-jpg.jpg"
  ],
  size: "650 sq. ft",
  bedType: "2 Master Bedrooms + Living Lounge",
  view: "Panoramic Mountain & Valley View",
  maxGuests: "6 - 8 Guests",
  features: [
    "2 Separate Bedrooms + Living TV Lounge",
    "Private Dining Space for Families",
    "2 Attached Private Bathrooms with Electric Geysers & 24/7 Hot Water"
  ],
  detailedInclusions: [
    "Two fully private bedrooms with clean double/king beds",
    "Spacious furnished living room with sofa set & LED TV",
    "Two attached modern washrooms equipped with electric geysers for constant hot water",
    "Family dining table for private in-suite meals",
    "Heavy-duty generator backup for uninterrupted electricity",
    "Dedicated room service attendant for tea & dining"
  ],
  description: "Complete guest house suite with two private master bedrooms, dedicated furnished TV lounge, private kitchen space, and two modern attached washrooms with electric geysers. Ideal for large families visiting Malam Jabba and Swat Valley."
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
    author: "Itx mazhar Khanx",
    city: "Holiday | Family",
    stayDate: "",
    roomType: "",
    locationDetails: "Holiday | Family",
    rating: 5,
    comment: "Such a good & peaceful place for family and friends. Recently we are visit to the hotel it's luxury Vip rooms and good staff and delicious foods. and super view with garden. I recommend to visit malamjabba and Ihram hotel."
  },
  {
    id: "rev-2",
    author: "Junaid Khan",
    city: "Holiday | Family",
    stayDate: "",
    roomType: "",
    locationDetails: "Holiday | Family",
    rating: 5,
    comment: "The Most beautiful hotel and restaurant near malam jabba and a place where you can find relaxation and peace of mind.I really enjoyed my trip in this hotel as well as the owner welcomed us with traditional pashtoon hospitality.The mesmerising view from the balcony of the hotel is very breathtaking.If you are looking for a hotel and restaurant near malam jabba then this hotel is your destination.Thanks to Mr.Sajid Ali Khan for his efforts to provide such amazing services to the tourists.❤️"
  },
  {
    id: "rev-3",
    author: "Zaheer Chiragh",
    city: "Holiday | Family",
    stayDate: "",
    roomType: "",
    locationDetails: "Holiday | Family",
    rating: 5,
    comment: "I had a fantastic experience at this hotel and would highly recommend it to anyone looking for a peaceful and enjoyable getaway. The location is simply wonderful, surrounded by scenic beauty that makes it perfect for relaxing and unwinding. The hotel is very kid-friendly, with plenty of amenities and activities to keep the little ones entertained, which made our family stay all the more enjoyable. The atmosphere was serene and quiet, offering a perfect escape from the hustle and bustle of daily life. In terms of value for money, this place exceeded expectations. The overall experience, combined with the excellent facilities and welcoming staff, made it worth every penny. I would highly recommend this hotel to families, couples, or anyone looking for a memorable and peaceful stay."
  },
  {
    id: "rev-4",
    author: "Muhammad Bilal",
    city: "Holiday | Family",
    stayDate: "",
    roomType: "",
    locationDetails: "Holiday | Family",
    rating: 5,
    comment: "Went from Lahore to Ihram Hotel, Malam Jabba in one go and reached at 9PM. It was a blind shot as we never visited there before, but it went out our best decision. The place is in itself a peaceful mountain spot where a family can stay, have fun, explore nature and relax. Worth mentioning Hazrat Ali (hotel manager cum coordinator cum cook) was really supportive. We stayed there in around 5k/night which includes mattress. Food was also decent. Though, we picked chapalli kabab from near market which were out of this world (fresh, tasty, crispy and full of flavour). Must revisit place, specially for families."
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
