import React from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useDarkMode } from '../context/DarkModeContext'

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`relative p-2 rounded-lg transition-colors ${
        isDark
          ? 'bg-dark-card text-yellow-400 hover:bg-dark-border'
          : 'bg-gray-100 text-yellow-600 hover:bg-gray-200'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle
