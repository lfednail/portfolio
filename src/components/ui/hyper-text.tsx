import React from 'react'

interface HyperTextProps {
  text: string
  className?: string
}

const HyperText: React.FC<HyperTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 ${className}`}>
      {text}
    </span>
  )
}

export default HyperText
