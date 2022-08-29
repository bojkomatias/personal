const projectList = [
  {
    name: 'Dakalutech',
    shortDescription: 'Doors and Windows ecommerce',
    generalDescription:
      'DAK works with the best European aluminum factories to guarantee a unique premium integral solution for all of your aluminum needs. This client needed a solution so market and sell their brand new line of products in the US.As such, we focused on clean images that uplift their products and a easy way of showcasing them.',
    stackDescription:
      'The project is built with NextJS that uses React, but offers dynamic SSR pages. For styling I went with TailwindCSS a class based CSS framework for quick but scalable design.',
    link: 'https://dakalutech.com/',
    tags: ['/tags/next.svg', '/tags/tailwind.svg', '/tags/puppeteer.svg'],
    images: ['/dak/dak1.webp', '/dak/dak3.webp', '/dak/dak2.webp'],
  },
  {
    name: 'Case History',
    link: 'https://case-history.vercel.app/',
    shortDescription: 'A medical record keeper',
    generalDescription:
      'Case History is a medical record keeper, exclusively built for self-managed physicians that one to keep everything in one place, with a minimalistic approach. Some of the features offered are, patient management, issue oriented case history for each patient, and calendar / scheduler. Another highlight is that the medic, can only complete indispensable information, and only adding when required, with a special on-demand component list (and according to specialization).',
    stackDescription:
      'For this project I used NextJS, taking advantage of some SSR pages and others staticly served. For styling I used ChackaUI, a React based component library that allowed for a fast building of highly interactive components. I hooked it all up with Mongo for a database, a document oriented solution that easily handles the case histories, no matter how big they get. I relied on the API folder that next provides, to write some Authentication code, and write the PUT and POST methods to save the data, there was little to no need of writing GETs since I worked with SSR pages. ',
    tags: [
      '/tags/react.svg',
      '/tags/js.svg',
      '/tags/mongo.svg',
      '/tags/chakra.svg',
    ],
    images: [
      '/case-history/1.png',
      '/case-history/2.png',
      '/case-history/3.png',
    ],
  },
  {
    name: 'Be Neutral',
    shortDescription: 'Cero carbon emission project',
    generalDescription:
      'Be Neutral was a project made with the intent of participating in a cero carbon emission project expose. The crew of the project from Chile, contacted Nico and me to develop a nice landing page and a carbon emission calculator for the individual person and for enterprises. The main challenge was the big calculator since the questions were extensive, and there was math involved.',
    stackDescription:
      'We used NextJS with Typescript for safe type checking since this was a multiple man operation. And decided to style it with TailwindCSS, a wonderful technology to write CSS and not repeat yourself coding, since many pages shared components or similar styles. We hooked the data saving part of the project through de API folder to a Supabase project, a simple SQL database open source solution',
    link: 'https://beneutral-9da5syyce-beneutraldev.vercel.app/',
    devs: [{ name: 'Nicolás Horn', link: 'https://nicohorn.com' }],
    tags: ['/tags/typescript.svg', '/tags/next.svg', '/tags/tailwind.svg'],
    images: [
      '/be-neutral/ne1.webp',
      '/be-neutral/ne3.png',
      '/be-neutral/ne2.png',
    ],
  },
  {
    name: 'Commerce',
    shortDescription: 'A commerce site for a publishing house',
    generalDescription: 'I worked in this project as the Frontend Engineer with the team from ACES (Casa Editora Sudamericana). Consists on a big organization manager for ordering books, specially in bulk, from schools and churches directly to ACES (this was previously managed by people through email). Now sales go through directly, with some supervising from admins at different levels that monitor each task.',
    stackDescription: 'This project was built with Nuxt, that is a big framework with built in solutions for scalable projects written in Vue. We had to code multiple middleware layers to grant access, to specific features of the application. For a backend, we built a full blown API in .NET framework. This API served the frontend a bunch of information in multiple shapes, while also connecting it to internal systems from ACES. TailwindCSS was also the choice for styling the site.',
    link: 'https://commerce.editorialaces.com/',
    devs: [{ name: 'Others', link: '#' }],
    tags: [
      '/tags/nuxt.svg',
      '/tags/net.svg',
      '/tags/msql.svg',
      '/tags/tailwind.svg',
    ],
    images: ['/b2b/b2b1.png', '/b2b/b2b2.png', '/b2b/b2b3.png'],
  },
  {
    name: 'Suscriptions',
    shortDescription: 'A simple subscription app to regularly receive books',
    generalDescription: 'This was a mobile application that we built in ACES that provided an easy way for the regular person, to subscribe and receive books regularly. We used Vue to build an Single Page Application, and the navigation is done through state management and component rendering. Then we converted it into a Progressive Web Application, so it could be installed on mobile.',
    stackDescription: 'Vue for the frontend, most of the backend was connected to the same .NET API, that Commerce was connected to, we just had to make a few new features for Authentication. And of course TailwindCSS was the choice, since styling is similar to other products developed in ACES.',
    link: 'https://pedidos.editorialaces.com/',
    devs: [{ name: 'Others', link: '#' }],
    tags: ['/tags/vue.svg', '/tags/pwa.svg', '/tags/net.svg'],
    images: ['/suscrip/sus1.png', '/suscrip/sus2.png', '/suscrip/sus3.png'],
  },
  {
    name: 'UAP Research',
    shortDescription: 'A web application for researchers at a university',
    generalDescription: 'A request and necessity to build an application that would handle investigation protocols, and monitor them through thorough multi-step evaluations, while keeping the anonymity between the evaluators and the investigators.',
    stackDescription: 'We used NextJS to take advantage of SSR and dynamic pages. And built some flexible React components that could interact with the process of creating a protocol, but later on, also the evaluation process. To prevent compatibility issues we dockerized the application, and also the Mongo database, where all the documents are stored. And Tailwind was our go to solution for building the UI.',
    link: 'https://uap-vid.vercel.app/',
    devs: [
      { name: 'Nicolás Horn', link: 'https://nicohorn.com' },
      { name: 'Amilcar Rey', link: 'https://github.com/amilcarrey' },
    ],
    tags: [
      '/tags/typescript.svg',
      '/tags/next.svg',
      '/tags/tailwind.svg',
      '/tags/docker.svg',
    ],
    images: ['/uap/uap1.png', '/uap/uap2.png', '/uap/uap3.png'],
  },
  {
    name: 'Odontogram',
    shortDescription: 'A application for dentists',
    generalDescription: 'This application was developed for odontology students at a university, they had the need to store procedure-based data that usually was just drawn on paper. The challenge was drawing an interface, that would allow them to select each tooth, and the correct side of it, to save procedures that were done, or schedule to be done.',
    stackDescription:'For this application we chose to use Vue, and also the component library Vuetify, so that main UI was quickly done, and we could focus specifically on the odontogram. This problem was solved using W3 a tool that allowed me to create all the teeth recursively, but keeping track of the unique identifiers.',
    link: 'https://practicas-fcs.uap.edu.ar/',
    devs: [
      { name: 'Boris Kerbs', link: 'https://github.com/Boris-sys' },
      { name: 'Gonzalo Miranda', link: 'https://github.com/Gonza-jmmss' },
    ],
    tags: ['/tags/vue.svg', '/tags/node.svg', '/tags/js.svg'],
    images: ['/odo/odo2.png', '/odo/odo1.png', '/odo/odo3.png'],
  },
  {
    name: 'Stadium Pass',
    shortDescription: 'An NFT minting page',
    generalDescription: 'An NFT project, that needed mostly marketing and later on a site to mint the product by interacting with Solidity contracts. It consists in a freshly animated and attractive landing page. Amilcar was in charge of writing the Solidity code.',
    stackDescription: 'I developed the project in NextJS, with Tailwind for most of the UI. Also used GSAP to handle animations and provide a good UX. The project included a ETH wallet connection in the website, but later on the NFT product never saw the light of day (as many projects do).',
    link: 'https://www.stadiumpass.io/',
    devs: [{ name: 'Amilcar Rey', link: 'https://github.com/amilcarrey' }],
    tags: ['/tags/next.svg', '/tags/tailwind.svg', '/tags/sol.svg'],
    images: ['/stad/sp2.webp', '/stad/sp1.png', '/stad/sp3.png'],
  },
]
export default projectList
