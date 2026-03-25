import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'
import { useDarkMode } from '../context/DarkModeContext'

const Footer = () => {
  const { isDark } = useDarkMode()
  const currentYear = new Date().getFullYear()

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
    {
      icon: FiMail,
      url: 'mailto:a.abhishek9876abhi@gmail.com',
      label: 'Email',
    },
  ]

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <footer
      className={`border-t ${
        isDark
          ? 'bg-dark-card border-dark-border'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              AK
            </h3>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <ScrollLink
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span className={`text-sm transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}>
                      {link}
                    </span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className={`text-sm transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Download Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abhishek-kumar-gith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Source Code
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Follow Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-blue-400 bg-dark-bg hover:bg-blue-500/10'
                        : 'text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50'
                    }`}
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-dark-border' : 'border-gray-200'} mb-8`} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Abhishek Kumar. All rights reserved. 
          </motion.p>

          {/* Back to Top */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.button
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-dark-border text-blue-400 hover:bg-blue-500/20'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <FiArrowUp size={18} />
            </motion.button>
          </ScrollLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
