import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import DarkModeToggle from './DarkModeToggle'
import { useDarkMode } from '../context/DarkModeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark } = useDarkMode()

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-dark-bg/80 border-dark-border'
          : 'bg-white/80 border-gray-200'
      } border-b`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              AK
            </motion.div>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <motion.span
                  className={`text-sm font-medium transition-colors ${
                    isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.span>
              </ScrollLink>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${
                isDark
                  ? 'bg-dark-card text-gray-300 hover:bg-dark-border'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isDark ? 'bg-dark-card border-dark-border' : 'bg-gray-50 border-gray-200'
          } border-t`}
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer block"
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.span>
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
