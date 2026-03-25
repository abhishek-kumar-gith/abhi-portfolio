import React from 'react'

/**
 * Custom Hook for useInView animation trigger
 * Triggers animation when element comes into view
 */
export const useInView = () => {
  // This is a placeholder for future implementation
  // Can use Intersection Observer API here
  return {
    ref: null,
    inView: true,
  }
}

/**
 * Format date helper
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Truncate text helper
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength - 1) + '...'
}

/**
 * Debounce helper for performance
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Scroll to element with offset
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/**
 * Copy to clipboard helper
 */
export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}

/**
 * Generate random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}
