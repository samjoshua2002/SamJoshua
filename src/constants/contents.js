import { SiLeetcode, SiMysql, SiSpring, SiPostman } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt,FaLinkedin, FaGithub  } from 'react-icons/fa';


export const Links = [
    { name: "Home", to: 'home' },
    { name: "About", to: 'about' },
    { name: "Skills", to: 'skills' },
    { name: "Project", to: 'project' },
    { name: "Contact", to: 'contact' },
  ];
 
 export const Details = {
    name: "Sam Joshua",
    email:"samjoshuacs2002@gmail.com",
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
];
export const info = [
  {
      title: 'Languages',
      content: [
          { icon: <FaHtml5 />, name: 'HTML' },
          { icon: <FaCss3Alt />, name: 'CSS' },
          { icon: <FaJs />, name: 'JavaScript' },
         
          { icon: <FaJava />, name: 'Java' },
          { icon: <SiMysql />, name: 'MySQL' }
        
      ]
  },
  {
      title: 'Frameworks',
      content: [
          { icon: <SiSpring/>, name: 'Spring' },
          { icon: <FaReact />, name: 'React.js' },
          { icon: <FaNodeJs />, name: 'Node.js' }
      ]
  },
  {
      title: 'Tools',
      content: [
          { icon: <FaGitAlt />, name: 'Git' },
          { icon: <FaGithub />, name: 'Github' },
          { icon: <SiPostman />, name: 'Postman' },
          
      ]
  }
];
export const cardData = [
  {
    "imgSrc": "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088",
    "imgAlt": "HackerRank Logo",
    "title": "Python Basics Certificate",
    "badge": "HackerRank",
    "content": "This certificate demonstrates proficiency in Python fundamentals, including data types, control structures, functions, and basic data structures and problem-solving techniques.",
    "link": "https://www.hackerrank.com/certificates/eb10c466597e",
    "linkText": "Certificate Link"
  },
  
    {
      imgSrc: "https://play-lh.googleusercontent.com/oDuTGEHru1KMr3QOfQfPKgIdNnlq3WWQxpBYND23r2a7RVnS1HW0t7dyON86Vn_QhtM=s180",
      imgAlt: "internshala Logo",
      title: "Core Java",
      badge: "Udemy",
      content: `The training consisted of Getting Started with Java, Leveraging Basic Concepts, Object Oriented 
Programming, and Java App Development modules. `,
      link: "https://www.udemy.com/certificate/UC-0e38beb0-08b0-400d-9cfc-67ed7efe5c5b/",
      linkText: "View Certificate",
    },
    {
      "imgSrc": "https://th.bing.com/th/id/OIP.6UcGSsW6bL2Q7DhoGgqZ2AAAAA?rs=1&pid=ImgDetMain",
      "imgAlt": "Udemy",
      "title": "Full-Stack Blog Project Application using Node.js, Express, React, and MongoDB",
      "badge": "Udemy",
      "content": "In this project, I developed a full-stack blogging application that allows users to create, edit, and delete posts. Express for the backend, along with React for the frontend,  This project enhanced my skills in MongoDB.",
      "link": "https://www.udemy.com/certificate/UC-bbc65957-6112-400e-9735-a8768a6ac5cd/",
      "linkText": "Certificate Link"
    },
    
    {
      "imgSrc": "https://th.bing.com/th/id/OIP.MZ0GavnVMQNAaNW_0u11aAHaE8?rs=1&pid=ImgDetMain",
      "imgAlt": "",
      "title": "Internship",
      "badge": "ARMTECH COMPUTER SERVICE Pvt. Ltd.",
      "content": "During my internship at ARMTECH COMPUTER SERVICE, I gained  experience in networking technologies. I learned about network configurations, troubleshooting, and optimizing network performance. ",
      "link": "",
      "linkText": "Certificate Link"
    },
    
  ];