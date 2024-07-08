import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Animations.css'
import './App.css'

const App: React.FC = () => {
  // Animations
  const shapesSpin = useSpring({
    transform: 'rotate(360deg)',
    from: { transform: 'rotate(0deg)' },
    config: {
      duration: 2000,
      loop: true,
      // ease-in-out
      easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
  })
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  })

  return (
    <div className='App'>
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

        <animated.div className='profile-section' style={fadeIn}>
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
