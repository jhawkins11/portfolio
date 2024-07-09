import React from 'react'

export const SLIDES = ['About Me', 'Project 1', 'Project 2', 'Project 3']

interface NavigationProps {
  onNavigate: (index: number) => void
  activeSlide: number
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, activeSlide }) => (
  <nav className='nav-links'>
    <span className='nav-title'>JH</span>
    {SLIDES.map((slide, index) => (
      <button
        key={index}
        onClick={() => onNavigate(index)}
        className={activeSlide === index ? 'active' : ''}
      >
        {slide}
      </button>
    ))}
  </nav>
)

export default Navigation
