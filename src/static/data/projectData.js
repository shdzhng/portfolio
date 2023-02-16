const projectData = [
  {
    name: "Tapply",
    description:
      "Tapply is a peer-to-peer platform for users to efficiently source professional, technical, & everyday solutions from their trusted network. Imagine tapping a button and having the most qualified person in your network appear before you, eager to help with your particular issue. This is our mission at Tapply. Tapply is a peer-to-peer platform enabling users to efficiently source professional, technical, and everyday solutions from their trusted network.",
    highlights: [
      "<span class='highlight'>Architected React components </span>for Tapply’s message-sending experience to improve chat room experience",
      "<span class='highlight'>Integrated Mixpanel</span> event tracking and leveraged training in social sciences survey construction to build a user activity tracking system to provide KPI insight to company leadership",
      "<span class='highlight'>Translated Figma</span> design into modular and responsive React components",
      "Actively participated in <span class='highlight'>live site reviews and collaborated with the team to align expectations and delivery estimates</span>",
      "Proactively identified, proposed, and implemented <span class='highlight'>process improvements to boost team efficiency</span>",
      "Maintained and debugged the frontend code base with a <span class='highlight'>can-do attitude</span>",
      "Worked closely with other developers to <span class='highlight'>ensured performance across browsers, devices and PWA </span>",
    ],
    technologies: [
      "React",
      "Redux",
      "Javascript",
      "Firebase",
      "Firestore",
      "MUI",
      "styled-components",
      "Chart.js",
    ],
    links: {
      img: require("../../static/img/tapply.png"),
    },
  },
  {
    name: "Mooday Journal",
    description:
      "Mooday is a mood tracking journal SPA with quantitative and qualitative analysis features to support users in their journey towards understanding their mental health strengths and needs.",
    highlights: [
      'Employed React, Router, Redux with MUI and styled-components to construct <span class="highlight"> three responsive scenes </span> tied to a Redux store, <span class="highlight"> enabling the storage, download, post, edit, sort, delete, and query of user journal entries.</span>',
      'Incorporated Google Map Autocomplete to <span class="highlight"> allow users to geotag the location of their story </span> and lays the foundation for Mooday to <span class="highlight"> provide a color-coded heatmap view </span> of hot spots for various emotions using Map Markers.',
      'Custom built logic to extract metadata from queried redux journal entries that feed into three Chart.JS components to <span class="highlight">provide users an interactive visual of journal trends </span>.',
    ],
    technologies: [
      "React",
      "Redux",
      "Javascript",
      "Firebase",
      "Firestore",
      "MUI",
      "styled-components",
      "Chart.js",
    ],
    links: {
      github: "https://github.com/shdzhng/Mooday-Journal-Mood-Tracker",
      demo: "https://mooday-demo.web.app/",
      youtube: "EIcrskdaSMM",
      img: require("../../static/img/mooday.png"),
    },
  },
  {
    name: "RPG Character Maker",
    description:
      "RPG Character Maker is a interactive web application that renders a character page based on user input.",
    highlights: [
      'Employed React and styled-components to construct <span class="highlight"> interactive form components </span> enabling users to interact with the web application.',
      'Incorporated React Context API to <span class="highlight"> allow different Next.js pages to have access to the same data.',
    ],
    technologies: ["React", "Next.js", "Javascript", "styled-components"],
    links: {
      github: "https://github.com/shdzhng/RPGMaker-challenge",
      demo: "https://rpg-character-maker-eta.vercel.app/",
    },
  },
  {
    name: "Bruce Lee Tree",
    description:
      "A digital exhibit of my research findings (during my time as a museum professional) into Bruce Lee's philosophical inspirations to reveal the network of ideas and people that shaped Bruce Lee's attitude and outlook on life, success, martial arts and how he went on to inspire generations to come.",
    highlights: [
      'Employed React, MUI, and styled-components to construct a responsive UI layout for users to <span class="highlight"> display data fetched from WikiMedia API based on user click activity. </span>',
      'Utilized React-Force-Graph to render a <span class="highlight">illustration to display the network of relations</span> between Bruce Lee and other well-known influential figures in history.',
      "Integrated React-Howler to enhance the audio-visual experience of the user by <span class='highlight'>  allowing users to toggle play/mute the Bruce Lee soundtrack. </span>",
    ],
    technologies: [
      "React",
      "Javascript",
      "MUI",
      "Firebase",
      "styled-components",
    ],
    links: {
      github:
        "https://github.com/shdzhng/Bruce-Lee-One-Family-Inspiration-Tree",
      demo: "https://bruceleeinspirationtree.web.app/",
      youtube: "xL-ZNEpqpfk",
      img: require("../../static/img/brucelee.png"),
    },
  },
  {
    name: "Eco Path",
    description:
      "Eco Pathfinder is a SPA that envisions a new way of accessing multi-modal travel information to embed the consideration of our carbon footprint into our everyday commute. Eco Pathfinder encourages a “slower” mode of travel by providing users with four travel methods to their destination alongside its CO2 emission.",
    highlights: [
      'Utilized React, Redux, and CSS to compose an <span class="highlight"> interface that illustrates various modes of transit and their impact on the environment </span>, encouraging users to make environmentally conscious transportation choices.',
      'Leveraged the Google Maps API to quickly implement rich features like <span class="highlight"> allowing users to easily search for addresses via autocomplete, calculate the distance and time between two points across various modes of transportation, and visualize their route on an interactive map.</span>',
    ],
    technologies: ["React", "Redux", "CSS"],
    links: {
      github: "https://github.com/shdzhng/eco-pathfinder",
      demo: "https://ecopath-f76ee.web.app/",
      youtube: "5yC4WV-SwL4",
      img: require("../../static/img/ecopath.png"),
    },
  },
  {
    name: "Gardening Hub",
    description:
      "Gardening hub is a simple crop succession tracking SPA to support gardners in their harvest.",
    highlights: [
      'Utilized React and MUI to compose a <span class="highlight"> responsive data grid interface that handles user crop selection, deletion, and .csv export </span>. Upon 1st seed sowing date entry, the rest of the data grid will be automatically populated using custom built logic',
    ],
    technologies: ["React", "MUI"],
    links: {
      github: "https://github.com/shdzhng/SuccessionGardeningHub",
      demo: "https://gardening-hub.web.app/",
      img: require("../../static/img/gardenhub.png"),
    },
  },
  {
    name: "PokeMart",
    description:
      "A e-commerce mockup simulating the PokeMart francise thematics from Pokemon. Built using PokeAPI.",
    highlights: [
      "Utilized React and MUI to build out the website interface from data fetched from PokeAPI",
      'Employed Firebase Auth to handle <span class="highlight"> user registration </span> and Firestore to <span class="highlight"> maintain user data across devices</span>.',
      'Leveraged useContext to store user authentication and user data (shopping cart, favorites) to enable  <span class="highlight"> component access to key information.</span>',
    ],
    technologies: [
      "React",
      "MUI",
      "Firebase",
      "Firestore",
      "styled-components",
    ],
    links: {
      github: "https://github.com/shdzhng/SuccessionGardeningHub",
      demo: null,
      youtube: "CQINy-ngLzc",
      img: require("../img/pokemart.png"),
    },
  },
];

export default projectData;
