// src/components/Slides.tsx
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
      <ProjectSection
        style={animations[1]}
        title='Doc Genie'
        description='A reactive editor for co-authoring document trees using AI.'
        technologies={[
          'React',
          'Next.js',
          'JavaScript',
          'TypeScript',
          'Tailwind CSS',
          'Material UI',
          'Firebase',
          'MongoDB',
        ]}
        features={[
          'One-click content expansion',
          'Co-authoring with real-time collaboration',
          'Authentication with Firebase Auth',
          'Dashboard for managing documents',
        ]}
        imageUrls={[
          'https://github.com/jhawkins11/doc-genie/raw/main/public/screenshot-1.png',
          'https://github.com/jhawkins11/doc-genie/raw/main/public/screenshot-2.png',
        ]}
        websiteUrl='https://doc-genie-6b615.web.app/'
        githubUrl='https://github.com/jhawkins11/doc-genie'
      />
      <ProjectSection
        style={animations[2]}
        title='Stocks Dashboard'
        description='A minimalist real-time stock data broadcasting dashboard.'
        technologies={[
          'Next.js',
          'React',
          'TypeScript',
          'shadcn/ui',
          'Node.js',
          'WebSocket',
          'Tailwind CSS',
          'Jest',
          'MySQL',
          'Express',
        ]}
        features={[
          'Real-time stock data updates with WebSocket',
          'Stock watchlist tracking',
        ]}
        imageUrls={[
          'https://github.com/jhawkins11/stocks-dashboard/raw/main/StocksDash.png',
          'https://github.com/jhawkins11/stocks-dashboard/raw/main/StocksDash.png',
        ]}
        websiteUrl='https://stocks-dashboard-pi.vercel.app/'
        githubUrl='https://github.com/jhawkins11/stocks-dashboard'
        verticalImages
      />
      <ProjectSection
        style={animations[3]}
        title='VisualReader (WIP)'
        description='An innovative ebook reader that generates visual representations of book scenes.'
        technologies={[
          'React Native',
          'Expo',
          'TypeScript',
          'Node.js',
          'Express',
          'Axios',
          'EPub.js',
          'OpenAI API',
          'Multer',
        ]}
        features={[
          'Real-time visual generation of book scenes',
          'Character description extraction',
          'Table of Contents navigation',
          'Toggle between text and images',
          'Integration with OpenAI for prompt and image generation',
        ]}
        imageUrls={[
          '/VisualReader1.PNG',
          '/VisualReader2.PNG',
          '/VisualReader3.PNG',
        ]}
        verticalImages
      />
    </>
  )
}

export default Slides
