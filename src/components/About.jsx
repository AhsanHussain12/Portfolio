import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 text-sm font-medium mb-2 block">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Computer Science Graduate & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Full-Stack Developer
              </span>
            </h2>
            <div className="prose prose-invert">
              <p className="text-gray-400 mb-6">
                I'm a Computer Science graduate skilled in frontend, backend, and database design and management, with a focus on Computer Vision and scalable software systems. I am passionate about writing clean and scalable code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="/AhsanHussainResume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Download Resume
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 items-center"
              >
                <a href="https://github.com/AhsanHussain12?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ahsan-hussain-9855912a8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform rotate-6"></div>
            <div className="relative bg-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">1+</h3>
                  <p className="text-gray-400">Year of Freelance Experience</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
                  <p className="text-gray-400">Personal Projects</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">FAST NUCES</h3>
                  <p className="text-gray-400">B.S. Computer Science</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">2025</h3>
                  <p className="text-gray-400">Graduation Year</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 