import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useDarkMode } from '../context/DarkModeContext'
import cafeImg from "../assets/images/cafeProject.png"

const ProjectCard = ({ title, description, tags, github, demo, featured }) => {
  const { isDark } = useDarkMode()

  return (
    <motion.div
      className={`rounded-xl overflow-hidden border transition-all ${
        isDark
          ? 'bg-dark-card border-dark-border hover:border-blue-400/50'
          : 'bg-white border-gray-200 hover:border-blue-400'
      } ${featured ? 'md:col-span-2' : ''}`}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Placeholder */}
      <div className={`w-full h-48 ${
        isDark
          ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30'
          : 'bg-gradient-to-br from-blue-100 to-cyan-100'
      } flex items-center justify-center relative overflow-hidden group`}>
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
          <img src={cafeImg} alt="Cafe Project" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm mb-4 leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <motion.span
              key={idx}
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                isDark
                  ? 'bg-blue-500/20 text-blue-300'
                  : 'bg-blue-100 text-blue-700'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                isDark
                  ? 'bg-dark-border text-blue-400 hover:bg-blue-500/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={18} />
              Code
            </motion.a>
          )}
          {demo && (
            <motion.a
              href={"https://cafe-frontend-49a4.onrender.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink size={18} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { isDark } = useDarkMode()

  const projects = [
    {
      title: 'Cafe-Project',
      description:
        'A full-stack e-commerce application with product catalog, shopping cart, payment integration, and admin dashboard.',
      tags: ['Html',"Css", 'Node.js', 'MongoDB'],
      github: 'https://github.com/abhishek-kumar-gith/Cafe-Project',
      demo: 'https://ecommerce-demo.example.com',
      featured: true,
    },
    // {
    //   title: 'Task Management App',
    //   description:
    //     'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
    //   tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
    //   github: 'https://github.com/yourusername/task-manager',
    //   demo: 'https://task-manager-demo.example.com',
    //   featured: false,
    // },
    // {
    //   title: 'Social Media Feed',
    //   description:
    //     'A Twitter-like social media platform with posts, likes, comments, and user profiles.',
    //   tags: ['React', 'PostgreSQL', 'Express', 'Socket.io'],
    //   github: 'https://github.com/yourusername/social-feed',
    //   demo: 'https://social-demo.example.com',
    //   featured: false,
    // },
    // {
    //   title: 'Analytics Dashboard',
    //   description:
    //     'Real-time analytics dashboard with interactive charts, data visualization, and performance metrics.',
    //   tags: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    //   github: 'https://github.com/yourusername/analytics',
    //   demo: 'https://analytics-demo.example.com',
    //   featured: false,
    // },
    // {
    //   title: 'AI Chat Application',
    //   description:
    //     'Chat application with AI-powered responses, message history, and real-time communication.',
    //   tags: ['React', 'OpenAI API', 'WebSocket', 'Express'],
    //   github: 'https://github.com/yourusername/ai-chat',
    //   demo: 'https://ai-chat-demo.example.com',
    //   featured: true,
    // },
    // {
    //   title: 'Weather App',
    //   description:
    //     'Beautiful weather application with real-time data, forecasts, and location-based services.',
    //   tags: ['React', 'OpenWeather API', 'Animations', 'Vite'],
    //   github: 'https://github.com/yourusername/weather',
    //   demo: 'https://weather-demo.example.com',
    //   featured: false,
    // },
  ]

  return (
    <section
      id="projects"
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
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/abhishek-kumar-gith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
