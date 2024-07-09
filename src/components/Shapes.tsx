// src/components/Shapes.tsx
import React from 'react'
import { animated, useSpring } from 'react-spring'

const Shapes: React.FC<{}> = () => {
  const spinFromLeft = useSpring({
    from: {
      transform: 'translateX(-500%)',
      rotate: '0deg',
    },
    to: {
      transform: 'translateX(0)',
      rotate: '360deg',
    },
    config: { duration: 1500 },
  })

  const spinFromRight = useSpring({
    from: {
      transform: 'translateX(500%)',
      rotate: '0deg',
    },
    to: {
      transform: 'translateX(0)',
      rotate: '360deg',
    },
    config: { duration: 1500 },
  })

  return (
    <>
      <animated.img
        src='/shape1.svg'
        className='shape sun'
        style={spinFromLeft}
        alt='Shape 1'
      />
      <animated.img
        src='/shape2.svg'
        className='shape star1'
        style={spinFromRight}
        alt='Shape 2'
      />
      <animated.div className='checkers' style={spinFromLeft}>
        <img src='/shape4.svg' className='checkers-square' alt='Shape 3' />
        <img src='/shape4.svg' className='checkers-square' alt='Shape 4' />
      </animated.div>
    </>
  )
}

export default Shapes
