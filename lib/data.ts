import React from "react";
import { MdLeaderboard } from "react-icons/md";
import { FaChalkboardTeacher, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thread from "@/public/thread.png";
import hurricane from "@/public/hurricane.png"
import face from "@/public/face.png"
import menace from "@/public/menace.png"
import YOLO from "@/public/YOLO.png"
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineLeaderboard } from "react-icons/md";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certificates",
    hash: "#Certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Aitchison College,",
    location: "Lahore, Pakistan",
    description: "Graduated from Aitchison College, served as Vice President of the Computer Science Club. Led technological initiatives,  national competitions and hands-on workshops in web development, Python, and Arduino, enhancing the computational expertise of my peers.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2016 - May 2021",
  },
  {
    title: "Web Developer at TransData",
    location: "Woodbridge, NJ (Remote)",
    description: "Enhanced business operations by developing four web applications, improving user engagement by 20%. Achieved a 75% increase in customer satisfaction through targeted UI/UX enhancements and ensured application security and scalability.",
    icon: React.createElement(IoBriefcaseOutline),
    date: "Aug 2021 - Dec 2021",
    
  },
  {
    title: "Data Acquisition Engineer at Georgia Tech Off-Road",
    location: "Atlanta, GA",
    description: "Spearheaded the design and maintenance of a data acquisition system, enhancing R&D with yearly design improvements by up to 5%. Implemented a real-time data integration system, improving testing efficiency by 20%, and boosted data validation accuracy by 70%, accelerating product development.",
    icon: React.createElement(LiaToolsSolid ),
    date: "Jan 2022 - May 2022",

  },
  {
    title: "Organizer at Effective Altruism, Georgia Tech",
    location: "Atlanta, GA",
    description: "Led the AI Safety Fundamentals Fellowship, introducing innovative approaches to Myopic Decision Theory. Aiming to enhance the fellowship with new updates and materials to spark interest in AI safety at Georgia Tech.",
    icon: React.createElement(MdOutlineLeaderboard ),
    date: "August 2023 - Present",
},
  {
    title: "Undergraduate AI Researcher",
    location: "Atlanta, GA",
    description: "Leveraged GNNs (SchNet, CGCNN) to predict material properties from atomic structures with high accuracy (0.129 test error on QM9). Fine-tuned LLMs (LLaMA, Gemma, Mistral) on crystal data (CIF, Z-matrix) to generate novel material structures using efficient training methods.",
    icon: React.createElement(FaReact),
    date: "August 2023 - Present",  
  },
  {
    title: "Undergraduate TA – Computer Systems & Networks",
    location: "Atlanta, GA",
    description: "Supporting over 150 students in topics like Multithreading, Virtual Memory, OSI Model, and ISA. Lead weekly labs on debugging C and Assembly with GDB, and collaborate with faculty to enhance course materials and student engagement.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "January 2025 – Present",
  }
  
  
  
  
] as const;

export const projectsData = [
  {
    title: "Menace CLI",
    description: "Built a intelligent terminal that assists you with system operations, execute commands, write code for you, do PR reviews for you and even write comments and read me files for you on your github. ",
    tags: ["Go", "CLI", "LLM", "OpenAI",  "GPT-4", "Claude", "Bubble Tea", "LangChain", ],
    imageUrl: menace,
    url: "https://github.com/PramaYudhistira/menace",

  },
  {
    title: "Football Player Detection and Analysis",
    description: "Built an advanced computer vision system using YOLO for real-time player detection and tracking during football matches.",
    tags: ["Python, Kaggle, Roboflow" ],
    imageUrl: YOLO,
    url: "https://github.com/Serhan-Asad/YOLO",

  },
  {
    title: "Threads App",
    description: "In this project, I developed a full-stack MERN application leveraging Next.js 14, integrating React for the frontend, TypeScript for static type checking, and MongoDB for the database.",
    tags: ["Next.js", "Clerk", "Tailwind CSS", "MongoDB", "Shadcn", "Figma", "Zod"],
    imageUrl: thread,
    url: "https://threads-app-roan-one.vercel.app/", 
  },
  {
    title: "Face Recognition System",
    description:
      "Developed a TensorFlow-based face recognition system using FaceNet's algorithms, achieving 98% accuracy in verification with L2 distance calculations for secure identity checks. Enhanced with Neural Style Transfe",
    tags: ["TensorFlow"],
    imageUrl: face,
  },
  {
    title: "Big Data Big Impact",
    description: "Led frontend development for a Georgia Tech project, crafting a web app that maps and analyzes hurricane damages using neural networks. Achievied a 40% faster damage cost estimation.",
    tags: ["React", "Figma", "Google API", "D3.js", "Data Visualization"],
    imageUrl: hurricane,
    url: "https://github.com/Serhan-Asad/hurricane-cost-predictor",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Java",
  "TensorFlow",
  "C++",
  "C",
  "NumPy",
  "Figma",
  "SQL",
  "JavaFX",
  "Entity Framework",
  "Docker",
  "AWS",
  "Heroku",
  "Vercel",
  "GraphQL",

] as const;
