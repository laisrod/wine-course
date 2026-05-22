import SectionWrapper from '../layout/SectionWrapper'
import { useEvents } from '../../hooks/useEvents'

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return { day: '??', month: '???', year: '????' }
  const [year, month, day] = dateStr.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return { day, month: months[parseInt(month ?? '1') - 1], year }
}

function isPast(dateStr: string | undefined) {
  if (!dateStr) return false
  return new Date(dateStr) < new Date(new Date().toDateString())
}

function Events() {
  const { events, loading } = useEvents()

  if (!loading && events.length === 0) return null

  return (
    <SectionWrapper id="events" className="events">
      <h2 className="events__title">Upcoming Events</h2>
      <p className="events__intro">
        Join Simona for tastings, classes, and curated wine experiences.
      </p>

      {loading ? (
        <div className="events__loading">Loading events…</div>
      ) : (
        <ul className="events__list">
          {events.map((event) => {
            const { day, month, year } = formatDate(event.date)
            const past = isPast(event.date)
            const cancelled = event.status === 'cancelled'
            const soldOut = event.status === 'sold-out'

            return (
              <li
                key={event._id}
                className={`events__card${past || cancelled ? ' events__card--past' : ''}`}
              >
                <div className="events__date">
                  <span className="events__day">{day}</span>
                  <span className="events__month">{month}</span>
                  <span className="events__year">{year}</span>
                </div>

                <div className="events__body">
                  <div className="events__header">
                    <h3 className="events__name">{event.title}</h3>
                    {cancelled && <span className="events__badge events__badge--cancelled">Cancelled</span>}
                    {soldOut && !cancelled && <span className="events__badge events__badge--sold-out">Sold out</span>}
                    {past && !cancelled && !soldOut && <span className="events__badge events__badge--past">Past</span>}
                  </div>

                  <div className="events__meta">
                    {event.time && (
                      <span className="events__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {event.time}
                      </span>
                    )}
                    {event.location && (
                      <span className="events__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {event.location}
                      </span>
                    )}
                  </div>

                  {event.description && (
                    <p className="events__description">{event.description}</p>
                  )}
                </div>

                {event.link && !past && !cancelled && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`events__cta${soldOut ? ' events__cta--disabled' : ''}`}
                    aria-disabled={soldOut}
                  >
                    {soldOut ? 'Sold out' : 'Reserve →'}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </SectionWrapper>
  )
}

export default Events
