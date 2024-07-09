import React from 'react'
import { animated, SpringValue } from 'react-spring'

interface ProjectSectionProps {
  style: {
    transform: SpringValue<string>
    opacity: SpringValue<number>
  }
  title: string
  description: string
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  style,
  title,
  description,
}) => (
  <animated.div className='project-section' style={style}>
    <h2>{title}</h2>
    <p>{description}</p>
  </animated.div>
)

export default ProjectSection
