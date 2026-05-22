import { useState, useEffect } from 'react'
import { sanityClient, urlFor } from '../lib/sanity'
import { PHOTO_GALLERIES, type PhotoGallery } from '../constants/photoGalleries'

interface SanityPhoto {
  _key: string
  asset: { _ref: string; _type: string }
  alt?: string
}

interface SanityGallery {
  _id: string
  title: string
  description: string
  order: number
  photos: SanityPhoto[]
}

export function useSanityGalleries() {
  const [galleries, setGalleries] = useState<PhotoGallery[]>(PHOTO_GALLERIES)

  useEffect(() => {
    sanityClient
      .fetch<SanityGallery[]>(
        `*[_type == "photoGallery"] | order(order asc) {
          _id, title, description, order,
          photos[] { _key, asset, alt }
        }`
      )
      .then((data) => {
        if (!data || data.length === 0) return

        const mapped: PhotoGallery[] = data.map((g) => ({
          title: g.title,
          description: g.description ?? '',
          photos: (g.photos ?? []).map((p) => ({
            src: urlFor(p).width(1200).url(),
            alt: p.alt ?? g.title,
          })),
        }))

        setGalleries(mapped)
      })
      .catch(() => {})
  }, [])

  return galleries
}
