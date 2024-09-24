import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const Links = [
    { name: "Home", to: 'home' },
    { name: "About", to: 'about' },
    { name: "Skills", to: 'skills' },
    { name: "Project", to: 'project' },
    { name: "Contact", to: 'contact' },
  ];
 
 export const Details = {
    name: "Sam Joshua",
    quotes:"Building Software Which Makes Others Lives Easier",
    about:"I am a dedicated software developer with a strong passion for full-stack development. I have experience creating various personal projects and am always open to learning new technologies or frameworks. I enjoy tackling challenges and am constantly striving to improve my skills."
  };

  export const icons = [
    { icon: <FaLinkedin />, key: 'linkedin', link: 'https://www.linkedin.com/in/sam-joshua-03082002p/' },
    { icon: <SiLeetcode />, key: 'leetcode', link: 'https://www.leetcode.com' },
    { icon: <FaGithub />, key: 'github', link: 'https://github.com/samjoshua2002' }
  ];
  export const socialLinks = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sam-joshua-03082002p/" },
    { icon: <SiLeetcode />, link: "https://www.leetcode.com" },
    { icon: <FaGithub />, link: "https://github.com/samjoshua2002" }
];
  export const data = [
    {
        "id": 1,
        "type": "edu",
        "name": "B.E (CSE)",
        "sub_name": "Panimalar Institute Of Technology Chennai",
        "year": "Sep 2020 - Apr 2024"
    },
    {
        "id": 2,
        "type": "edu",
       "name": "Higher Secondary (CS)",
        "sub_name": "St. John's Matriculation Higher Secondary School",
        "year": "Feb 2018 - Apr 2020"
    },
    {
        "id": 3,
        "type": "exp",
        "name": "Stock Market Prediction",
        "sub_name": "Forecasting Stock Prices using Machine Learning",
        "year": "Feb 2024 - Apr 2024"
    },
    {
        "id": 4,
        "type": "exp",
        "name": "FreeLance",
        "sub_name": "Ability Fusions",
        "year": "July 2024 - Sept 2024"
    },
]
