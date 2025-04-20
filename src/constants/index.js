const navLinks = [
  { name: "Work", link: "#work",},
  { name: "Experience", link: "#experience",},
  { name: "Skills", link: "#skills",},
  { name: "Testimonials", link: "#testimonials",},
];
  
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
  
const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Satisfied Customers" },
  { value: 100, suffix: "%", label: "Results" },
];

const logoIconsList = [
  { imgPath: "/images/logos/logo-01.png",},
  { imgPath: "/images/logos/logo-02.png",},
  { imgPath: "/images/logos/logo-03.png",},
  { imgPath: "/images/logos/logo-04.png",},
  { imgPath: "/images/logos/logo-05.png",},
  { imgPath: "/images/logos/logo-06.png",},
  { imgPath: "/images/logos/logo-07.png",},
  { imgPath: "/images/logos/logo-08.png",},
  { imgPath: "/images/logos/logo-09.png",},
  { imgPath: "/images/logos/logo-10.png",},
  { imgPath: "/images/logos/logo-11.png",},
];
  
const abilities = [
  { imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  { imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  { imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const desStackImgs = [
  { name: "Graphic Designer", imgPath: "/images/des_tools/illustrator.png",},
  { name: "Photos Editor", imgPath: "/images/des_tools/photoshop.png",},
  { name: "UI/UX Designer", imgPath: "/images/des_tools/figma.png",},
  { name: "3D Assests Designer", imgPath: "/images/des_tools/blender.png",},
  { name: "AR/VR Designer", imgPath: "/images/des_tools/unity.png",},
];

const techStackIcons = [
  { name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  { name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  { name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  { name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  { name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

//change responsibilities
const expCards = [
  {
    review: "Aditi brought creativity and technical expertise to the team, significantly improving our frontend performance.",
    imgPath: "/images/duc_exp.png",
    logoPath: "/images/du_connect.png",
    title: "Software Developer",
    date: "January 2024 - March 2024",
    responsibilities: [
      "Developed the MVP platform using React, JavaScript, and Node.js.",
      "Integrated backend APIs and designed responsive frontend components.",
      "Collaborated with the design team to create a user-friendly interface.",
      "Optimized performance and contributed to growing the user base by 800+ new users.",
    ],
  },
  {
    review: "Aditi’s contributions towards AdagioVR has been extremely creative and productive.",
    imgPath: "/images/avr_exp.png",
    logoPath: "/images/adagiovr.png",
    title: "Design Intern",
    date: "May 2024 - July 2024",
    responsibilities: [
      "Conducted in-depth user research and usability studies to improve site experience.",
      "Enhanced the visual and interaction design of the website, doubling user engagement.",
      "Created 3D assets in Blender and Unity for immersive VR applications.",
      "Built a consistent brand identity through a comprehensive brand deck."
    ],
  },
  {
    review: "Aditi’s work on Dream Skrin’s fashion vertical called Dreamor helped in establishing brand imagery.",
    imgPath: "/images/ds_exp.png",
    logoPath: "/images/dream_skrin.png",
    title: "Product Designer Intern",
    date: "January 2025 - March 2025",
    responsibilities: [
      "Led the creation of the visual identity for the fashion vertical.",
      "Conducted market and user research to align brand visuals with target audience.",
      "Designed logos, typography systems, and digital brand assets using Adobe Illustrator and Figma.",
      "Worked closely with developers to ensure accurate design implementation."
    ],
  },
];
  
const expLogos = [
  { name: "logo1",
    imgPath: "/images/du_connect.png",
  },
  { name: "logo2",
    imgPath: "/images/adagiovr.png",
  },
  { name: "logo3",
    imgPath: "/images/dream_skrin.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "Working with Aditi was a game-changer. Her intuitive design thinking and ability to translate user research into engaging UI helped double our user engagement. She’s not just a designer — she’s a problem solver.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Aditi played a pivotal role in developing our MVP at DU Connect. Her technical fluency with React and Node.js, along with her collaborative spirit, helped onboard hundreds of users effortlessly",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review: "Aditi’s IntelliCube project blew us away. Her integration of hardware with AI-driven features for learning support is not just innovative — it’s inspiring. She’s redefining what educational tech can be.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review: "Aditi brings the perfect blend of creativity and engineering. From crafting stunning brand identities in Figma to coding Android apps with Kotlin, she handles every challenge with passion and precision.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review: "As a teammate on multiple hackathon-style builds, I’ve seen Aditi work through complex backend challenges, UI polish, and even deployment — often all in a single sprint. She’s a powerhouse.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Few students can merge design sensitivity with technical excellence like Aditi does. Whether it’s Blender, Unity, or a Node.js server — she picks up tools like a pro and runs with them.",
    imgPath: "/images/client6.png",
  },
];
  
const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png", url: "https://www.instagram.com/_adsri_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
  { name: "fb", imgPath: "/images/fb.png", url: "https://www.facebook.com/share/1ZUSowqagW/?mibextid=wwXIfr"},
  { name: "x", imgPath: "/images/x.png", url: "https://x.com/theliliverco?s=21"},
  { name: "linkedin", imgPath: "/images/linkedin.png", url: "https://www.linkedin.com/in/aditi-srivastav-748418253/"},
  { name: "github", imgPath: "/images/github.png", url: "https://github.com/AditiSrivas"},
];

const designCategories = [
  { title: "Visual Identity",
    color: "#3E84D9",
    projects: [
      { title: 'HOP Visual Identity',
        image: "/images/visual_design/house_of_plant.png",
        description: "House of Plant - A Modern & Minimal Plant Store" 
      },
      { title: 'AdagioVR Visual Identity',
        image: "/images/visual_design/adagio_vi.png",
        description: "AdagioVR - Bridging the Gap in Mental Health space" 
      },
      { title: 'DS Visual Identity',
        image: "/images/visual_design/ds_vi.png",
        description: "Dreamor - Fashion Vertical of Dream Skrin" 
      }
    ]
  },
  { title: "Poster Graphics",
    color: "#61A0DE",
    projects: [
      { title: 'Crypo Craze',
        image: "/images/poster/poster2.png",
        description: "Crypto Craze" 
      },
      { title: 'Hackathon',
        image: "/images/poster/poster3.png",
        description: "" 
      },
      { title: 'TedX',
        image: "/images/poster/poster1.png",
        description: "TedX Sponsorship Poster" 
      }
    ]
  },
  { title: "Social Media Posts",
    color: "#95B7F2",
    projects: [
      { title: 'nss post 1',
        image: "/images/insta/nss1.png",
        description: "NSS IIITD Member" 
      },
      { title: 'nss post 2',
        image: "/images/insta/nss2.png",
        description: "NSS IIITD Member" 
      },
      { title: 'nss post 3',
        image: "/images/insta/nss3.png",
        description: "NSS IIITD Member" 
      },
      { title: 'Taylor Swift Collection 1',
        image: "/images/insta/ts1.png",
        description: "Taylor Swift Stickers" 
      },
      { title: 'Taylor Swift Collection 2',
        image: "/images/insta/ts2.png",
        description: "aylor Swift Post Cards" 
      },
      { title: 'Taylor Swift Collection 3',
        image: "/images/insta/ts3.png",
        description: "aylor Swift Book Marks" 
      },
      { title: 'Adagio Intro 1',
        image: "/images/insta/avr1.png",
        description: "Dr. Pawan Rajpal" 
      },
      { title: 'Adagio Intro 2',
        image: "/images/insta/avr2.png",
        description: "Sanya Rajpal" 
      },
      { title: 'Adagio Intro 3',
        image: "/images/insta/avr3.png",
        description: "Pia Sahni" 
      }
    ]
  },
  { title: "Merchandise Designs",
    color: "#B8D3E8",
    projects: [
      { title: 'merch1',
        image: "/images/merch/merch1.png",
        description: "Sabrina Carpentar as VideoGame" 
      },
      { title: 'merch2',
        image: "/images/merch/merch2.png",
        description: "Olivia Rodrigo as VideoGame" 
      },
      { title: 'merch3',
        image: "/images/merch/merch3.png",
        description: "Sabrina Carpentar Juno" 
      },
        { title: 'merch4',
          image: "/images/merch/tshirt1.png",
          description: "BYLD IIITD Merchandise Backside" 
        },
        { title: 'merch5',
          image: "/images/merch/tshirt2.png",
          description: "BYLD IIITD Merchandise Frontside" 
        }
    ]
  }
];
  
export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  desStackImgs,
  navLinks,
  designCategories,
};