"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CouponSwap",
    description: "A secure platform to buy, sell, and trade Amazon, Flipkart, and other coupons with instant transactions.",
    image: "/images/projects/couponhome.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NAGESHJAGTAP/coupon_swap",
    previewUrl: "https://couponswap.netlify.app/",
    aim: "Build a seamless coupon trading platform.",
    LongDescrption: "CouponSwap allows users to trade and sell coupons easily while integrating secure REST APIs.",
    TechStack: "React, Node.js, Express, MongoDB, Tailwind CSS, JavaScript, HTML & CSS, Postman",
    Learnings: "Learned full-stack integration, API design, and secure transaction management."
  },
  {
    id: 2,
    title: "BrewBank",
    description: "React app integrating Banking, Cocktails, Meals, and Harry Potter APIs with a dynamic, responsive UI.",
    image: "/images/projects/meals.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NAGESHJAGTAP/ract-website-Four-in-One",
    previewUrl: "https://ract-website-four-in-one-3wm8.vercel.app/",
    aim: "Build a multi-API React application with dynamic UI.",
    LongDescrption: "BrewBank integrates multiple APIs for real-time content with a responsive and interactive React interface.",
    TechStack: "React, Tailwind CSS, API Integration, HTML, CSS, JavaScript",
    Learnings: "Enhanced API integration skills and responsive UI design using React and Tailwind CSS."
  },
  {
    id: 3,
    title: "PlacePro",
    description: "Traveler-friendly web app for discovering hospitals, pharmacies, hotels, and more with real-time search and maps.",
    image: "/images/projects/placepro.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio",
    previewUrl: "#",
    aim: "Develop a nearby location app for travelers.",
    LongDescrption: "PlacePro helps travelers find nearby hospitals, pharmacies, hotels, restaurants, and other places with real-time search functionality.",
    TechStack: "React, Node.js, Express, MongoDB, Tailwind CSS, JavaScript, HTML & CSS, Postman",
    Learnings: "Learned full-stack development and map API integration."
  },
  {
    id: 4,
    title: "Kia Website",
    description: "A static HTML/CSS website showcasing Kia cars with features, images, and videos.",
    image: "/images/projects/kia.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NAGESHJAGTAP/kia-Car-Website-Html-css-project",
    previewUrl: "https://kiawebsite.netlify.app/",
    aim: "Showcase Kia cars in a professional static website.",
    LongDescrption: "The website demonstrates Kia car features, images, and embedded videos using static HTML/CSS.",
    TechStack: "HTML, CSS",
    Learnings: "Learned static website design and layout."
  },
  {
    id: 5,
    title: "YouTube Clone",
    description: "YouTube clone built with React.js, featuring video search using YouTube API.",
    image: "/images/projects/youtube.jpg",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/react_youtube",
    previewUrl: "#",
    aim: "Clone YouTube functionality for practice.",
    LongDescrption: "React-based clone demonstrating video search and playback.",
    TechStack: "React, CSS, JavaScript",
    Learnings: "Learned React state management and API integration."
  },
  {
    id: 6,
    title: "Netflix Clone",
    description: "A Netflix clone webpage with sections like Top 10 and Trending Now.",
    image: "/images/projects/netflix.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio",
    previewUrl: "#",
    aim: "Build a Netflix clone webpage.",
    LongDescrption: "Shows trending and popular movies with UI layout similar to Netflix.",
    TechStack: "HTML, CSS",
    Learnings: "Learned layout replication and responsive design."
  },
  {
    id: 7,
    title: "Amazon Clone",
    description: "A simple Amazon Clone with a responsive layout using HTML and CSS.",
    image: "/images/projects/amazon.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/Amazon_clone",
    previewUrl: "#",
    aim: "Create a functional Amazon clone for learning.",
    LongDescrption: "A simple clone demonstrating product listing and layout.",
    TechStack: "HTML, CSS",
    Learnings: "Learned basic clone building and responsive layout."
  },
  {
    id: 8,
    title: "Chessboard",
    description: "A digital chessboard with an 8x8 grid for casual or multiplayer play.",
    image: "/images/projects/chessbord.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/chessbord",
    previewUrl: "#",
    aim: "Build an interactive chessboard.",
    LongDescrption: "Chessboard with 8x8 grid for play.",
    TechStack: "HTML, CSS",
    Learnings: "Learned grid layout and game board creation."
  },
  {
    id: 9,
    title: "",
    description: "YouTube clone built with React.js, featuring video search using YouTube API.",
    image: "/images/projects/kids.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/react_youtube",
    previewUrl: "#",
    aim: "Clone YouTube functionality for practice.",
    LongDescrption: "React-based clone demonstrating video search and playback.",
    TechStack: "React, CSS, JavaScript",
    Learnings: "Learned React state management and API integration."
  },
    {
    id: 10,
    title: "YouTube Clone",
    description: "YouTube clone built with React.js, featuring video search using YouTube API.",
    image: "/images/projects/Calculater.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/react_youtube",
    previewUrl: "#",
    aim: "Clone YouTube functionality for practice.",
    LongDescrption: "React-based clone demonstrating video search and playback.",
    TechStack: "React, CSS, JavaScript",
    Learnings: "Learned React state management and API integration."
  },
    {
    id: 11,
    title: "YouTube Clone",
    description: "YouTube clone built with React.js, featuring video search using YouTube API.",
    image: "/images/projects/sudoku.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/react_youtube",
    previewUrl: "#",
    aim: "Clone YouTube functionality for practice.",
    LongDescrption: "React-based clone demonstrating video search and playback.",
    TechStack: "React, CSS, JavaScript",
    Learnings: "Learned React state management and API integration."
  },
    {
    id: 12,
    title: "YouTube Clone",
    description: "YouTube clone built with React.js, featuring video search using YouTube API.",
    image: "/images/projects/ludo.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/react_youtube",
    previewUrl: "#",
    aim: "Clone YouTube functionality for practice.",
    LongDescrption: "React-based clone demonstrating video search and playback.",
    TechStack: "React, CSS, JavaScript",
    Learnings: "Learned React state management and API integration."
  },
    {
    id: 13,
    title: "YouTube Clone",
    description: "YouTube clone built with React.js, featuring video search using YouTube API.",
    image: "/images/projects/superw.png",
    tag: ["All", "Clone"],
    gitUrl: "https://github.com/NAGESHJAGTAP/react_youtube",
    previewUrl: "#",
    aim: "Clone YouTube functionality for practice.",
    LongDescrption: "React-based clone demonstrating video search and playback.",
    TechStack: "React, CSS, JavaScript",
    Learnings: "Learned React state management and API integration."
  },
  {
    id: 14,
    title: "Coding Gita Website",
    description: "Figma design for a coding bootcamp with an intuitive layout.",
    image: "/images/projects/codinggita.png",
    tag: ["All", "Figma"],
    gitUrl: "#",
    previewUrl: "#",
    aim: "Design a Figma prototype for the bootcamp.",
    LongDescrption: "Clean UI/UX design showcasing the bootcamp structure.",
    TechStack: "Figma, UX Design, Prototyping",
    Learnings: "Learned prototyping and UX design principles."
  },
  {
    id: 15,
    title: "CouponSwap Figma",
    description: "A user-friendly Figma design for trading coupons.",
    image: "/images/projects/coupon.png",
    tag: ["All", "Figma"],
    gitUrl: "#",
    previewUrl: "#",
    aim: "Design a Figma UI for coupon trading.",
    LongDescrption: "Focus on user-friendly interface for coupon trading.",
    TechStack: "Figma, UI Design",
    Learnings: "Learned UI design and prototyping."
  },
  {
    id: 16,
    title: "CouponSwap Figma",
    description: "A user-friendly Figma design for trading coupons.",
    image: "/images/projects/imagin.png",
    tag: ["All", "Figma"],
    gitUrl: "#",
    previewUrl: "#",
    aim: "Design a Figma UI for coupon trading.",
    LongDescrption: "Focus on user-friendly interface for coupon trading.",
    TechStack: "Figma, UI Design",
    Learnings: "Learned UI design and prototyping."
  },
  {
    id: 17,
    title: "CouponSwap Figma",
    description: "A user-friendly Figma design for trading coupons.",
    image: "/images/projects/Nature.png",
    tag: ["All", "Figma"],
    gitUrl: "#",
    previewUrl: "#",
    aim: "Design a Figma UI for coupon trading.",
    LongDescrption: "Focus on user-friendly interface for coupon trading.",
    TechStack: "Figma, UI Design",
    Learnings: "Learned UI design and prototyping."
  },
  {
    id: 18,
    title: "CouponSwap Figma",
    description: "A user-friendly Figma design for trading coupons.",
    image: "/images/projects/instagram.png",
    tag: ["All", "Figma"],
    gitUrl: "#",
    previewUrl: "#",
    aim: "Design a Figma UI for coupon trading.",
    LongDescrption: "Focus on user-friendly interface for coupon trading.",
    TechStack: "Figma, UI Design",
    Learnings: "Learned UI design and prototyping."
  },
  {
    id: 19,
    title: "CouponSwap Figma",
    description: "A user-friendly Figma design for trading coupons.",
    image: "/images/projects/remote.png",
    tag: ["All", "Figma"],
    gitUrl: "#",
    previewUrl: "#",
    aim: "Design a Figma UI for coupon trading.",
    LongDescrption: "Focus on user-friendly interface for coupon trading.",
    TechStack: "Figma, UI Design",
    Learnings: "Learned UI design and prototyping."
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mb-10">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 dark:text-gray-900">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 dark:text-gray-900">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Clone" isSelected={tag === "Clone"} />
        <ProjectTag onClick={handleTagChange} name="Figma" isSelected={tag === "Figma"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              aim={project.aim}
              LongDescrption={project.LongDescrption}
              TechStack={project.TechStack}
              Learnings={project.Learnings}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
