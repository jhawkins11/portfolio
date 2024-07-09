// src/components/ProjectSection.tsx
import React from 'react'
import { animated, SpringValue } from 'react-spring'
import Slider from 'react-slick'

interface ProjectSectionProps {
  style: {
    transform: SpringValue<string>
    opacity: SpringValue<number>
  }
  title: string
  description: string
  technologies: string[]
  features: string[]
  imageUrls: string[]
  websiteUrl?: string
  githubUrl?: string
  verticalImages?: boolean
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  style,
  title,
  description,
  technologies,
  features,
  imageUrls,
  websiteUrl,
  githubUrl,
  verticalImages = false,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <animated.div className='project-section' style={style}>
      <div className='project-images'>
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`${title} screenshot ${index + 1}`}
                className={`${verticalImages ? 'vertical' : ''} project-image`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='project-content'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='project-technologies'>
          <h3>Technologies:</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className='project-features'>
          <h3>Features:</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className='project-links'>
          {websiteUrl && (
            <a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
              Website
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          )}
        </div>
      </div>
    </animated.div>
  )
}

export default ProjectSection
