import { useState, useRef, useCallback } from 'react'
import { useGesture } from 'react-use-gesture'
import { SLIDES } from '../components/Navigation'

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const SCROLL_THRESHOLD = 0.05
  const SCROLL_DELAY = 1000 // 1 second delay
  const isScrollingRef = useRef(false)

  const handleScroll = useCallback((scrollDelta: number) => {
    if (isScrollingRef.current) return

    isScrollingRef.current = true
    setScrollY((prevScrollY) => {
      const newScrollY = Math.max(
        0,
        Math.min(SLIDES.length - 1, Math.round(prevScrollY + scrollDelta))
      )
      return newScrollY
    })

    setTimeout(() => {
      isScrollingRef.current = false
    }, SCROLL_DELAY)
  }, [])

  const bind = useGesture({
    onWheel: ({ delta: [, dy] }) => {
      const scrollDelta = dy / 500
      if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) return
      handleScroll(scrollDelta > 0 ? 1 : -1)
    },
  })

  return { scrollY, setScrollY, bind }
}

export { useScroll, SLIDES }
