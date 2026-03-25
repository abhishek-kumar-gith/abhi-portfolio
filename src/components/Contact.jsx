import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { useDarkMode } from '../context/DarkModeContext'

const Contact = () => {
  const { isDark } = useDarkMode()
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Initialize EmailJS (using public key from env or setup without keys for testing)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_key'

      // For production, initialize with your actual keys
      if (publicKey !== 'default_key') {
        emailjs.init(publicKey)

        const result = await emailjs.sendForm(serviceId, templateId, formRef.current)
        console.log('Success:', result)
        setSuccess(true)
        formRef.current.reset()

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      } else {
        // Demo mode - just show success
        console.log('Demo mode: Form would be sent with:', {
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          message: formRef.current.message.value,
        })
        setSuccess(true)
        formRef.current.reset()
        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to send message. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 ${
        isDark
          ? 'bg-dark-card/30 border-t border-dark-border'
          : 'bg-gradient-to-b from-white to-blue-50'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
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
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className={`text-lg mt-6 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a question or want to work together? Leave me a message!
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl border text-center ${
              isDark
                ? 'bg-dark-bg border-dark-border'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">✉️</div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Email
            </h3>
            <a
              href="mailto:a.abhishek9876abhi@gmail.com"
              className={`text-sm hover:text-blue-500 transition-colors ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              a.abhishek9876abhi@gmail.com
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl border text-center ${
              isDark
                ? 'bg-dark-bg border-dark-border'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Location
            </h3>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              India
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl border text-center ${
              isDark
                ? 'bg-dark-bg border-dark-border'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Phone
            </h3>
            <a
              href="tel:+919876543210"
              className={`text-sm hover:text-blue-500 transition-colors ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              +91 8877998483
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className={`p-8 rounded-2xl border ${
            isDark
              ? 'bg-dark-bg border-dark-border'
              : 'bg-white border-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDark
                    ? 'bg-dark-card border-dark-border text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none'
                }`}
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDark
                    ? 'bg-dark-card border-dark-border text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none'
                }`}
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                  isDark
                    ? 'bg-dark-card border-dark-border text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none'
                }`}
                placeholder="Your message..."
              />
            </div>

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
              >
                ✅ Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300"
              >
                ❌ {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Alternative Contact */}
            <p className={`text-center text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Or email me directly at{' '}
              <a
                href="mailto:abhishek@example.com"
                className="text-blue-500 hover:underline font-semibold"
              >
                a.abhishek9876abhi@gmail.com
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
