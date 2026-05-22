import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanity'
import { FEEDBACKS, type FeedbackItem } from '../constants/feedbacks'

export function useFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(FEEDBACKS)

  useEffect(() => {
    sanityClient
      .fetch<FeedbackItem[]>(
        `*[_type == "feedback"] | order(order asc) { name, role, quote }`
      )
      .then((data) => {
        if (data && data.length > 0) setFeedbacks(data)
      })
      .catch(() => {})
  }, [])

  return feedbacks
}
