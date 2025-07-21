import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaGitAlt, FaPython, FaDatabase, FaBrain, FaSitemap, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql } from 'react-icons/si';


const SkillCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-4 text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      icon: FaReact,
      title: "React & React Native",
      description: "Building modern, responsive web and mobile applications with React and React Native."
    },
    {
      icon: SiJavascript,
      title: "JavaScript & TypeScript",
      description: "Writing clean, efficient code for both frontend and backend development."
    },
    {
      icon: FaNode,
      title: "Node.js",
      description: "Developing fast and scalable server-side applications and APIs."
    },
    {
      icon: FaPython,
      title: "Python",
      description: "Utilizing Python for various applications, including scripts and backend systems."
    },
    {
      icon: FaDatabase,
      title: "SQL & NoSQL",
      description: "Designing and managing both relational (PostgreSQL) and non-relational (MongoDB) databases."
    },
    {
      icon: FaGitAlt,
      title: "Version Control",
      description: "Proficient with Git for version control and collaborative development workflows."
    },
     {
      icon: SiCplusplus,
      title: "C++",
      description: "Strong foundation in C++ for performance-critical applications and algorithms."
    },
    {
      icon: SiTailwindcss,
      title: "API Development",
      description: "Designing and building robust and secure RESTful APIs."
    },
     {
      icon: FaSitemap,
      title: "System Design",
      description: "Architecting scalable and efficient software systems and applying clean code principles."
    },
    {
      icon: FaCloud,
      title: "Azure Blob Storage",
      description: "Experience with Azure Blob Storage for secure cloud file management."
    },
    {
      icon: FaBrain,
      title: "Deep Learning & Computer Vision",
      description: "Developing systems with a focus on Deep Learning and Computer Vision."
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium mb-2 block">
            TECHNOLOGIES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            And many more technologies that I work with to create amazing digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 