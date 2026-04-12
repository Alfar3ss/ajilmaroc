export type Tour = {
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  details: string[];
  category: "merzouga" | "morocco" | "daytrip" | "cultural";
};

export const tours: Tour[] = [
  // Merzouga Desert Tours
  {
    slug: "express-desert",
    title: "EXPRESS",
    description: "This 2-day private EXPRESS tour is perfect if you are short on time during your stay in Morocco. We start from Marrakech to the desert early on Day 1, so you'll have time to ride camels at sunset, stargaze in undisturbed desert darkness, and spend the night in a luxury desert camp tent. The second day of the trip, you will head back to the city.",
    price: "$320",
    duration: "2 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/81b4b332-7318-414b-856c-fc7a795908b0/Desert_Camel_Tour.JPG?format=1000w",
    category: "merzouga",
    details: [
      "Ride camels at sunset over Erg Chebbi",
      "Stargaze in undisturbed desert darkness",
      "Sleep in luxury desert camp tent",
      "Return to Marrakech on Day 2",
    ],
  },
  {
    slug: "luxury-desert",
    title: "LUXURY",
    description: "The 3-day private LUXURY desert tour is the ideal amount of time to experience the barren beauty of the arid landscape. Stopping for the night in Boumalne Dades, you can admire the picturesque setting used as a shooting location for movies such as The Mummy. Once in the desert, you will ride camel at sunset, sleep in a luxury tent under the stars, and head back to the city on Day 3.",
    price: "$420",
    duration: "3 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1664981453211-HRC2DDOBN9FDPE01WUN6/PHOTO-2022-07-21-08-54-33.jpg?format=1000w",
    category: "merzouga",
    details: [
      "Stop in picturesque Boumalne Dades",
      "Movie filming location scenery",
      "Camel ride at sunset",
      "Sleep under the stars in luxury tent",
    ],
  },
  {
    slug: "relax-desert",
    title: "RELAX",
    description: "This 4-day private RELAX tour provides you with ample time to absorb all the marvelous wonders the desert reveals to those who seek them. While including all the activities of the LUXURY tour, you also get an extra night and a full day in the desert to participate in a variety of unforgettable activities of your choice, such as quad biking or sand surfing.",
    price: "$520",
    duration: "4 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1664981288548-I7ZBTAQRJMTI5PDR955R/7AF7F819-2139-4594-8CA9-C18046D849CA.jpg?format=750w",
    category: "merzouga",
    details: [
      "All LUXURY tour activities included",
      "Extra night and full day in the desert",
      "Quad biking and sand surfing options",
      "Authentic Berber camp experience",
    ],
  },

  // Tours Around Morocco
  {
    slug: "adventure-tour",
    title: "ADVENTURE TOUR",
    description: "This private 10-day ADVENTURE TOUR is the perfect way to see Morocco's most popular destinations. You'll visit Casablanca, Marrakech, the Merzouga Desert, Fes, and the Blue City. This relatively fast-paced tour will guarantee you fun and excitement. We are also happy to customize the itinerary to ensure you the perfect experience.",
    price: "$1,200",
    duration: "10 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/634b0a0c-c7e8-4683-af5a-5757a0c7fd19/PHOTO-2022-07-24-21-49-07.jpg?format=1000w",
    category: "morocco",
    details: [
      "Visit Casablanca's iconic Hassan II Mosque",
      "Explore Marrakech's bustling medinas",
      "Trek through Merzouga Desert",
      "Experience Fes UNESCO World Heritage medina",
      "Discover the Blue City of Chefchaouen",
      "Fully customizable itinerary",
    ],
  },
  {
    slug: "optimum-tour",
    title: "OPTIMUM TOUR",
    description: "The OPTIMUM TOUR is a 12-day private tour that includes the most popular destinations from the ADVENTURE TOUR, with two extra days to spend in, for example, another city of your choice, such as Essaouria. This Morocco tour is perfect for those who want to experience all that this stunning country has to offer in a more relaxed pace.",
    price: "$1,680",
    duration: "12 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/2ca4930c-b92f-4ec7-ad9d-196494083f62/IMG_0613.JPG?format=750w",
    category: "morocco",
    details: [
      "All ADVENTURE TOUR destinations included",
      "Plus 2 extra days in city of your choice",
      "Essaouria medina or other premium locations",
      "More relaxed pace for deeper exploration",
      "Private local guide throughout",
    ],
  },
  {
    slug: "absolute-tour",
    title: "ABSOLUTE TOUR",
    description: "On your 14-day ABSOLUTE TOUR, you'll get to cover most of Morocco, spending enough time in each place to really take in the culture and all its magic. Our tours are fully customizable, so you can choose how long you spend in each destination, letting you linger in the places that you love the most for as long as you like.",
    price: "$2,100",
    duration: "14 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1637694830707-8AYBD9KMS1WLV2J52V4O/quad1.jpg?format=1000w",
    category: "morocco",
    details: [
      "Cover most of Morocco in 14 days",
      "Spend ample time in each destination",
      "Fully customizable experience",
      "Linger in your favorite places as long as you like",
      "Immerse in authentic culture and magic",
    ],
  },

  // Day Trips from Marrakech
  {
    slug: "ouzoud-falls",
    title: "OUZOUD FALLS",
    description: "Visit Ouzoud Falls, the highest waterfall in North Africa, on a day trip from Marrakech. On the way, you'll drive through rolling foothills and olive groves before reaching the 330 ft (110m) waterfalls. You can relax beside the waterfalls, cross the river on a hand-powered barge, visit cafes near the water, and view the stunning scenery as you immerse in nature.",
    price: "$120",
    duration: "1 day",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/a147cb9d-d669-468c-bbd4-c02efa34e0a2/pexels-wahid-s-104610.jpg?format=1500w",
    category: "daytrip",
    details: [
      "Highest waterfall in North Africa",
      "330 ft (110m) stunning waterfalls",
      "Drive through rolling foothills and olive groves",
      "Cross river on hand-powered barge",
      "Waterside cafes and relaxation",
    ],
  },
  {
    slug: "essaouria",
    title: "ESSAOURIA",
    description: "Essaouira is an old fort and fishing port popular for wind-water sports within 3 hours of Marrakech, and it is considered one of the most captivating cities in Morocco. The climate is pleasant and sunny all year, making it a great escape from typical city sightseeing. With its sandy beaches and salty waters, Essaouira is the perfect place to relax and enjoy some time by the ocean.",
    price: "$140",
    duration: "1 day",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1638553847490-8XZ47KTTHXGUAPN8FXKW/essouaira.jpg?format=1500w",
    category: "daytrip",
    details: [
      "Historic fort and fishing port",
      "Wind-water sports opportunities",
      "One of Morocco's most captivating cities",
      "Sandy beaches and salty waters",
      "Pleasant and sunny climate year-round",
    ],
  },
  {
    slug: "agafay-desert",
    title: "AGAFAY DESERT",
    description: "If you want to experience the desert without having to travel far from Marrakech, Agafay Desert Camp is the perfect place for you. Just an hour outside the city, you can enjoy all the luxury a desert camp has to offer, from quad biking to pool time in the most breathtaking surroundings. This is the perfect scenery for amazing photos for your social media channels and memories.",
    price: "$180",
    duration: "1 day",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/91a907b5-1f2d-46af-9092-b76b1c550f85/north-africa-g3e4862da3_1920.jpg?format=1500w",
    category: "daytrip",
    details: [
      "Just 1 hour outside Marrakech",
      "Luxury desert camp experience",
      "Quad biking adventures",
      "Pool time in breathtaking surroundings",
      "Perfect for social media and memories",
    ],
  },
];
