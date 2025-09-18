export interface Tour {
  id: string
  title: string
  duration: string
  description: string
  highlights: string[]
  price: number
  priceNote?: string
  inclusions: string[]
  exclusions: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  category: "lodge" | "camping"
  slug: string
}

export const lodgeSafaris: Tour[] = [
  {
    id: "lodge-1",
    title: "3 Days / 2 Night Classic Safari",
    duration: "3 Days / 2 Nights",
    description:
      "Experience two of Tanzania's most iconic parks: Serengeti National Park and the Ngorongoro Crater in luxury lodge accommodations.",
    highlights: [
      "Serengeti National Park game drives",
      "Ngorongoro Crater UNESCO World Heritage Site",
      "Big Five wildlife viewing",
      "Great Migration (seasonal)",
      "Luxury lodge accommodations",
    ],
    price: 1400,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "All accommodations per itinerary",
      "All meals per itinerary",
      "All tours and entrance fees per itinerary",
      "All transportation and transfers per itinerary",
      "Professional English-speaking naturalist driver/guide",
      "Transportation in a custom safari 4x4 with viewing roof",
      "Guaranteed window seating",
      "Electric cooler and filtered water",
    ],
    exclusions: [
      "International and domestic flights",
      "Meals not listed",
      "Tips for guides, drivers, and hotel staff",
      "Optional tours (Olduvai Gorge and Maasai Village visits)",
      "Personal expenses (visas, airport taxes, internet, etc.)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Serengeti Game Drive",
        description:
          'Arrival and game drive in Serengeti National Park, known for its vast plains and diverse wildlife, including the "Big Five". You may also see the Great Migration, depending on the season.',
      },
      {
        day: 2,
        title: "Serengeti to Ngorongoro",
        description:
          "Morning game drive in the Serengeti, followed by a transfer to the Ngorongoro Crater for a thrilling game drive within the caldera, a UNESCO World Heritage Site.",
      },
      {
        day: 3,
        title: "Final Crater Drive & Return",
        description: "A final morning game drive in the Ngorongoro Crater before returning to Arusha or Moshi.",
      },
    ],
    category: "lodge",
    slug: "3-days-classic-safari",
  },
  {
    id: "lodge-2",
    title: "4 Days / 3 Night Fly-in Fly-out Safari",
    duration: "4 Days / 3 Nights",
    description:
      "Efficient travel option flying between destinations to maximize game drive time. Covers Central Serengeti, Ngorongoro Crater, and Tarangire National Park.",
    highlights: [
      "Fly-in fly-out convenience",
      "Central Serengeti exploration",
      "Ngorongoro Crater descent",
      "Tarangire baobab trees and elephants",
      "Maximum game viewing time",
    ],
    price: 2300,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "All Park entrances & taxes",
      "Accommodation during the safari on a full-board basis (breakfast, lunch, and dinner)",
      "Domestic flights as per itinerary",
      "Professional English-speaking guide",
      "4x4 safari vehicle with pop-up roof",
      "All transportation and transfers per itinerary",
      "Communications radio and electric cooler",
      "Filtered water during game drives",
    ],
    exclusions: [
      "Tips for guides",
      "International flights",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Visa fees",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Central Serengeti",
        description:
          'Fly from Zanzibar to Seronera Airstrip in Central Serengeti. Enjoy a game drive in the Serengeti National Park, a UNESCO World Heritage Site famous for the "Big Five" and the Great Migration. Overnight at a tented lodge.',
      },
      {
        day: 2,
        title: "Full Day Central Serengeti",
        description:
          "A full day of game drives in Central Serengeti, exploring the park's diverse ecosystems and spotting a wide variety of wildlife and bird species.",
      },
      {
        day: 3,
        title: "Ngorongoro Crater Adventure",
        description:
          "After breakfast, you will head to the Ngorongoro Crater. Descend 600m into the crater for a full-day game drive, where you can see a high concentration of animals, including the endangered black rhino.",
      },
      {
        day: 4,
        title: "Tarangire & Return Flight",
        description:
          "Drive to Tarangire National Park, known for its ancient baobab trees and large elephant population. Enjoy a game drive before being transferred to Arusha Airport for your flight back to Zanzibar.",
      },
    ],
    category: "lodge",
    slug: "4-days-fly-in-safari",
  },
  {
    id: "lodge-3",
    title: "5-Days / 4 Night Wildebeest Migration & Lake Natron",
    duration: "5 Days / 4 Nights",
    description:
      "This adventure is designed to immerse you in the spectacle of the Great Migration and the unique landscapes of Lake Natron with luxury accommodations.",
    highlights: [
      "Great Wildebeest Migration viewing",
      "Lake Natron flamingo colonies",
      "Northern Serengeti exploration",
      "Ngorongoro Crater Big Five",
      "Migration tracking experience",
    ],
    price: 2422,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "All accommodations per itinerary",
      "All meals per itinerary (breakfast, lunch, and dinner)",
      "All tours and entrance fees per itinerary",
      "All transportation and transfers per itinerary",
      "Professional English-speaking naturalist driver/guide",
      "Transportation in a custom safari 4x4 with viewing roof",
      "Guaranteed window seating and communications radio",
      "Electric cooler and filtered water",
    ],
    exclusions: [
      "International and domestic flights",
      "Meals not listed",
      "Tips for guides, drivers, and hotel staff",
      "Optional tours and activities",
      "Personal expenses (visas, airport taxes, internet, etc.)",
      "Travel insurance and medical expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Lake Natron",
        description:
          "Fly from Zanzibar to Arusha. Upon arrival, drive to Lake Natron for a game drive, where you can see millions of flamingos and other wildlife.",
      },
      {
        day: 2,
        title: "Northern Serengeti Migration",
        description:
          "Journey to the Northern Serengeti National Park for a full-day game drive focused on witnessing the Great Wildebeest Migration.",
      },
      {
        day: 3,
        title: "Migration Tracking",
        description:
          "Another full day of exploration in Northern Serengeti, tracking the migrating herds and their predators.",
      },
      {
        day: 4,
        title: "Ngorongoro Highlands",
        description:
          "Continue game drives in the Serengeti before traveling to the Ngorongoro Highlands for a tranquil overnight stay.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater Finale",
        description:
          'Descend into the world-famous Ngorongoro Crater for a full-day game drive, aiming to spot the "Big Five" in this natural wonder. Afterward, ascend from the crater and return to your lodge.',
      },
    ],
    category: "lodge",
    slug: "5-days-migration-natron",
  },
  {
    id: "lodge-4",
    title: "5 Days / 4 Night Experience of Tanzania",
    duration: "5 Days / 4 Nights",
    description:
      "This comprehensive tour takes you to some of Tanzania's most famous northern circuit parks: Tarangire, Serengeti, and Ngorongoro with luxury lodge accommodations.",
    highlights: [
      "Tarangire baobab trees and elephants",
      "Serengeti endless plains",
      "Ngorongoro Crater caldera",
      "Northern circuit highlights",
      "Luxury lodge accommodations",
    ],
    price: 2350,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "All accommodations per itinerary",
      "All meals per itinerary (breakfast, lunch, and dinner)",
      "All tours and entrance fees per itinerary (unless listed as excluded)",
      "All transportation and transfers per itinerary",
      "Professional English-speaking naturalist driver/guide",
      "Transportation in a custom safari 4x4 with viewing roof",
      "Guaranteed window seating and communications radio",
      "Electric cooler and filtered water",
    ],
    exclusions: [
      "International and domestic flights",
      "Meals not listed",
      "Tips for guides, drivers, and hotel staff",
      "Optional tours (Olduvai Gorge and Maasai Village visits)",
      "Personal expenses (visas, airport taxes, internet, etc.)",
      "Travel insurance and medical expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        description:
          "Drive from Arusha to Tarangire National Park. Enjoy a game drive to see its famous baobab trees, large elephant herds, and a variety of birds.",
      },
      {
        day: 2,
        title: "Tarangire to Serengeti",
        description:
          "Early morning departure to Serengeti National Park, game viewing en route. Arrive in time for lunch and an afternoon game drive.",
      },
      {
        day: 3,
        title: "Full Day Serengeti",
        description:
          "A full day dedicated to game drives in the vast Serengeti National Park, exploring its endless plains.",
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro",
        description:
          "Morning game drive in the Serengeti, then transfer to the Ngorongoro Crater Rim. The day concludes with dinner and an overnight stay at a lodge.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater & Return",
        description:
          "Descend into the Ngorongoro Crater for a full-day game drive on the caldera floor before driving back to Arusha.",
      },
    ],
    category: "lodge",
    slug: "5-days-tanzania-experience",
  },
  {
    id: "lodge-5",
    title: "6 Days / 5 Night Tanzania Safari, Culture, Materuni Waterfalls Coffee Tour",
    duration: "6 Days / 5 Nights",
    description:
      "This is an extensive tour combining classic wildlife safaris with cultural and natural excursions. It covers Tarangire, Serengeti, Ngorongoro, Lake Manyara, and the Materuni Waterfalls.",
    highlights: [
      "Wildlife safari experience",
      "Cultural Maasai village visit",
      "Materuni Waterfalls hike",
      "Traditional coffee tour",
      "Lake Manyara flamingos",
      "Chagga cultural experience",
    ],
    price: 2689,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "All Park entrances & taxes",
      "Accommodation during the safari on full-board basis",
      "All meals (breakfast, lunch, and dinner), soft drinks & water",
      "Camping equipment (sleeping bag, sleeping mattress & tent)",
      "Transportation in a custom safari 4x4 with a viewing roof",
      "Guaranteed window seating",
      "Professional English-speaking guide",
      "Cultural activities and Materuni Waterfalls tour",
    ],
    exclusions: [
      "Tips for guides",
      "International flights",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Visa fees",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        description:
          "Drive from Arusha to Tarangire National Park for a game drive, focusing on elephants and baobab trees. Overnight near Mto Wa Mbu.",
      },
      {
        day: 2,
        title: "Serengeti & Maasai Culture",
        description:
          "Drive to Serengeti National Park, with an optional visit to a Maasai village. Enjoy an afternoon game drive in Central Serengeti (Seronera) and overnight at a campsite.",
      },
      {
        day: 3,
        title: "Serengeti to Ngorongoro",
        description:
          "Early morning game drive in the Serengeti, then a game drive en route to the Ngorongoro Conservation Area for overnight camping.",
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description:
          "Descend into the Ngorongoro Crater for a half-day game drive. Afterward, drive to Mto Wa Mbu for dinner and an overnight stay.",
      },
      {
        day: 5,
        title: "Lake Manyara National Park",
        description:
          "Game drive in Lake Manyara National Park, famous for its large number of flamingos, hippo pool, and hot springs.",
      },
      {
        day: 6,
        title: "Materuni Waterfalls & Coffee Tour",
        description:
          "Travel to Materuni Village for a hike to the Materuni Waterfalls and a traditional Chagga lunch. The day concludes with a coffee tour where you'll learn about cultivation and processing before returning to your location.",
      },
    ],
    category: "lodge",
    slug: "6-days-safari-culture-materuni",
  },
  {
    id: "lodge-6",
    title: "Day Trip Ngorongoro Crater",
    duration: "1 Day",
    description:
      "Single-day excursion to the Ngorongoro Crater, ideal for those with limited time who want to experience this natural wonder.",
    highlights: [
      "Ngorongoro Crater descent",
      "Big Five wildlife viewing",
      "UNESCO World Heritage Site",
      "Picnic lunch in crater",
      "Day trip convenience",
    ],
    price: 350,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "Park Fees (for Non-Residents)",
      "Concession/Camping Fees",
      "Daily game drives while on Safari",
      "A professional driver/guide",
      "4x4 Land Cruiser vehicle",
      "All Taxes and VAT",
      "Meals as per itinerary",
    ],
    exclusions: [
      "International flights",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
      "Tips",
      "Personal Items (souvenirs, travel insurance, visa fees, etc.)",
      "Government-imposed increases of taxes and/or park fees",
      "Any activities not mentioned in the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ngorongoro Crater Day Trip",
        description:
          'Early pickup from your hotel in Arusha. After a scenic drive to the Ngorongoro Conservation Area, descend into the crater for a day of game viewing. Spot the "Big Five" and enjoy a picnic lunch. Ascend the crater and return to Arusha in the afternoon.',
      },
    ],
    category: "lodge",
    slug: "day-trip-ngorongoro-crater",
  },
]

