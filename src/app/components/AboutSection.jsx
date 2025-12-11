// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//     <ul className="list-disc pl-4 space-y-1">
//   <li>Frontend: React, HTML, CSS, JavaScript, Tailwind CSS, API Integration</li>
//   <li>Backend: Node.js, Express, RESTful APIs, MongoDB</li>
//   <li>Programming Languages: JavaScript, C</li>
//   <li>UI/UX & Design: Figma</li>
//   <li>Version Control & Deployment: Git/GitHub, Vercel, Netlify</li>
// </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//     <ul className="list-disc pl-4 space-y-1">
//   <li>B.Tech CSE (Full-Stack Web Development) – Rai University, Ahmedabad X CodingGita | 2024 – 2028</li>
//   <li>12th – Sukhadevanand Junior College, Bhandegaon | 07/2021 – 03/2023</li>
//   <li>10th – Sukhadevanand School & High School, Bhandegaon | 06/2020 – 03/2021</li>
// </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Full Stack Development with React & Node JS - Live</li>
//         <li>Learn C++ Programming -Beginner to Advance- DeepDive in C++</li>
//         <li>Git & GitHub Master Course (2022)</li>
//         <li>IEEE Membership certificate</li>
//         <li>Divide and Conquer, Sorting and Searching, and Randomized Algorithms</li>
//         <li>Crash Course on Python</li>
//         <li>Learn Python Programming Masterclass</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Experience",
//     id: "Experience",
//     content: (
//     <ul className="list-disc pl-4 space-y-1">
//   <li>
//     <strong>CouponSwap (MERN Project)</strong> – Full-Stack Developer
//     <br />Built a secure platform to buy, sell, and trade Amazon, Flipkart, and other company coupons. Integrated RESTful APIs, ensured fast and seamless transactions.
//   </li>
//   <li>
//     <strong>BrewBank</strong> – Frontend Developer
//     <br />Developed a dynamic React app integrating Banking, Cocktails, Meals, and Harry Potter APIs. Implemented responsive UI and real-time data interaction for seamless user experience.
//   </li>
//   <li>
//     <strong>Coding Gita Bootcamp</strong> – Full-Stack Development Training
//     <br />Hands-on experience with React, Node.js, Express, MongoDB, RESTful APIs, JavaScript, Tailwind CSS, and UI/UX design.
//   </li>
// </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white" id="about">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         <Image src="/images/aboutphoto.png" width={500} height={500} alt="Hey I am Prashuk jain , Welcome to JainPrashuk homepage. Discover more about my journey in engineering and development. i am Third-year engineering student at Lovely Professional University in Punjab, passionate about becoming a full-stack developer. Eager to learn, apply skills to real projects, and a strong team player. currently a chegg expert , ex- web lead ieee cis lpu , upcoming sde" />
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4 dark:text-gray-900">About Me</h2>
//   <p className="text-base lg:text-lg dark:text-gray-900">
//   I am a highly motivated Full-Stack Web Developer passionate about building modern, scalable, and high-performance web applications. With expertise in <strong>React.js</strong> for frontend development and <strong>Node.js</strong> with <strong>MongoDB</strong> for backend architecture, I specialize in creating seamless, user-friendly, and efficient digital solutions.
// </p>
// <p className="text-base lg:text-lg dark:text-gray-900">
//   My technical skills include <strong>JavaScript, React.js, Node.js, MongoDB, MySQL, Express.js, RESTful APIs, Tailwind CSS, HTML, CSS, and Git/GitHub</strong>, complemented by experience in <strong>UI/UX design using Figma</strong>. This enables me to develop applications that are both functional and visually appealing, ensuring an optimal user experience.
// </p>
// <p className="text-base lg:text-lg dark:text-gray-900">
//   I thrive on solving complex problems, optimizing performance, and implementing best coding practices to enhance usability, security, and scalability. Whether designing interactive UIs, managing databases, or developing RESTful APIs, I am committed to delivering high-quality, robust solutions.
// </p>

