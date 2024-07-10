import React from 'react'

export const SLIDES = ['Home', 'Doc Genie', 'Stocks Dashboard', 'VisualReader']

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
        className={activeSlide === index ? 'active link' : 'link'}
      >
        {slide}
      </button>
    ))}
  </nav>
)

export default Navigation
