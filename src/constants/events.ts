export interface CalendarEvent {
  id: string
  title: string
  date: string        // ISO format: YYYY-MM-DD
  time: string        // e.g. "19:00"
  endTime?: string    // e.g. "22:00"
  location: string
  type: 'tasting' | 'course' | 'workshop' | 'private'
  description: string
  spots?: number
  spotsLeft?: number
  contactUrl?: string
}

export const EVENTS: CalendarEvent[] = [
  {
    id: 'ev-001',
    title: 'Italian Reds — Abruzzo & Beyond',
    date: '2026-05-08',
    time: '19:30',
    endTime: '22:00',
    location: 'Barcelona, Eixample',
    type: 'tasting',
    description:
      'An evening dedicated to the bold and expressive reds of Abruzzo. We will taste 6 wines side by side, exploring the character of Montepulciano d\'Abruzzo and neighboring varieties.',
    spots: 12,
    spotsLeft: 4,
    contactUrl: 'mailto:devlaisrodrigues@gmail.com',
  },
  {
    id: 'ev-002',
    title: 'Wine Fundamentals — 4-Week Course',
    date: '2026-05-19',
    time: '18:30',
    endTime: '20:30',
    location: 'Online (Zoom)',
    type: 'course',
    description:
      'A structured introduction to wine covering appearance, aroma, and palate analysis. Four weekly sessions combining theory with guided tastings you do at home.',
    spots: 20,
    spotsLeft: 9,
    contactUrl: 'mailto:devlaisrodrigues@gmail.com',
  },
  {
    id: 'ev-003',
    title: 'Sparkling Wines of the World',
    date: '2026-06-06',
    time: '19:00',
    endTime: '21:30',
    location: 'Barcelona, Gràcia',
    type: 'workshop',
    description:
      'From Champagne to Cava and Prosecco — a hands-on workshop comparing production methods and styles. Learn to read bubbles, mousse, and the role of terroir in sparkling wines.',
    spots: 14,
    spotsLeft: 6,
    contactUrl: 'mailto:devlaisrodrigues@gmail.com',
  },
  {
    id: 'ev-004',
    title: 'Summer Whites & Rosés',
    date: '2026-06-27',
    time: '18:00',
    endTime: '20:30',
    location: 'Barcelona, Sant Pere',
    type: 'tasting',
    description:
      'A light and refreshing session featuring dry whites and rosés perfect for summer. Focus on freshness, minerality, and pairing with Mediterranean cuisine.',
    spots: 12,
    spotsLeft: 12,
    contactUrl: 'mailto:devlaisrodrigues@gmail.com',
  },
  {
    id: 'ev-005',
    title: 'Alto Adige Deep Dive',
    date: '2026-07-18',
    time: '19:30',
    endTime: '22:00',
    location: 'Barcelona, Eixample',
    type: 'tasting',
    description:
      'A curated tasting exploring the unique alpine wines of Südtirol/Alto Adige — varieties like Gewürztraminer, Lagrein, and Vernatsch in their full expressive range.',
    spots: 10,
    spotsLeft: 10,
    contactUrl: 'mailto:devlaisrodrigues@gmail.com',
  },
  {
    id: 'ev-006',
    title: 'Private Wine Experience',
    date: '2026-08-15',
    time: '20:00',
    location: 'Your venue or mine',
    type: 'private',
    description:
      'A fully personalised tasting designed around you and your guests — perfect for birthdays, corporate events, or intimate gatherings. Menu and theme tailored on request.',
    contactUrl: 'mailto:devlaisrodrigues@gmail.com',
  },
]
