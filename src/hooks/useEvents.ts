import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanity'

export interface EventItem {
  _id: string
  title: string
  date: string
  time?: string
  location?: string
  description?: string
  link?: string
  status: 'available' | 'sold-out' | 'cancelled'
}

export function useEvents() {
  const [events, setEvents] = useState<EventItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch<EventItem[]>(
        `*[_type == "event"] | order(date asc) {
          _id, title, date, time, location, description, link, status
        }`
      )
      .then((data) => {
        if (data) setEvents(data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { events, loading }
}