// <p className="text-base lg:text-lg dark:text-gray-900">
//   Currently, I am refining my skills under the mentorship of <strong>Neel Sir (Co-founder, Coding Gita BootCamp)</strong>, gaining industry insights and hands-on experience in modern web development and DevOps practices.
// </p>
//           <div className="flex flex-row justify-start mt-8">
//             <TabButton
//               selectTab={() => handleTabChange("skills")}
//               active={tab === "skills"}
//             >
//               {" "}
//               Skills{" "}
//             </TabButton>
//             <TabButton
//               selectTab={() => handleTabChange("education")}
//               active={tab === "education"}
//             >
//               {" "}
//               Education{" "}
//             </TabButton>
//             {/* <TabButton
//               selectTab={() => handleTabChange("certifications")}
//               active={tab === "certifications"}
//             >
//               {" "}
//               Certifications{" "}
//             </TabButton> */}
//             <TabButton
//               selectTab={() => handleTabChange("Experience")}
//               active={tab === "Experience"}
//             >
//               {" "}
//               Experience{" "}
//             </TabButton>
//           </div>
//           <div className="mt-8 dark:text-gray-900">
//             {TAB_DATA.find((t) => t.id === tab).content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;








"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Frontend: React, HTML, CSS, JavaScript, Tailwind CSS, API Integration</li>
        <li>Backend: Node.js, Express, RESTful APIs, MongoDB</li>
        <li>Programming Languages: JavaScript, C</li>
        <li>UI/UX & Design: Figma</li>
        <li>Version Control & Deployment: Git/GitHub, Vercel, Netlify</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>B.Tech CSE (Full-Stack Web Development) – Rai University, Ahmedabad X CodingGita | 2024 – 2028</li>
        <li>12th – Sukhadevanand Junior College, Bhandegaon | 07/2021 – 03/2023</li>
        <li>10th – Sukhadevanand School & High School, Bhandegaon | 06/2020 – 03/2021</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Full Stack Development with React & Node JS - Live</li>
        <li>Learn C++ Programming - Beginner to Advance - DeepDive in C++</li>
        <li>Git & GitHub Master Course (2022)</li>
        <li>IEEE Membership certificate</li>
        <li>Divide and Conquer, Sorting and Searching, and Randomized Algorithms</li>
        <li>Crash Course on Python</li>
        <li>Learn Python Programming Masterclass</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <strong>CouponSwap (MERN Project)</strong> – Full-Stack Developer
          <br />Built a secure platform to buy, sell, and trade Amazon, Flipkart, and other company coupons. Integrated RESTful APIs and ensured fast, seamless transactions.
        </li>
        <li>
          <strong>BrewBank</strong> – Frontend Developer
          <br />Developed a dynamic React app integrating Banking, Cocktails, Meals, and Harry Potter APIs. Implemented responsive UI and real-time data interaction.
        </li>
        <li>
          <strong>Coding Gita Bootcamp</strong> – Full-Stack Development Training
          <br />Hands-on experience with React, Node.js, Express, MongoDB, RESTful APIs, JavaScript, Tailwind CSS, and UI/UX design.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/aboutphoto.png"
          width={500}
          height={500}
          alt="Hey I am Prashuk Jain, Welcome to JainPrashuk homepage. Discover more about my journey in engineering and development. I am a Third-year engineering student at Lovely Professional University in Punjab, passionate about becoming a full-stack developer. Eager to learn, apply skills to real projects, and a strong team player. Currently a Chegg expert, ex-web lead IEEE CIS LPU, upcoming SDE"
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 dark:text-gray-900">About Me</h2>
          <p className="text-base lg:text-lg dark:text-gray-900 mb-4">
            I&apos;m a passionate Full-Stack Web Developer specializing in React.js and Node.js with MongoDB. I&apos;ve built projects like CouponSwap and BrewBank, focusing on scalable, user-friendly applications. 
          </p>
          <p className="text-base lg:text-lg dark:text-gray-900 mb-4">
            My skills include JavaScript, React.js, Node.js, MongoDB, MySQL, Express.js, RESTful APIs, Tailwind CSS, HTML, CSS, and Git/GitHub, plus UI/UX design with Figma.
          </p>
          <p className="text-base lg:text-lg dark:text-gray-900 mb-4">
            I excel at solving problems, optimizing performance, and ensuring security and scalability in my solutions.
          </p>
          <p className="text-base lg:text-lg dark:text-gray-900 mb-6">
            Currently honing skills under Neel Sir's mentorship at Coding Gita BootCamp.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-2 flex-wrap">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"}>
              Experience
            </TabButton>
          </div>
          <div className="mt-8 dark:text-gray-900">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
