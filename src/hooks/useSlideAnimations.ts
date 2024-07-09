import { useSprings } from 'react-spring'

const config = { mass: 1, tension: 250, friction: 20 }

const useSlideAnimations = (scrollY: number, slides: string[]) => {
  const springs = useSprings(
    slides.length,
    slides.map((_, index) => ({
      transform:
        scrollY < index
          ? 'translate3d(100%, 0, 0)'
          : scrollY >= index && scrollY < index + 1
          ? 'translate3d(0%, 0, 0)'
          : 'translate3d(-150%, 0, 0)',
      opacity: scrollY >= index && scrollY < index + 1 ? 1 : 0,
      config,
    }))
  )

  return springs
}

export default useSlideAnimations
