// src/App.tsx
import React, { useState } from 'react'
import { useScroll, SLIDES } from './hooks/useScroll'
import Navigation from './components/Navigation'
import Shapes from './components/Shapes'
import Slides from './components/Slides'
import './Animations.css'
import './App.css'

const App: React.FC = () => {
  const { scrollY, setScrollY, bind } = useScroll()
  const [initialLoad, setInitialLoad] = useState(true)

  const handleNavigation = (index: number) => {
    setScrollY(index)
    setInitialLoad(false)
  }

  return (
    <div className='App' {...bind()}>
      <div className='accent-square'></div>

      <div className='container'>
        <Navigation
          onNavigate={handleNavigation}
          activeSlide={Math.floor(scrollY)}
        />
        <Shapes />
        <Slides scrollY={scrollY} initialLoad={initialLoad} />

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
