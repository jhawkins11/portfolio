import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './Animations.css'
import './App.css'

const App: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0)

  // Number of slides
  const slides = 4

  const SCROLL_THRESHOLD = 0.1

  const bind = useGesture({
    onWheel: ({ delta: [, dy] }) => {
      setScrollY((prevScrollY) => {
        const scrollDelta = dy / 500
        if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) return prevScrollY
        const newScrollY = Math.max(
          0,
          Math.min(slides - 1, prevScrollY + scrollDelta)
        )
        return newScrollY
      })
    },
  })

  // Animations
  const shapesSpin = useSpring({
    transform: 'rotate(360deg)',
    from: { transform: 'rotate(0deg)' },
    config: {
      duration: 2000,
      loop: true,
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
  })

  const config = { mass: 1, tension: 120, friction: 14 }

  const profileAnimation = useSpring({
    transform:
      scrollY < 1 ? 'translate3d(0%, 0%, 0)' : 'translate3d(-100%, 0%, 0)',
    opacity: scrollY < 1 ? 1 : 0,
    config,
  })

  const project1Animation = useSpring({
    transform:
      scrollY < 1
        ? 'translate3d(100%, 0%, 0)'
        : scrollY >= 1 && scrollY < 2
        ? 'translate3d(0%, 0%, 0)'
        : 'translate3d(-100%, 0%, 0)',
    opacity: scrollY >= 1 && scrollY < 2 ? 1 : 0,
    config,
  })

  const project2Animation = useSpring({
    transform:
      scrollY < 2
        ? 'translate3d(100%, 0%, 0)'
        : scrollY >= 2 && scrollY < 3
        ? 'translate3d(0%, 0%, 0)'
        : 'translate3d(-100%, 0%, 0)',
    opacity: scrollY >= 2 && scrollY < 3 ? 1 : 0,
    config,
  })

  const project3Animation = useSpring({
    transform:
      scrollY < 3 ? 'translate3d(100%, 0%, 0)' : 'translate3d(0%, 0%, 0)',
    opacity: scrollY >= 3 ? 1 : 0,
    config,
  })

  return (
    <div className='App' {...bind()}>
      <div className='accent-square'></div>

      <div className='container'>
        <animated.img
          src='/shape1.svg'
          className='shape sun'
          style={shapesSpin}
          alt='Shape 1'
        />
        <animated.img
          src='/shape2.svg'
          className='shape star1'
          style={shapesSpin}
          alt='Shape 2'
        />
        <div className='checkers'>
          <animated.img
            src='/shape4.svg'
            className='checkers-square'
            style={shapesSpin}
            alt='Shape 3'
          />
          <animated.img
            src='/shape4.svg'
            className='checkers-square'
            style={shapesSpin}
            alt='Shape 3'
          />
        </div>

        <animated.div className='profile-section' style={profileAnimation}>
          <div className='text-section'>
            <h1 className='name'>JOSIAH HAWKINS</h1>
            <h2 className='title'>FULL STACK DEVELOPER</h2>
            <p className='bio'>
              With a passion for innovation and a mastery of React, Node.js, and
              AWS, I transform ideas into seamless digital experiences. My
              journey through the tech landscape has equipped me with the skills
              to build scalable, high-performance applications that not only
              meet but exceed expectations. At the intersection of creativity
              and technology, I am dedicated to crafting solutions that are both
              functional and beautiful.
            </p>
          </div>
          <div className='image-section'>
            <div className='image-bg'></div>
            <img
              src='/josiah.png'
              alt='Josiah Hawkins'
              className='profile-pic'
            />
          </div>
        </animated.div>

        <animated.div className='project-section' style={project1Animation}>
          <h2>PROJECT #1</h2>
          <p>Placeholder information for Project #1.</p>
        </animated.div>
        <animated.div className='project-section' style={project2Animation}>
          <h2>PROJECT #2</h2>
          <p>Placeholder information for Project #2.</p>
        </animated.div>
        <animated.div className='project-section' style={project3Animation}>
          <h2>PROJECT #3</h2>
          <p>Placeholder information for Project #3.</p>
        </animated.div>

        <div className='scrolling-title-sideways title1'>
          FULL STACK DEVELOPER
        </div>
        <div className='scrolling-title-sideways title2'>
          SOFTWARE ARCHITECT
        </div>
        <div className='scrolling-title title3'>SOFTWARE ENGINEER</div>
        <div className='scrolling-title title4'>WEB DEVELOPER</div>
      </div>
    </div>
  )
}

export default App
