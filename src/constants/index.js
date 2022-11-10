import { rest, pf, eco, mongo, tailwind,js,git, react, html, mysql, linkedin, twitter,mobile, web, database,  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "stat",
    title: "Stats",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Contact",
    title: "Contact",
  }
  
];



export const features = [
  {
    id: "feature-1",
    icon: web,
    title: "Web Development",
    content: "I develop scalable & robust web applications for your business using modern architecture and technologies."
   
  },
  {
    id: "feature-2",
    icon: mobile,
    title: "Mobile app Development",
    content:
            "I develop mobile applications using the modern stack for cross-platform applications. I have worked with both React native and Flutter "    
  },
  {
    id: "feature-3",
    icon: database,
    title: "Databases",
    content:
      "Data is the new oil, I am comfortable with both NoSQL and SQL databases. I have worked with MongoDB and MySQL"
     
  },

  

];

export const feedback = [
  {
    id: "feedback-1",
    name: "E-commerce Site",
    title: "",
    content:
      "Built an E-commerce site using PHP, React and MySQL",
    
    img: eco,
    
  },
  {
    id: "feedback-2",
    content:
                "Created with React, ViteJS, Tailwind CSS and HTML",
    name: "Personal Portfolio",
    title: "",
    img: pf,
    
  },
  {
    id: "feedback-3",
    content:
      "Developed a restaurant management for a school project system using Python ",
    name: "Restaurant System ",
    title: "",
    img: rest,
  
    
  },
 
  
];

export const stats = [
  {
    id: "stats-1",
    title: "On-time project completion",
    value: "98%"
  },
  {
    id: "stats-2",
    title: "Happy clients",
    value: "15+",
  },
  {
    id: "stats-3",
    title: "Years active",
    value: "4",
  },
];

export const footerLinks = [
  {
    title: "Skills:",
    links: [
      {
        name: "Git",
        
      },
      {
        name: "Linux",
       
      },
      {
        name: "AWS",
      },
      
    ],
  },
  {
    title: "Location",
    links: [
      {
        name: "Nairobi",
        

      },
     
    ],
  },
  {
    title: "Social sites:",
    links: [
      {
        name: "Gmail",
        link: "koechfestus88@gmail.com"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/festus-koech",
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/fe_koech",
      },
    
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: git,
    link: "https://github.com/FestusKoech",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/@fe_koech",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/festus-koech",
  },
    
];

export const clients = [
  {
    id: "client-1",
    logo: html,
  },
  {
    id: "client-2",
    logo: mysql,
  },
  {
    id: "client-3",
    logo: mongo,
  },
  {
    id: "client-4",
    logo: js,
  },
  {
    id: "client-5",
    logo: tailwind,
  },
  {
    id: "client-6",
    logo: react,
  }
 
];