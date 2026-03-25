import React from 'react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../context/DarkModeContext'
import profilePic from "../assets/images/profilepic.jpeg"

const About = () => {
  const { isDark } = useDarkMode()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 ${isDark ? 'bg-dark-bg' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center sm:h-96 md:h-96 h-64 rounded-2xl overflow-hidden"
          >
            <div className={`w-full h-full flex items-center justify-center ${
              isDark
                ? 'bg-gradient-to-br from-dark-card to-dark-border'
                : 'bg-gradient-to-br from-blue-100 to-cyan-100'
            }`}>
              <img 
                src={profilePic} 
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className={`text-2xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Who am I?
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I'm a passionate Full Stack Developer with 3+ years of experience building
                web applications. I specialize in creating beautiful, user-friendly interfaces
                combined with robust backend solutions.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                My Journey
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Started my journey with a passion for technology and problem-solving. Over the years,
                I've worked on diverse projects, learned modern technologies, and contributed to
                open-source communities. I love turning ideas into reality through code.
              </p>
            </div>

            <div className="pt-4">
              <h3 className={`text-lg font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                ✨ What I Do
              </h3>
              <ul className={`space-y-2 text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li>💻 Full Stack Web Development</li>
                <li>🎨 UI/UX Design & Implementation</li>
                <li>⚡ Performance Optimization</li>
                <li>🚀 DevOps & Deployment</li>
              </ul>
            </div>

            {/* Download Resume */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/resume.pdf"
                download
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Download My Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
