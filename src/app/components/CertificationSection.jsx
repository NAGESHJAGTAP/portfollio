"use client";
import React, { useState, useRef } from "react";
import CertificateCard from "./CertificateCard";
import CertificateTag from "./CertificateTag";
import { motion, useInView } from "framer-motion";

const certificatedata = [
  {
    id: 1,
    title: "Learning Full Stack Development",
    description: "Successfully completed the Full Stack Development course offered by Infosys Springboard. The course covered both frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, along with project-building and deployment practices.",
    image:"/certificate/learningfullstackdevlopment.jpeg",
    tag: ["All", "Web"],
    previewUrl: "https://verify.onwingspan.com",
  },
  {
    id: 2,
    title: "Introduction to C Certification",
    description: "Successfully completed the “Introduction to C” course on Sololearn. This course covered the basics of the C programming language, including data types, loops, conditionals, functions, arrays, and pointers.",
    image:"/certificate/introductioncpp.jpeg",
    tag: ["All", "programming"],
    previewUrl: "https://api2.sololearn.com/v2/certificates/CC-GR5LMJ4Y/image/png?t=638755669303915700",
  },
  {
    id: 3,
    title: "JavaScript (Basic) Certification",
    description: "Earned a skill certification from HackerRank by passing the JavaScript (Basic) assessment, which tested core programming concepts like variables, loops, functions, arrays, and basic problem-solving using JavaScript.",
    image:"/certificate/javascript_basic.png",
    tag: ["All", "others"],
    previewUrl: "https://www.hackerrank.com/certificates/iframe/457e11b81178",
  },
  {
    id: 4,
    title: "Mastering JavaScript Fundamentals",
    description: "Successfully completed the course “Mastering JavaScript Fundamentals” offered by Geeksster. The course covered core JavaScript concepts including variables, functions, conditionals, loops, arrays, and objects.",
    image:"/certificate/mastringjavascript.jpeg",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/19OtCaf_HGiMB1RdkcdWClShYs7UhKTjT/view?usp=sharing",
  },
  {
    id: 5,
    title: "JavaScript (Intermediate) Certification",
    description: "Successfully passed the HackerRank Intermediate JavaScript skill certification, which tested deeper knowledge of JavaScript",
    image:"/certificate/javascriptintermideted.jpeg",
    tag: ["All", "programming"],
    previewUrl: "https://www.hackerrank.com/certificates/iframe/b8ef7695a34a",
  },
  {
    id: 6,
    title: "Introduction to the Basics of Azure Services",
    description: "Successfully completed the online course that introduced core Microsoft Azure services, including cloud concepts, infrastructure, and platform services. This course built foundational knowledge to understand and explore Azure’s tools and features.",
    image:"/certificate/basicazureservice.jpeg",
    tag: ["All", "others"],
    previewUrl: "https://simpli.app.link/Dpbzyh0dBTb",
  },
  {
    id: 8,
    title: "SQL Certification: Basic to Advance",
    description: "Completed a comprehensive course on SQL, covering fundamentals to advanced topics such as data queries, joins, subqueries, aggregate functions, indexing, and database optimization techniques.",
    image:"/certificate/cssbasic.png",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1W1SdRI7Ozc4YPCmZIPwpErS7_NsydnhG/view?usp=sharing",
  },
  {
    id: 9,
    title: "Figma Bootcamp",
    description: "Completed a hands-on bootcamp focused on UI/UX design using Figma, including frame structuring, prototyping, component creation, and user flow design. Learned practical skills for building modern and responsive user interfaces.",
    image:"/certificate/figmabootcamp.png",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1Y7BGCXQb5y6P3kMH6PI_BHwhwcWfQj_7/view?usp=sharing",
  },
  {
    id: 10,
    title: "React Bootcamp",
    description: "Successfully completed a 3-day intensive React Bootcamp organized by LetsUpgrade, in collaboration with NSDC, ITM Edutech, and GDG MAD. Gained hands-on experience with React fundamentals, component-based architecture, and modern front-end development best practices.",
    image:"/certificate/reactbootcamp.png",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1jrpVW2XvPHSNhoEI5P5rW4OFts-fzRvT/view?usp=sharing",
  },
  {
    id: 11,
    title: "JavaScript Bootcamp",
    description: "Completed a 3-day intensive bootcamp covering the fundamentals of JavaScript programming. This course focused on key concepts such as variables, functions, loops, DOM manipulation, and event handling, helping to build a solid foundation in web development.",
    image:"/certificate/javascriptbootcamp.png",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1klq4ks8yAG8sUKI06H0-1a0H-glJvkqy/view?usp=sharing",
  }
];

const CertificateSection = () => {
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = certificatedata.filter((certificate) =>
  certificate.tag.includes(tag)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="certificates" className="mt-10">
      <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 dark:text-gray-900">
        My Certificates
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <CertificateTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <CertificateTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <CertificateTag
          onClick={handleTagChange}
          name="programming"
          isSelected={tag === "programming"}
        />
        {/* <CertificateTag
          onClick={handleTagChange}
          name="Tech"
          isSelected={tag === "Tech"}
        /> */}
        <CertificateTag
          onClick={handleTagChange}
          name="others"
          isSelected={tag === "others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <CertificateCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CertificateSection;
