// src/components/ProfileSection.tsx
import React from 'react'
import { SpringValues, animated, useSpring } from 'react-spring'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface ProfileSectionProps {
  initialLoad: boolean
  scrollY: number
  slideAnimation: SpringValues<{
    transform: string
    opacity: number
  }>
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  initialLoad,
  slideAnimation,
}) => {
  const fadeInAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 750,
    config: { duration: 750 },
  })

  return (
    <animated.div
      className='profile-section'
      style={{
        ...slideAnimation,
        opacity: initialLoad ? fadeInAnimation.opacity : slideAnimation.opacity,
      }}
    >
      <div className='text-section'>
        <h1 className='name'>JOSIAH HAWKINS</h1>
        <h2 className='title'>FULL STACK DEVELOPER</h2>
        <p className='bio'>
          With a passion for innovation and a mastery of React, Node.js, and
          AWS, I transform ideas into seamless digital experiences. My journey
          through the tech landscape has equipped me with the skills to build
          scalable, high-performance applications that not only meet but exceed
          expectations. At the intersection of creativity and technology, I am
          dedicated to crafting solutions that are both functional and
          beautiful.
        </p>
        <div className='social-links'>
          <a
            href='https://github.com/jhawkins11'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='https://www.linkedin.com/in/josiahhawkins/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className='see-more'>Scroll to see more &#8594;</p>
      </div>
      <div className='image-section'>
        <div className='image-bg'></div>
        <img src='/josiah.png' alt='Josiah Hawkins' className='profile-pic' />
      </div>
    </animated.div>
  )
}

export default ProfileSection
