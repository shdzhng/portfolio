const projectData = [
  {
    name: 'Mooday Journal',
    description:
      'Mooday is a mood tracking journal SPA with quantitative and qualitative analysis features to support users in their journey towards understanding their mental health strengths and needs.',
    highlights: [
      'Employed React, Router, Redux with MUI and styled-components to construct three responsive views tied to a Redux store, allowing for standard storage, download, post, edit, sort, delete, and query of user journal entries.',
      'Incorporated Google Map Autocomplete to allow users to geotag the location of their story and lays the foundation for Mooday to provide a color-coded heatmap view of hot spots for various emotions using Map Markers. Users are also able to create and edit entries on the map directly.',
      'Custom built logic to extract metadata from queried redux journal entries that feed into three chart.JS components to provide users an interactive visual of journal trends with a bonus of flexibility for users to change year view.',
      'Integrated quickchart.io word cloud API to supplement descriptive qualitative analysis to create a mixed-method service that integrates the benefit of both scientific approaches.',
    ],
    technologies: [
      'React',
      'Redux',
      'Javascript',
      'Firebase',
      'Firestore',
      'MUI',
      'styled-components',
      'Chart.js',
    ],
    links: {
      github: 'https://github.com/shdzhng/Mooday-Journal-Mood-Tracker',
      demo: 'https://mooday-demo.web.app/',
    },
  },
  {
    name: 'Bruce Lee Inspiration Tree',
    description:
      "a digital exhibit of my research findings (during my time as a museum professional) into Bruce Lee's philosophical inspirations to reveal the network of ideas and people that shaped Bruce Lee's attitude and outlook on life, success, martial arts and how he went on to inspire generations to come. This digital exhibition encourage visitors to keep in mind the theme of “under the heavens there is but one family” as visitors explore the rich diversity of perspectives that Bruce Lee sought to understand across racial, ethnic, sexuality, religious, citizenship, and political differences. This exhibit also further traces the influence/legacy network of those who influenced Bruce. There will be names that users do not expect to see. This exhibit encourages visitors to embrace the discomfort and ponder the theme 'one family'.",
    highlights: [
      'Employed React, MUI, and styled-components to construct a responsive UI layout for users to display data fetched from WikiMedia API based on user click activity.',
      'Incorporated React-Force-Graph to render a 2D force-directed graph representative of data collected for the WeAreBruceLee exhibit to display the network of relations between Bruce Lee and other well-known influential figures in history.',
      "Integrated React-Howler to enhance the audio-visual experience of the user by allowing users to toggle play/mute a soundtrack Bruce Lee's 'Lost Interview' mixed with Lofi.",
    ],
    technologies: [
      'React',
      'Javascript',
      'MUI',
      'Firebase',
      'styled-components',
    ],
    links: {
      github:
        'https://github.com/shdzhng/Bruce-Lee-One-Family-Inspiration-Tree',
      demo: 'https://bruceleeinspirationtree.web.app/',
    },
  },
  {
    name: 'Eco Path',
    description:
      'Eco Pathfinder is a SPA that envisions a new way of accessing multi-modal travel information to embed the consideration of our carbon footprint into our everyday commute. Eco Pathfinder encourages a “slower” mode of travel by providing users with four travel methods to their destination alongside its CO2 emission. Implicitly promoting carpooling over personal automobiles for long-distance travel and the use of scooter/bicycle over automobile for local journeys.',
    highlights: [
      'Utilized React, Redux, and CSS to compose an interface that illustrates various modes of transit and their impact on the environment, encouraging users to make environmentally conscious transportation choices.',
      'Leveraged the Google Maps API to quickly implement rich features like allowing users to easily search for addresses via autocomplete, calculate the distance and time between two points across various modes of transportation, and visualize their route on an interactive map.',
    ],
    technologies: ['React', 'Redux', 'CSS'],
    links: {
      github: 'https://github.com/shdzhng/eco-pathfinder',
      demo: 'https://ecopath-f76ee.web.app/',
    },
  },
  {
    name: 'Succession Gardening Hub',
    description:
      'Succession Gardening hub is a simple crop succession tracking SPA to support gardners in their harvest.',
    highlights: [
      'Utilized React and MUI to compose a responsive data grid interface that handles user crop selection, deletion, and .csv export. Upon 1st seed sowing date entry, the rest of the data grid will be automatically populated using custom built logic',
    ],
    technologies: ['React', 'MUI'],
    links: {
      github: 'https://github.com/shdzhng/SuccessionGardeningHub',
      demo: 'https://gardening-hub.web.app/',
    },
  },
  {
    name: 'PokeMart',
    description:
      'A E-Commerce SPA simulating the PokeMart francise thematics from Pokemon. Built using PokeAPI.',
    highlights: [
      'Utilized React and MUI to build out the website navigation and inventory from data fetched from PokeAPI',
      'Employed Firebase Auth to handle user registration and Firestore to maintain user data in order to ensure that shopping carts and favorites are accessible across devices.',
      'Leveraged useContext to store user authentication and user data (shopping cart, favorites) to allow easy component access to key information',
    ],
    technologies: [
      'React',
      'MUI',
      'Firebase',
      'Firestore',
      'styled-components',
    ],
    links: {
      github: 'https://github.com/shdzhng/SuccessionGardeningHub',
      demo: null,
    },
  },
  {
    name: 'Odyssey',
    description:
      'A SPA tostreamline travel planning with friends. This project aims to develop cumulative cost splitting (no more tiny venmo transactions, just pay/receive what you owe at the end of the trip!), itinerary item voting, day by day planning with Map as visual support',
    highlights: [
      'Utilized Firestore to handle social features such as sending and rejecting friend request, removing friend, and displaying online status.',
      'Leveraged Firebase Auth to handle user registartion.',
    ],
    technologies: ['React', 'MUI', 'Firebase', 'styled-components'],
    links: {
      github: 'https://github.com/shdzhng/SuccessionGardeningHub',
      demo: null,
    },
  },
];

export default projectData;