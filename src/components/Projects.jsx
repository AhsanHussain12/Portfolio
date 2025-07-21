import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gray-900 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 z-0"></div>
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="text-blue-400">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
              </a>
            )}

            {project.live && (
              <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
              <FaExternalLinkAlt size={20} />
              </a>
            )}

          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "ResearchMate & ClinicSync – Clinical Platforms",
      subtitle: "Full-Stack Freelance Project",
      description: (
        <>
          <div className="mb-2 text-gray-300">
            <b>ResearchMate</b> streamlines workflows for small clinics, enabling consultancy, collaboration, and insurance claim automation.<br/>
            <b>ClinicSync</b> is a CTMS platform with trial stage tracking, budget negotiation, AI-generated task lists, RBAC, and a centralized file bank.
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs mt-2">
            Code Base Kept Private Under [NDA]
          </span>
        </>
      ),
      technologies: ["React", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "MongoDB", "Azure Blob Storage", "BullMQ", "AI Integration"],
    },
    {
      title: "DenseVision (FYP)",
      description: "Real-time crowd estimation system using a CNN+Transformer architecture for safety and resource planning. Trained on 2,000+ noisy, low-light images.",
      technologies: ["Python", "CNN", "Transformers", "OpenCV"],
      github: "https://github.com/AhsanHussain12/FYP-DENSE-VISION",
     
    },
    {
      title: "Teach Mate",
      description: "A web platform connecting students with tutors, featuring a secure REST API with JWT authentication, role-based access control, and a tutor matching system.",
      technologies: ["React", "Node.js", "Prisma", "Postman"],
      github: "https://github.com/AhsanHussain12/TeachMate",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7279100935992201216/"
    },
    {
      title: "Los Polos Pizzeria",
      description: "A React Native and Firebase application designed to simplify the pizza ordering process. Beta tested with over 15 users.",
      technologies: ["React Native", "Firebase"],
      github: "https://github.com/AhsanHussain12/LosPolosPizzeria",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7289170278482432000/"
    },
    {
      title: "Twine – Video Chat Platform",
      description: "A real-time video chat app like Omegle built with WebRTC, allowing users to connect with random strangers via browser-based video calls.",
      technologies: ["WebRTC", "JavaScript"],
      github: "https://github.com/AhsanHussain12/WebRTCProject",
    },
    {
      title: "Live Streamer – WebRTC to HLS/DASH Streaming",
      description: "A basic live streaming platform that uses WebRTC to push streams to an Ant Media Server (AMS), with playback support via HLS and DASH. Follows a publish-subscribe architecture.",
      technologies: ["JavaScript", "Ant Media Server", "HLS", "DASH", "WebRTC"],
      github: "https://github.com/AhsanHussain12/Live-Streaming-Application-AntMediaServer-",
    },
    {
      title: "SportsMedia – Cross-Platform Mobile App",
      description: "A React Native mobile app that fetches and displays football and cricket league fixtures using third-party APIs. Compatible with both Android and iOS.",
      technologies: ["React Native", "REST APIs"],
      github: "https://github.com/AhsanHussain12/SportsMedia",
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development,
            from concept to creation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 