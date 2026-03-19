import { useRef } from 'react'
import SectionWrapper from '../layout/SectionWrapper'

const FEEDBACKS = [
  {
    name: 'Ana M.',
    role: 'Beginner student',
    quote:
      'I didnt know where to begin in the world of wine. Simonas classes are objective, practical, and very elegant.'
  },
  {
    name: 'Carla V.',
    role: 'Lover of food tasting',
    quote:
      'The wine pairing aspect has changed my dinners. Today I choose wines with confidence and can better explain what Im tasting.'  
  },
  {
    name: 'Rafael S.',
    role: 'Enthusiast',
    quote:
      'The curation of the Lanzarote feature was excellent. Clear content, beautiful visuals, and a premium experience from start to finish.'
  },
  {
    name: 'Beatriz L.',
    role: 'Course participant',
    quote:
      'The tasting feedback was very insightful. I learned to perceive aroma, texture, and finish with much greater clarity.'
  },
  {
    name: 'Marcos T.',
    role: 'Beginner collector',
    quote:
      'The teaching method is modern and direct. In a short time, I was able to put together my wine selection with much better choices.'
  },
]

function Feedbabks() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollFeedbacks = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const amount = Math.max(280, sliderRef.current.clientWidth * 0.8)
    sliderRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <SectionWrapper id="feedbacks" className="feedbacks">
      <h2 className="feedbacks__title">Feedbacks</h2>
      <p className="feedbacks__intro">
        Real stories from students and friends who improved their wine tasting skills with Simona's course.      
      </p>

      <div className="feedbacks__carousel">
        <button
          type="button"
          className="feedbacks__arrow"
          onClick={() => scrollFeedbacks('left')}
          aria-label="Ver feedback anterior"
        >
          ‹
        </button>

        <div className="feedbacks__grid" ref={sliderRef}>
          {FEEDBACKS.map((item) => (
            <article key={item.name} className="feedbacks__card">
              <div className="feedbacks__rating" aria-label="5 estrelas">
                <span>★★★★★</span>
              </div>
              <p className="feedbacks__quote">"{item.quote}"</p>
              <div className="feedbacks__person">
                <p className="feedbacks__name">{item.name}</p>
                <p className="feedbacks__role">{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="feedbacks__arrow"
          onClick={() => scrollFeedbacks('right')}
          aria-label="Ver proximo feedback"
        >
          ›
        </button>
      </div>
    </SectionWrapper>
  )
}

export default Feedbabks
