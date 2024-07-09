import React from 'react'
import ProjectSection from './ProjectSection'
import useSlideAnimations from '../hooks/useSlideAnimations'
import { SLIDES } from '../hooks/useScroll'
import ProfileSection from './ProfileSection'

interface SlidesProps {
  scrollY: number
  initialLoad: boolean
}

const Slides: React.FC<SlidesProps> = ({ scrollY, initialLoad }) => {
  const animations = useSlideAnimations(scrollY, SLIDES)

  return (
    <>
      <ProfileSection
        initialLoad={initialLoad}
        scrollY={scrollY}
        slideAnimation={animations[0]}
      />
      {SLIDES.slice(1).map((slide, index) => (
        <ProjectSection
          key={index}
          style={animations[index + 1]}
          title={slide}
          description={`Placeholder information for ${slide}.`}
        />
      ))}
    </>
  )
}

export default Slides
