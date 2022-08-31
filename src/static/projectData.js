const projectData = [
  {
    name: 'Mooday Journal',
    description:
      'Mooday is a mood tracking journal SPA with quantitative and qualitative analysis features to support users in their journey towards understanding their mental health strengths and needs.',
    highlights: [
      'Employed React, Router, Redux with MUI and styled-components to construct <span class="highlight"> three responsive scenes </span> tied to a Redux store, <span class="highlight"> enabling the storage, download, post, edit, sort, delete, and query of user journal entries.</span>',
      'Incorporated Google Map Autocomplete to <span class="highlight"> allow users to geotag the location of their story </span> and lays the foundation for Mooday to <span class="highlight"> provide a color-coded heatmap view </span> of hot spots for various emotions using Map Markers.',
      'Custom built logic to extract metadata from queried redux journal entries that feed into three Chart.JS components to <span class="highlight">provide users an interactive visual of journal trends </span>.',
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
      youtube: 'EIcrskdaSMM',
    },
  },
  {
    name: 'Bruce Lee Inspo Tree',
    description:
      "A digital exhibit of my research findings (during my time as a museum professional) into Bruce Lee's philosophical inspirations to reveal the network of ideas and people that shaped Bruce Lee's attitude and outlook on life, success, martial arts and how he went on to inspire generations to come.",
    highlights: [
      'Employed React, MUI, and styled-components to construct a responsive UI layout for users to <span class="highlight"> display data fetched from WikiMedia API based on user click activity. </span>',
      'Utilized React-Force-Graph to render a <span class="highlight">illustration to display the network of relations</span> between Bruce Lee and other well-known influential figures in history.',
      "Integrated React-Howler to enhance the audio-visual experience of the user by <span class='highlight'>  allowing users to toggle play/mute the Bruce Lee soundtrack. </span>",
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
      'Eco Pathfinder is a SPA that envisions a new way of accessing multi-modal travel information to embed the consideration of our carbon footprint into our everyday commute. Eco Pathfinder encourages a “slower” mode of travel by providing users with four travel methods to their destination alongside its CO2 emission.',
    highlights: [
      'Utilized React, Redux, and CSS to compose an <span class="highlight"> interface that illustrates various modes of transit and their impact on the environment </span>, encouraging users to make environmentally conscious transportation choices.',
      'Leveraged the Google Maps API to quickly implement rich features like <span class="highlight"> allowing users to easily search for addresses via autocomplete, calculate the distance and time between two points across various modes of transportation, and visualize their route on an interactive map.</span>',
    ],
    technologies: ['React', 'Redux', 'CSS'],
    links: {
      github: 'https://github.com/shdzhng/eco-pathfinder',
      demo: 'https://ecopath-f76ee.web.app/',
      gif: 'https://camo.githubusercontent.com/2ed49eba4b988cc04831b5fce89c5978f589790a371285b7ea7e78462d0a707e/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f496e34695a307a3463483069484851566d4c2f67697068792e6769663f6369643d373930623736313134613332663964623664303230386438383937366266376562386637353934643337376632303964267269643d67697068792e6769662663743d67',
    },
  },
  {
    name: 'Gardening Hub',
    description:
      'Gardening hub is a simple crop succession tracking SPA to support gardners in their harvest.',
    highlights: [
      'Utilized React and MUI to compose a <span class="highlight"> responsive data grid interface that handles user crop selection, deletion, and .csv export </span>. Upon 1st seed sowing date entry, the rest of the data grid will be automatically populated using custom built logic',
    ],
    technologies: ['React', 'MUI'],
    links: {
      github: 'https://github.com/shdzhng/SuccessionGardeningHub',
      demo: 'https://gardening-hub.web.app/',
    },
  },
  {
    name: 'PokeMart (WIP)',
    description:
      'A E-Commerce SPA simulating the PokeMart francise thematics from Pokemon. Built using PokeAPI.',
    highlights: [
      'Utilized React and MUI to build out the website interface from data fetched from PokeAPI',
      'Employed Firebase Auth to handle <span class="highlight"> user registration </span> and Firestore to <span class="highlight"> maintain user data across devices</span>.',
      'Leveraged useContext to store user authentication and user data (shopping cart, favorites) to enable  <span class="highlight"> component access to key information.</span>',
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
    name: 'Odyssey (WIP)',
    description:
      'A SPA tostreamline travel planning with friends. This project aims to develop cumulative cost splitting, itinerary item voting, day by day planning with Map as visual support',
    highlights: [
      'Utilized Firestore to handle <span class="highlight"> rich social features such as sending and rejecting friend request, removing friend, and displaying online status.</span>',
      'Leveraged Firebase Auth to handle <span class="highlight">  user registartion.</span>',
    ],
    technologies: ['React', 'MUI', 'Firebase', 'styled-components'],
    links: {
      github: 'https://github.com/shdzhng/SuccessionGardeningHub',
      demo: null,
    },
  },
];

export default projectData;
