export type Tour = {
  slug: string;
  title: string;
  displayTitle: string;
  seoTitle: string;
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
    displayTitle: "2-Day Marrakech to Merzouga Desert Tour",
    seoTitle: "2-Day Marrakech to Merzouga Desert Tour | AjilMaroc",
    description: "A fast-paced two-day journey from Marrakech to Merzouga, with a sunset camel ride and an overnight stay in a desert camp listed in the current tour description. The return to Marrakech is on day two; confirm the route, driving schedule, camp arrangements and inclusions before booking.",
    price: "",
    duration: "2 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/81b4b332-7318-414b-856c-fc7a795908b0/Desert_Camel_Tour.JPG?format=1000w",
    category: "merzouga",
    details: [
      "Two-day journey from Marrakech to Merzouga",
      "Sunset camel ride described in the tour itinerary",
      "Overnight desert camp stay described in the tour",
      "Return to Marrakech on the second day",
    ],
  },
  {
    slug: "luxury-desert",
    title: "LUXURY",
    displayTitle: "3-Day Marrakech to Merzouga Sahara Tour",
    seoTitle: "3-Day Marrakech to Merzouga Sahara Tour | AjilMaroc",
    description: "This three-day Marrakech-to-Merzouga itinerary lists an overnight stop in the Dades region, a sunset camel ride and an overnight desert camp stay before returning to Marrakech on day three. Confirm the exact route, accommodation and included activities with AjilMaroc.",
    price: "",
    duration: "3 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1664981453211-HRC2DDOBN9FDPE01WUN6/PHOTO-2022-07-21-08-54-33.jpg?format=1000w",
    category: "merzouga",
    details: [
      "Three-day route from Marrakech to Merzouga",
      "Overnight stop listed in the Dades region",
      "Sunset camel ride described in the tour itinerary",
      "Overnight desert camp stay described in the tour",
    ],
  },
  {
    slug: "relax-desert",
    title: "RELAX",
    displayTitle: "4-Day Marrakech to Merzouga Desert Tour",
    seoTitle: "4-Day Marrakech to Merzouga Desert Tour | AjilMaroc",
    description: "The four-day option adds an extra night and a full day in the desert compared with the listed three-day tour. Quad biking and sandboarding are mentioned as activity options; ask which are available, included or charged separately for your dates.",
    price: "",
    duration: "4 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1664981288548-I7ZBTAQRJMTI5PDR955R/7AF7F819-2139-4594-8CA9-C18046D849CA.jpg?format=750w",
    category: "merzouga",
    details: [
      "Four-day itinerary with an extra night in the desert",
      "Full day in the desert described in the tour",
      "Quad biking and sandboarding listed as activity options",
      "Confirm activity costs and overnight arrangements before booking",
    ],
  },

  // Tours Around Morocco
  {
    slug: "adventure-tour",
    title: "ADVENTURE TOUR",
    displayTitle: "10-Day Private Morocco Tour",
    seoTitle: "10-Day Private Morocco Tour Itinerary | AjilMaroc",
    description: "A ten-day Morocco itinerary listing Casablanca, Marrakech, Merzouga, Fes and Chefchaouen. The published tour description says the route can be customized; request a day-by-day plan and confirm which stops and services are available for your dates.",
    price: "",
    duration: "10 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/634b0a0c-c7e8-4683-af5a-5757a0c7fd19/PHOTO-2022-07-24-21-49-07.jpg?format=1000w",
    category: "morocco",
    details: [
      "Ten-day itinerary",
      "Destinations listed: Casablanca, Marrakech, Merzouga, Fes and Chefchaouen",
      "Ask for the proposed overnight stops and day-by-day route",
      "Discuss itinerary changes before confirming your booking",
    ],
  },
  {
    slug: "optimum-tour",
    title: "OPTIMUM TOUR",
    displayTitle: "12-Day Private Morocco Tour",
    seoTitle: "12-Day Private Morocco Tour | AjilMaroc",
    description: "The twelve-day itinerary is described as the ten-day route with two additional days that may be used for a destination such as Essaouira. Confirm the available route, overnight stops and customization options before booking.",
    price: "",
    duration: "12 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/2ca4930c-b92f-4ec7-ad9d-196494083f62/IMG_0613.JPG?format=750w",
    category: "morocco",
    details: [
      "Twelve-day itinerary",
      "Two additional days compared with the listed ten-day tour",
      "Essaouira is mentioned as a possible destination",
      "Confirm how the additional days can be arranged",
    ],
  },
  {
    slug: "absolute-tour",
    title: "ABSOLUTE TOUR",
    displayTitle: "14-Day Private Morocco Tour",
    seoTitle: "14-Day Private Morocco Tour | AjilMaroc",
    description: "A fourteen-day tour with itinerary details to be confirmed with AjilMaroc. Request the proposed destinations, overnight stops and available customization before deciding whether the route suits your plans.",
    price: "",
    duration: "14 days",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1637694830707-8AYBD9KMS1WLV2J52V4O/quad1.jpg?format=1000w",
    category: "morocco",
    details: [
      "Fourteen-day tour duration",
      "Request a complete route and overnight-stop list",
      "Discuss possible itinerary changes with AjilMaroc",
    ],
  },

  // Day Trips from Marrakech
  {
    slug: "ouzoud-falls",
    title: "OUZOUD FALLS",
    displayTitle: "Ouzoud Waterfalls Day Trip from Marrakech",
    seoTitle: "Ouzoud Waterfalls Day Trip from Marrakech | AjilMaroc",
    description: "A day-trip option from Marrakech to the Ouzoud Waterfalls. Confirm pickup arrangements, transport, time at the falls, guide arrangements and whether any local activities or meals are included.",
    price: "",
    duration: "1 day",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/a147cb9d-d669-468c-bbd4-c02efa34e0a2/pexels-wahid-s-104610.jpg?format=1500w",
    category: "daytrip",
    details: [
      "Day trip from Marrakech to the Ouzoud Waterfalls",
      "Ask about transport and guide arrangements",
      "Confirm whether meals and local activities are included",
    ],
  },
  {
    slug: "essaouria",
    title: "ESSAOURIA",
    displayTitle: "Essaouira Day Trip from Marrakech",
    seoTitle: "Essaouira Day Trip from Marrakech | AjilMaroc",
    description: "A day trip from Marrakech to Essaouira, a coastal city known for its historic medina, fishing port and Atlantic shoreline. Confirm travel arrangements, expected free time and pickup details before booking.",
    price: "",
    duration: "1 day",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/1638553847490-8XZ47KTTHXGUAPN8FXKW/essouaira.jpg?format=1500w",
    category: "daytrip",
    details: [
      "Day trip from Marrakech to Essaouira",
      "Explore the historic medina and fishing port",
      "Time on the Atlantic coast",
      "Confirm transport and free-time arrangements",
    ],
  },
  {
    slug: "agafay-desert",
    title: "AGAFAY DESERT",
    displayTitle: "Agafay Desert Experience from Marrakech",
    seoTitle: "Agafay Desert Experience from Marrakech | AjilMaroc",
    description: "Explore Agafay, a rocky desert landscape near Marrakech, rather than the Sahara sand dunes around Merzouga. Ask which activities, transport, meals and camp services are offered and included in the specific experience.",
    price: "",
    duration: "1 day",
    image: "https://images.squarespace-cdn.com/content/v1/61952f8dd5af670b10e518a7/91a907b5-1f2d-46af-9092-b76b1c550f85/north-africa-g3e4862da3_1920.jpg?format=1500w",
    category: "daytrip",
    details: [
      "Rocky desert landscape near Marrakech",
      "Different setting from the Sahara sand dunes at Merzouga",
      "Ask which activities and camp services are available",
      "Confirm transport, meals and activity costs before booking",
    ],
  },
];
