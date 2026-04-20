import SectionWrapper from '../layout/SectionWrapper'
import { EVENTS } from '../../constants/events'
import type { CalendarEvent } from '../../constants/events'

const TYPE_LABELS: Record<CalendarEvent['type'], string> = {
  tasting:  'Tasting',
  course:   'Course',
  workshop: 'Workshop',
  private:  'Private',
}

function formatDate(iso: string) {
  const date = new Date(iso + 'T00:00:00')
  return {
    day:   date.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: date.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
    full:  date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

function isSoldOut(event: CalendarEvent) {
  return event.spotsLeft !== undefined && event.spotsLeft === 0
}

export function EventCard({ event }: { event: CalendarEvent }) {
  const { day, month, full } = formatDate(event.date)
  const soldOut = isSoldOut(event)
  const lowAvailability = event.spotsLeft !== undefined && event.spotsLeft > 0 && event.spotsLeft <= 3

  return (
    <article className={`calendar__card calendar__card--${event.type}`} aria-label={event.title}>
      <div className="calendar__date-badge" aria-label={full}>
        <span className="calendar__date-day">{day}</span>
        <span className="calendar__date-month">{month}</span>
      </div>

      <div className="calendar__card-body">
        <div className="calendar__card-header">
          <span className={`calendar__type-badge calendar__type-badge--${event.type}`}>
            {TYPE_LABELS[event.type]}
          </span>
          {soldOut && (
            <span className="calendar__status calendar__status--sold-out">Sold out</span>
          )}
          {lowAvailability && !soldOut && (
            <span className="calendar__status calendar__status--low">
              {event.spotsLeft} spot{event.spotsLeft !== 1 ? 's' : ''} left
            </span>
          )}
        </div>

        <h3 className="calendar__card-title">{event.title}</h3>

        <div className="calendar__meta">
          <span className="calendar__meta-item">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="calendar__icon">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {event.time}{event.endTime ? `–${event.endTime}` : ''}
          </span>
          <span className="calendar__meta-item">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="calendar__icon">
              <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            {event.location}
          </span>
          {event.spots && (
            <span className="calendar__meta-item">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="calendar__icon">
                <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M2.5 13.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {event.spots} spots
            </span>
          )}
        </div>

        <p className="calendar__card-description">{event.description}</p>

        {event.contactUrl && (
          <a
            href={event.contactUrl}
            className={`calendar__cta${soldOut ? ' calendar__cta--disabled' : ''}`}
            aria-disabled={soldOut}
            tabIndex={soldOut ? -1 : undefined}
          >
            {event.type === 'private' ? 'Enquire' : soldOut ? 'Sold out' : 'Reserve your spot'}
          </a>
        )}
      </div>
    </article>
  )
}

function Calendar() {
  return (
    <SectionWrapper id="calendar" className="calendar">
      <h2 className="calendar__title">Upcoming Events</h2>
      <p className="calendar__subtitle">
        Join one of my tastings, workshops, or courses — in person in Barcelona or online.
      </p>

      <div className="calendar__list">
        {EVENTS.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Calendar
