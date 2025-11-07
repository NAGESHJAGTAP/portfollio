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
    image:"../../public/certificates/Screenshot_5-6-2025_161629_.jpeg",
    tag: ["All", "Web"],
    previewUrl: "https://verify.onwingspan.com",
  },
  {
    id: 2,
    title: "Introduction to C Certification",
    description: "Successfully completed the “Introduction to C” course on Sololearn. This course covered the basics of the C programming language, including data types, loops, conditionals, functions, arrays, and pointers.",
   image:"https://raw.githubusercontent.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/refs/heads/main/portfollio/src/assets/Screenshot%202025-05-23%20211109.png?token=GHSAT0AAAAAADGZJS67MPLIIUWB2G2PINCK2HWHSJA",
    tag: ["All", "programming"],
    previewUrl: "https://api2.sololearn.com/v2/certificates/CC-GR5LMJ4Y/image/png?t=638755669303915700",
  },
  {
    id: 3,
    title: "JavaScript (Basic) Certification",
    description: "Earned a skill certification from HackerRank by passing the JavaScript (Basic) assessment, which tested core programming concepts like variables, loops, functions, arrays, and basic problem-solving using JavaScript.",
    image:"",
    tag: ["All", "others"],
    previewUrl: "https://www.hackerrank.com/certificates/iframe/457e11b81178",
  },
  {
    id: 4,
    title: "Mastering JavaScript Fundamentals",
    description: "Successfully completed the course “Mastering JavaScript Fundamentals” offered by Geeksster. The course covered core JavaScript concepts including variables, functions, conditionals, loops, arrays, and objects.",
    image:"https://raw.githubusercontent.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/refs/heads/main/portfollio/src/assets/Screenshot%202025-05-20%20185929.png?token=GHSAT0AAAAAADGZJS67VVFFLHAN3JLKFOSO2HT7FIQ",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/19OtCaf_HGiMB1RdkcdWClShYs7UhKTjT/view?usp=sharing",
  },
  {
    id: 5,
    title: "JavaScript (Intermediate) Certification",
    description: "Successfully passed the HackerRank Intermediate JavaScript skill certification, which tested deeper knowledge of JavaScript",
    image:"https://raw.githubusercontent.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/refs/heads/main/portfollio/src/assets/Screenshot%202025-05-21%20102615.png?token=GHSAT0AAAAAADGZJS664MK4CGB7NMNATIX22HT7EKQ",
    tag: ["All", "programming"],
    previewUrl: "https://www.hackerrank.com/certificates/iframe/b8ef7695a34a",
  },
  {
    id: 6,
    title: "Introduction to the Basics of Azure Services",
    description: "Successfully completed the online course that introduced core Microsoft Azure services, including cloud concepts, infrastructure, and platform services. This course built foundational knowledge to understand and explore Azure’s tools and features.",
    image:"https://raw.githubusercontent.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/refs/heads/main/portfollio/src/assets/Screenshot%202025-05-23%20211109.png?token=GHSAT0AAAAAADGZJS67U62VZOPI4FCF4EX62HT7CTA",
    tag: ["All", "others"],
    previewUrl: "https://simpli.app.link/Dpbzyh0dBTb",
  },
  {
    id: 7,
    title: "Complete Git and GitHub Course",
    description: "Successfully completed a detailed course focused on Git version control and GitHub collaboration workflows. Covered essential commands, branching, merging, pull requests, and real-world version control practices.",
    image:"",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1iJtyVpfGVfVAAf-C2nDGK4_kdkGvRk8R/view?usp=sharing",
  },
  {
    id: 8,
    title: "SQL Certification: Basic to Advance",
    description: "Completed a comprehensive course on SQL, covering fundamentals to advanced topics such as data queries, joins, subqueries, aggregate functions, indexing, and database optimization techniques.",
    image:"",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1W1SdRI7Ozc4YPCmZIPwpErS7_NsydnhG/view?usp=sharing",
  },
  {
    id: 9,
    title: "Figma Bootcamp",
    description: "Completed a hands-on bootcamp focused on UI/UX design using Figma, including frame structuring, prototyping, component creation, and user flow design. Learned practical skills for building modern and responsive user interfaces.",
    image:"",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1Y7BGCXQb5y6P3kMH6PI_BHwhwcWfQj_7/view?usp=sharing",
  },
  {
    id: 10,
    title: "React Bootcamp",
    description: "Successfully completed a 3-day intensive React Bootcamp organized by LetsUpgrade, in collaboration with NSDC, ITM Edutech, and GDG MAD. Gained hands-on experience with React fundamentals, component-based architecture, and modern front-end development best practices.",
    image:"https://raw.githubusercontent.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/refs/heads/main/portfollio/src/assets/Screenshot%202025-05-20%20173350.png?token=GHSAT0AAAAAADGZJS66IMMIFWY6ZHAS7DEE2HT7G2Q",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1jrpVW2XvPHSNhoEI5P5rW4OFts-fzRvT/view?usp=sharing",
  },
  {
    id: 11,
    title: "JavaScript Bootcamp",
    description: "Completed a 3-day intensive bootcamp covering the fundamentals of JavaScript programming. This course focused on key concepts such as variables, functions, loops, DOM manipulation, and event handling, helping to build a solid foundation in web development.",
    image:"https://raw.githubusercontent.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/refs/heads/main/portfollio/src/assets/Screenshot%202025-05-20%20174617.png?token=GHSAT0AAAAAADGZJS67Q4EGFOLKVMTJ4NRG2HT7F2Q",
    tag: ["All", "others"],
    previewUrl: "https://drive.google.com/file/d/1klq4ks8yAG8sUKI06H0-1a0H-glJvkqy/view?usp=sharing",
  }
];

const CertificateSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = certificatedata.filter((certificate) =>
  certificate.tag.includes(tag)
  );

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
