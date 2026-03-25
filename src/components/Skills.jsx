import React from 'react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../context/DarkModeContext'

const SkillCard = ({ icon, name, level }) => {
  const { isDark } = useDarkMode()

  return (
    <motion.div
      className={`p-6 rounded-xl border transition-all ${
        isDark
          ? 'bg-dark-card border-dark-border hover:border-blue-400/50 hover:bg-dark-border/50'
          : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="text-4xl mb-3"
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className={`text-lg font-semibold mb-2 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {name}
      </h3>
      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {level}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const { isDark } = useDarkMode()

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { icon: '⚛️', name: 'React.js', level: 'Advanced' },
        { icon: '🎨', name: 'Tailwind CSS', level: 'Advanced' },
        { icon: '✨', name: 'Framer Motion', level: 'Intermediate' },
        { icon: '📱', name: 'Responsive Design', level: 'Advanced' },
        { icon: '🎯', name: 'JavaScript ES6+', level: 'Advanced' },
        { icon: '🔄', name: 'Redux', level: 'Intermediate' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { icon: '🟢', name: 'Node.js', level: 'Advanced' },
        { icon: '🚆', name: 'Express.js', level: 'Advanced' },
        { icon: '🐘', name: 'PostgreSQL', level: 'Advanced' },
        { icon: '📦', name: 'MongoDB', level: 'Intermediate' },
        { icon: '🔐', name: 'Authentication', level: 'Advanced' },
        { icon: '📡', name: 'REST APIs', level: 'Advanced' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { icon: '📚', name: 'Git/GitHub', level: 'Advanced' },
        { icon: '🐳', name: 'Docker', level: 'Intermediate' },
        { icon: '⚙️', name: 'Webpack', level: 'Intermediate' },
        { icon: '🧪', name: 'Testing (Jest)', level: 'Intermediate' },
        { icon: '☁️', name: 'Cloud Deploy', level: 'Intermediate' },
        { icon: '⚡', name: 'Performance', level: 'Advanced' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      className={`py-20 lg:py-28 ${
        isDark
          ? 'bg-dark-card/30 border-y border-dark-border'
          : 'bg-gradient-to-b from-blue-50/50 to-white'
      }`}
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
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
