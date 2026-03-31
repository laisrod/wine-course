import { useRef } from 'react'

export function useFeedbackCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollFeedbacks = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const amount = Math.max(280, sliderRef.current.clientWidth * 0.8)
    sliderRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return { sliderRef, scrollFeedbacks }
}