export const campingSafaris: Tour[] = [
  {
    id: "camping-1",
    title: "3 Days / 2 Nights Camping Safari",
    duration: "3 Days / 2 Nights",
    description:
      "This safari provides a classic camping experience, focusing on two of Tanzania's most iconic wildlife areas: Tarangire National Park and the Ngorongoro Crater.",
    highlights: [
      "Tarangire elephant populations",
      "Iconic baobab trees",
      "Ngorongoro Crater Big Five",
      "Authentic camping experience",
      "Hippo pool picnic lunch",
    ],
    price: 1050,
    priceNote:
      "Valid from January 1, 2025, to December 30, 2026. Children aged 1-5 sharing room and bed with parents are free.",
    inclusions: [
      "4x4 safari vehicle with a pop-up roof",
      "Professional safari guide",
      "All park fees and camping fees",
      "All meals during the safari (breakfast, lunch, and dinner)",
      "All transportation and transfers per itinerary",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Filtered water during game drives",
      "Game drives as per itinerary",
    ],
    exclusions: [
      "International and domestic flights",
      "Personal expenses (tips, drinks, souvenirs)",
      "Travel insurance",
      "Visa fees",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
      "Optional activities not mentioned in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tarangire National Park",
        description:
          "Your adventure begins with a morning departure from Arusha or Moshi to Tarangire National Park. Enjoy a full-day game drive to see vast elephant populations, majestic baobab trees, and diverse wildlife such as lions, leopards, zebras, and giraffes. In the evening, you'll head to a campsite for dinner and an overnight stay under the African sky.",
      },
      {
        day: 2,
        title: "Ngorongoro Crater",
        description:
          "After an early breakfast, you'll drive to the Ngorongoro Conservation Area and descend into the world-famous Ngorongoro Crater. Explore the crater floor, which is home to an incredible concentration of wildlife, including the Big Five (lion, elephant, buffalo, rhino, and leopard). Enjoy a picnic lunch at a scenic spot near a hippo pool before continuing with more game viewing. In the late afternoon, you'll ascend from the crater and head to your campsite for dinner and overnight.",
      },
      {
        day: 3,
        title: "Return to Arusha/Moshi",
        description:
          "Wake up to the sounds of nature and enjoy a relaxed breakfast. Depending on your itinerary, you may take a short nature walk or visit a Maasai village for a cultural experience. Afterward, you'll begin your journey back to Arusha or Moshi, where your safari ends.",
      },
    ],
    category: "camping",
    slug: "3-days-camping-safari",
  },
  {
    id: "camping-2",
    title: "4 Days / 3 Nights Tanzania Affordable Camping Safari",
    duration: "4 Days / 3 Nights",
    description:
      "This budget-friendly camping safari takes you to the heart of the Serengeti and the stunning Ngorongoro Crater, offering a true immersion in nature.",
    highlights: [
      "Central Serengeti exploration",
      "Great Migration route (seasonal)",
      "Nyani Public Campsite",
      "Simba Campsite crater rim views",
      "Budget-friendly adventure",
    ],
    price: 1200,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "Park fees and camping fees",
      "4x4 safari vehicle with pop-up roof",
      "Professional English-speaking guide",
      "All meals during the safari (breakfast, lunch, and dinner)",
      "All transportation and transfers per itinerary",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Game drives as per itinerary",
      "Filtered water during game drives",
    ],
    exclusions: [
      "International flights",
      "Personal expenses (tips, drinks, souvenirs)",
      "Travel insurance",
      "Visa fees",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
      "Optional activities not mentioned in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Serengeti National Park",
        description:
          "Your adventure begins with an early morning departure from Arusha. Along the way, you'll pass through the Ngorongoro Conservation Area, where you may spot Maasai herders. Enjoy a game drive en route to your campsite in the central Serengeti (Seronera area), known for its rich wildlife. The day ends with dinner and an overnight stay at Nyani Public Campsite.",
      },
      {
        day: 2,
        title: "Full Day in Serengeti National Park",
        description:
          "Spend the entire day exploring the Serengeti's diverse landscapes. You can follow the great migration route if it's the season, or focus on spotting the Big Five. The central Serengeti is home to large prides of lions, cheetahs on the hunt, and leopards lounging in acacia trees. You'll enjoy a picnic lunch in the bush before returning to your campsite for dinner and overnight.",
      },
      {
        day: 3,
        title: "Serengeti to Ngorongoro Conservation Area",
        description:
          "After breakfast, enjoy a final game drive in the Serengeti as you make your way toward the Ngorongoro Conservation Area. You'll arrive at Simba Campsite, perched on the crater rim with stunning views into the Ngorongoro Crater. Dinner is served at the campsite, where you'll spend the night.",
      },
      {
        day: 4,
        title: "Ngorongoro Crater Tour – Return to Arusha",
        description:
          "This is the highlight of the safari—an early descent into the Ngorongoro Crater, a UNESCO World Heritage Site. Expect to see elephants, hippos, zebras, wildebeest, lions, hyenas, and possibly a rare black rhino. After a picnic lunch, you'll ascend the crater wall and begin your drive back to Arusha, concluding your unforgettable safari experience.",
      },
    ],
    category: "camping",
    slug: "4-days-affordable-camping",
  },
  {
    id: "camping-3",
    title: "5 Days / 4 Nights Safari Budget Camping in Tanzania",
    duration: "5 Days / 4 Nights",
    description:
      "This camping safari provides a comprehensive exploration of Tanzania's most famous parks: Tarangire, Serengeti, and Ngorongoro.",
    highlights: [
      "Three iconic parks coverage",
      "Flexible game drive options",
      "Optional Maasai community visit",
      "Lake Magadi flamingo sightings",
      "Comprehensive wildlife experience",
    ],
    price: 1700,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "Park fees and camping fees",
      "4x4 safari vehicle with a pop-up roof for game viewing",
      "Professional English-speaking guide",
      "All meals during the safari (breakfast, lunch, and dinner)",
      "All transportation and transfers per itinerary",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Game drives as per itinerary",
      "Filtered water during game drives",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses (tips, drinks, souvenirs)",
      "Visa fees",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
      "Optional activities (Maasai village visit - $20 per person)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description:
          "Depart from Arusha and drive to Tarangire National Park. Enjoy a game drive to see elephants, giraffes, lions, and many bird species. Evening: Set up camp at Mto Wa Mbu for dinner and an overnight stay in tents.",
      },
      {
        day: 2,
        title: "Tarangire to Serengeti National Park",
        description:
          "Early breakfast and a short game drive as you exit Tarangire. Drive toward Serengeti National Park, stopping for lunch. Explore the Serengeti with a game drive en route to your campsite. Evening: Set up camp, enjoy dinner, and an overnight stay under the stars.",
      },
      {
        day: 3,
        title: "Full Day in Serengeti National Park",
        description:
          "Early morning game drive to witness the Serengeti's wildlife, including the Big Five. The day's plan can be flexible based on your driver's recommendation—you can return to the camp for a hot lunch or take a packed lunch for a full-day game drive. Evening: Return to the camp for dinner and overnight.",
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro Conservation Area",
        description:
          "Enjoy a game drive as you leave the Serengeti. Optional visit to a Maasai community for an additional $20 per person. Evening: Set up camp on the crater rim, where you will have dinner and an overnight stay.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater Tour and Return to Arusha",
        description:
          "Early descent into the Ngorongoro Crater for a game drive. Visit Lake Magadi for flamingo sightings and the chance to spot black rhinos. Enjoy a picnic lunch by the hippo pool. Ascend from the crater and begin the drive back to Arusha, with time arranged to accommodate any flights.",
      },
    ],
    category: "camping",
    slug: "5-days-budget-camping",
  },
  {
    id: "camping-4",
    title: "6 Days / 5 Nights Camping Safari Experience",
    duration: "6 Days / 5 Nights",
    description:
      "This extended camping safari covers four key parks in Tanzania's northern circuit: Tarangire, Serengeti, Ngorongoro, and Lake Manyara.",
    highlights: [
      "Four northern circuit parks",
      "Baobab trees and elephants",
      "Great Migration viewing (seasonal)",
      "Olduvai Gorge archaeological site",
      "Tree-climbing lions at Manyara",
    ],
    price: 1980,
    priceNote: "Valid from January 1, 2025, to December 30, 2026",
    inclusions: [
      "All park entrances and taxes",
      "4x4 safari vehicle with pop-up roof",
      "Professional English-speaking guide",
      "All meals during the safari (breakfast, lunch, and dinner)",
      "All transportation and transfers per itinerary",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Game drives as per itinerary",
      "Filtered water during game drives",
    ],
    exclusions: [
      "Tips for the guide",
      "International flights",
      "Personal expenses (tips, drinks, souvenirs)",
      "Travel insurance",
      "Visa fees",
      "Airport transfers (unless mentioned otherwise)",
      "Additional accommodation before and at the end of the tour",
      "Optional activities not mentioned in itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description:
          "Your adventure begins with a journey from Arusha to Tarangire National Park, known for its iconic baobab trees and large elephant populations. Enjoy a game drive to spot lions, giraffes, buffaloes, and countless bird species. In the evening, you'll head to a campsite within or near the park.",
      },
      {
        day: 2,
        title: "Tarangire to Serengeti National Park",
        description:
          "After breakfast, the safari continues toward the world-famous Serengeti. The route takes you through the Ngorongoro highlands, with game viewing opportunities along the way. You'll go on an afternoon game drive across the vast plains and spend the night at a campsite within the park.",
      },
      {
        day: 3,
        title: "Full Day in Serengeti National Park",
        description:
          "A full day is dedicated to exploring the Serengeti's diverse habitats. You'll have excellent chances to see the Big Five and, depending on the season, witness the Great Migration. In the evening, you'll return to your campsite under the starlit African sky.",
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro Conservation Area",
        description:
          "You'll start with a game drive as you leave the Serengeti behind. The journey continues to the Ngorongoro Conservation Area, a UNESCO World Heritage Site. If you like, you can stop at Olduvai Gorge, a significant archaeological site. You'll arrive at your campsite located on the crater rim.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater to Lake Manyara Area",
        description:
          "This day begins with a descent into the Ngorongoro Crater, one of Africa's most spectacular wildlife areas. After a game drive and lunch, you'll drive to the Lake Manyara area and set up camp.",
      },
      {
        day: 6,
        title: "Lake Manyara National Park to Arusha",
        description:
          "The final day takes you into Lake Manyara National Park, famous for its tree-climbing lions, colorful birds, and hippo-filled pools. After enjoying the game drive, you'll make your way back to Arusha.",
      },
    ],
    category: "camping",
    slug: "6-days-camping-experience",
  },
]

export const allTours = [...lodgeSafaris, ...campingSafaris]

export function getTourBySlug(slug: string): Tour | undefined {
  return allTours.find((tour) => tour.slug === slug)
}

export function getToursByCategory(category: "lodge" | "camping"): Tour[] {
  return allTours.filter((tour) => tour.category === category)
}
