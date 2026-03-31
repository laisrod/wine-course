import SectionWrapper from '../layout/SectionWrapper'
import { FEEDBACKS } from '../../constants/feedbacks'
import { useFeedbackCarousel } from '../../hooks/useFeedbackCarousel'

function Feedbabks() {
  const { sliderRef, scrollFeedbacks } = useFeedbackCarousel()

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
