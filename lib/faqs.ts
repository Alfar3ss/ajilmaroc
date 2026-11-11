export type FAQ = {
  question: string;
  answer: string;
  link?: { href: string; label: string; external?: boolean };
};

export const faqs: FAQ[] = [
  {
    question: "What is included in the tour price?",
    answer:
      "Inclusions vary by itinerary, and the website does not list a complete inclusion breakdown for every tour. Ask for a written quote showing what is included and any additional costs before booking.",
  },
  {
    question: "What is the best time to visit Morocco?",
    answer:
      "Weather varies by region and season. Spring and autumn are often considered comfortable periods for visiting many destinations, but check conditions for your specific route and travel dates.",
  },
  {
    question: "Do I need a visa to visit Morocco?",
    answer:
      "Entry and visa requirements depend on your nationality and circumstances. Check current requirements with an official Moroccan consulate or government travel resource before departure.",
    link: {
      href: "https://www.acces-maroc.ma/",
      label: "Check Morocco’s official eVisa portal",
      external: true,
    },
  },
  {
    question: "What physical fitness level is required?",
    answer:
      "Walking and activity requirements depend on the tour and activities you choose. Ask AjilMaroc about the expected walking, terrain and physical demands of your specific itinerary.",
  },
  {
    question: "Is it safe to travel in Morocco?",
    answer:
      "Conditions can change and vary by location. Review your government’s current travel advice, follow local guidance and take normal precautions with valuables and personal belongings.",
  },
  {
    question: "What currency is used in Morocco?",
    answer:
      "Morocco’s currency is the Moroccan dirham (MAD). Ask your bank about payment and exchange options, and confirm with each provider whether cards are accepted or cash is needed.",
  },
  {
    question: "Can you customize a tour for our group?",
    answer:
      "The tour descriptions invite travelers to discuss itinerary changes. Send your preferred destinations, dates and group size, then confirm the available changes and any price difference before booking.",
  },
  {
    question: "What happens if the tour is cancelled?",
    answer:
      "Cancellation terms should be confirmed in writing for your specific booking before you pay. Contact AjilMaroc if the applicable terms are not clear.",
  },
  {
    question: "Do you offer vegetarian or halal meals?",
    answer:
      "Meal arrangements are not specified for every tour. Tell AjilMaroc about dietary requirements in advance and ask for confirmation of what can be arranged and whether it affects the price.",
  },
  {
    question: "How do we communicate before the tour?",
    answer:
      "You can send an enquiry through the booking form or use the WhatsApp and email contact details shown on this website. Confirm the final itinerary and arrangements in writing.",
  },
  {
    question: "How long does it take to travel from Marrakech to Merzouga?",
    answer:
      "Travel time depends on the route, stops and road conditions. Ask AjilMaroc for the expected driving schedule for your selected tour; do not assume the two-, three- and four-day options have the same pace.",
    link: { href: "/tours#merzouga", label: "Compare Marrakech to Merzouga tours" },
  },
  {
    question: "What is the difference between Merzouga and Agafay?",
    answer:
      "Merzouga is associated with the Sahara’s sand dunes and is included in multi-day desert tours. Agafay is a rocky desert landscape near Marrakech, so it offers a different setting and travel plan.",
    link: { href: "/tour/agafay-desert", label: "See the Agafay Desert experience" },
  },
  {
    question: "Are the desert tours private or shared?",
    answer:
      "Some tour descriptions identify their itineraries as private, but this is not stated consistently for every tour. Confirm whether your selected trip is private or shared before booking.",
    link: { href: "/tours#merzouga", label: "Review the Merzouga tour options" },
  },
  {
    question: "Is the camel ride included?",
    answer:
      "A sunset camel ride is mentioned in the descriptions for some Merzouga tours. Ask whether it is included in your quote and what alternatives or extra costs apply.",
    link: { href: "/tours#merzouga", label: "View Merzouga Desert tours" },
  },
  {
    question: "What type of desert camp is available?",
    answer:
      "Some Merzouga descriptions mention an overnight desert camp, but camp facilities and room arrangements are not fully specified. Request details for the exact camp and accommodation included in your quote.",
    link: { href: "/tours#merzouga", label: "Compare Merzouga tour durations" },
  },
  {
    question: "Are private rooms available?",
    answer:
      "Room arrangements are not specified for every itinerary. Ask AjilMaroc to confirm room type, occupancy and any supplement for your travel dates.",
  },
  {
    question: "Can children join the desert tours?",
    answer:
      "Age limits and child-specific arrangements are not stated for every tour. Share the children’s ages with AjilMaroc and confirm suitability, transport arrangements and any applicable pricing before booking.",
  },
  {
    question: "Can we choose our pickup location?",
    answer:
      "Pickup details are not fully listed for every tour. Ask AjilMaroc to confirm the pickup point and whether a different location can be arranged.",
  },
  {
    question: "What should we pack for a Sahara Desert trip?",
    answer:
      "Pack for the season and the activities on your confirmed itinerary. Useful basics may include comfortable walking shoes, sun protection, layers for changing temperatures and any personal medication. Ask for advice based on your travel dates.",
  },
  {
    question: "Can we book a tour at short notice?",
    answer:
      "Availability depends on your dates and the arrangements required for the selected tour. Contact AjilMaroc with your travel dates and group size to check.",
  },
];
