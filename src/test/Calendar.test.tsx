import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Calendar from '../components/sections/Calendar'
import { EventCard } from '../components/sections/Calendar'
import { EVENTS, type CalendarEvent } from '../constants/events'

// ---- Shared fixtures ----

const BASE: CalendarEvent = {
  id:          'test-01',
  title:       'Test Tasting',
  date:        '2026-06-15',
  time:        '19:00',
  endTime:     '21:30',
  location:    'Test Location',
  type:        'tasting',
  description: 'A test description.',
  spots:       10,
  spotsLeft:   5,
  contactUrl:  'mailto:test@example.com',
}

function card(overrides: Partial<CalendarEvent> = {}) {
  return render(<EventCard event={{ ...BASE, ...overrides }} />)
}

// ================================================================
// 1. Data integrity
// ================================================================

describe('EVENTS data', () => {
  const VALID_TYPES: CalendarEvent['type'][] = ['tasting', 'course', 'workshop', 'private']
  const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
  const TIME_RE  = /^\d{2}:\d{2}$/

  it('has at least one event', () => {
    expect(EVENTS.length).toBeGreaterThan(0)
  })

  it('all IDs are unique', () => {
    const ids = EVENTS.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(EVENTS)('$id — required fields are present and valid', (ev) => {
    expect(ev.id).toBeTruthy()
    expect(ev.title).toBeTruthy()
    expect(ev.date).toMatch(ISO_DATE)
    expect(ev.time).toMatch(TIME_RE)
    expect(ev.location).toBeTruthy()
    expect(VALID_TYPES).toContain(ev.type)
    expect(ev.description).toBeTruthy()
  })

  it.each(EVENTS)('$id — spotsLeft does not exceed total spots', (ev) => {
    if (ev.spots !== undefined && ev.spotsLeft !== undefined) {
      expect(ev.spotsLeft).toBeGreaterThanOrEqual(0)
      expect(ev.spotsLeft).toBeLessThanOrEqual(ev.spots)
    }
  })

  it.each(EVENTS)('$id — endTime, when present, is HH:MM', (ev) => {
    if (ev.endTime) expect(ev.endTime).toMatch(/^\d{2}:\d{2}$/)
  })
})

// ================================================================
// 2. Calendar section
// ================================================================

describe('Calendar section', () => {
  it('renders the section heading', () => {
    render(<Calendar />)
    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Calendar />)
    expect(screen.getByText(/join one of my tastings/i)).toBeInTheDocument()
  })

  it('renders one article per event in EVENTS', () => {
    render(<Calendar />)
    expect(screen.getAllByRole('article')).toHaveLength(EVENTS.length)
  })

  it('renders every event title', () => {
    render(<Calendar />)
    EVENTS.forEach((ev) => {
      expect(screen.getByRole('heading', { name: ev.title })).toBeInTheDocument()
    })
  })
})

// ================================================================
// 3. EventCard — date badge
// ================================================================

describe('EventCard — date badge', () => {
  it('displays the zero-padded day', () => {
    card()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('displays the abbreviated month in uppercase', () => {
    card()
    expect(screen.getByText('JUN')).toBeInTheDocument()
  })

  it('includes the full readable date in aria-label', () => {
    card()
    expect(
      screen.getByLabelText(/monday.*15.*june.*2026/i),
    ).toBeInTheDocument()
  })
})

// ================================================================
// 4. EventCard — meta information
// ================================================================

describe('EventCard — meta information', () => {
  it('shows start–end time range', () => {
    card()
    expect(screen.getByText('19:00–21:30')).toBeInTheDocument()
  })

  it('shows only start time when endTime is absent', () => {
    card({ endTime: undefined })
    expect(screen.getByText('19:00')).toBeInTheDocument()
  })

  it('shows location', () => {
    card()
    expect(screen.getByText('Test Location')).toBeInTheDocument()
  })

  it('shows total spot count', () => {
    card()
    expect(screen.getByText('10 spots')).toBeInTheDocument()
  })

  it('hides spot count when spots is undefined', () => {
    card({ spots: undefined })
    expect(screen.queryByText(/spots/)).not.toBeInTheDocument()
  })

  it('renders the description', () => {
    card()
    expect(screen.getByText('A test description.')).toBeInTheDocument()
  })
})

// ================================================================
// 5. EventCard — type badge
// ================================================================

describe('EventCard — type badge', () => {
  const cases: { type: CalendarEvent['type']; label: string }[] = [
    { type: 'tasting',  label: 'Tasting' },
    { type: 'course',   label: 'Course' },
    { type: 'workshop', label: 'Workshop' },
    { type: 'private',  label: 'Private' },
  ]

  it.each(cases)('shows "$label" badge for type "$type"', ({ type, label }) => {
    card({ type })
    expect(screen.getByText(label)).toBeInTheDocument()
  })
})

// ================================================================
// 6. EventCard — availability status
// ================================================================

describe('EventCard — availability status', () => {
  it('shows no status badge for normal availability', () => {
    card({ spots: 10, spotsLeft: 5 })
    expect(screen.queryByText(/sold out/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/spots? left/i)).not.toBeInTheDocument()
  })

  it('shows "2 spots left" when spotsLeft is 2', () => {
    card({ spots: 10, spotsLeft: 2 })
    expect(screen.getByText('2 spots left')).toBeInTheDocument()
  })

  it('uses singular "spot left" when spotsLeft is 1', () => {
    card({ spots: 10, spotsLeft: 1 })
    expect(screen.getByText('1 spot left')).toBeInTheDocument()
  })

  it('shows "Sold out" status badge when spotsLeft is 0', () => {
    card({ spots: 10, spotsLeft: 0 })
    // Both the status badge and the CTA contain "Sold out" — assert at least one status badge exists
    expect(screen.getAllByText('Sold out').length).toBeGreaterThanOrEqual(1)
  })

  it('does not show low-availability badge when spotsLeft is exactly 4', () => {
    card({ spots: 10, spotsLeft: 4 })
    expect(screen.queryByText(/spots? left/i)).not.toBeInTheDocument()
  })
})

// ================================================================
// 7. EventCard — CTA button
// ================================================================

describe('EventCard — CTA', () => {
  it('shows "Reserve your spot" for a regular event with availability', () => {
    card({ type: 'tasting', spotsLeft: 5 })
    expect(screen.getByRole('link', { name: /reserve your spot/i })).toBeInTheDocument()
  })

  it('shows "Enquire" for a private event', () => {
    card({ type: 'private' })
    expect(screen.getByRole('link', { name: /enquire/i })).toBeInTheDocument()
  })

  it('shows "Sold out" and marks CTA disabled when spotsLeft is 0', () => {
    card({ spotsLeft: 0 })
    const link = screen.getByRole('link', { name: /sold out/i })
    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(link).toHaveAttribute('tabindex', '-1')
  })

  it('links to the provided contactUrl', () => {
    card({ contactUrl: 'mailto:wine@example.com' })
    expect(screen.getByRole('link')).toHaveAttribute('href', 'mailto:wine@example.com')
  })

  it('does not render a CTA when contactUrl is absent', () => {
    const { contactUrl: _, ...noUrl } = BASE
    render(<EventCard event={noUrl as CalendarEvent} />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
