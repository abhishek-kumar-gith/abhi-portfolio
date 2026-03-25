import React from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowDown,
} from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'
import { useDarkMode } from '../context/DarkModeContext'

const Hero = () => {
  const { isDark } = useDarkMode()

  const socialLinks = [
    {
      icon: FiGithub,
      url: import.meta.env.VITE_GITHUB_URL || 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      url: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: FiTwitter,
      url: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com',
      label: 'Twitter',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-dark-bg' : 'bg-gradient-to-b from-blue-50 to-white'
      } relative overflow-hidden pt-16`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-10 w-72 h-72 ${
          isDark ? 'bg-blue-500/10' : 'bg-blue-200/30'
        } rounded-full blur-3xl`} />
        <div className={`absolute -bottom-20 -left-20 w-96 h-96 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-200/30'
        } rounded-full blur-3xl`} />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            isDark
              ? 'bg-blue-500/20 border border-blue-400/30 text-blue-300'
              : 'bg-blue-100 border border-blue-200 text-blue-700'
          }`}>
            <span className="animate-pulse-slow w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Abhishek Kumar
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Full Stack Developer • UI/UX Enthusiast • Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-lg mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          I build beautiful, responsive web applications with modern technologies.
          Based in India, crafting digital experiences that matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </ScrollLink>

          <a
            href={`mailto:${import.meta.env.VITE_EMAIL || 'hello@example.com'}`}
            className="px-8 py-3"
          >
            <motion.button
              className={`font-semibold rounded-lg border-2 transition-colors ${
                isDark
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  isDark
                    ? 'bg-dark-card hover:bg-blue-500/20 text-gray-300 hover:text-blue-400'
                    : 'bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className={`p-2 rounded-full ${
              isDark
                ? 'bg-dark-card text-gray-400 hover:text-blue-400'
                : 'bg-gray-100 text-gray-600 hover:text-blue-600'
            } transition-colors`}>
              <FiArrowDown size={24} />
            </div>
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
