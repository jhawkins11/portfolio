import { useState } from 'react'
import { useGesture } from 'react-use-gesture'
import { SLIDES } from '../components/Navigation'

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const SCROLL_THRESHOLD = 0.05

  const bind = useGesture({
    onWheel: ({ delta: [, dy] }) => {
      setScrollY((prevScrollY) => {
        const scrollDelta = dy / 500
        if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) return prevScrollY
        const newScrollY = Math.max(
          0,
          Math.min(SLIDES.length - 1, prevScrollY + scrollDelta)
        )
        return newScrollY
      })
    },
  })

  return { scrollY, setScrollY, bind }
}

export { useScroll, SLIDES }
