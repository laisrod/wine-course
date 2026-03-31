import { useCallback, useEffect, useState } from 'react'
import type { PhotoGallery } from '../constants/photoGalleries'

export function useGalleryModal(galleries: PhotoGallery[]) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  const activeGallery =
    activeGalleryIndex !== null ? galleries[activeGalleryIndex] : null
  const activePhoto = activeGallery
    ? activeGallery.photos[activePhotoIndex]
    : null

  const openGallery = useCallback((index: number) => {
    setActiveGalleryIndex(index)
    setActivePhotoIndex(0)
  }, [])

  const closeModal = useCallback(() => {
    setActiveGalleryIndex(null)
    setActivePhotoIndex(0)
  }, [])

  const goToNextPhoto = useCallback(() => {
    if (!activeGallery) return
    setActivePhotoIndex((prev) => (prev + 1) % activeGallery.photos.length)
  }, [activeGallery])

  const goToPreviousPhoto = useCallback(() => {
    if (!activeGallery) return
    setActivePhotoIndex(
      (prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length
    )
  }, [activeGallery])

  useEffect(() => {
    if (!activeGallery) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      } else if (event.key === 'ArrowRight') {
        goToNextPhoto()
      } else if (event.key === 'ArrowLeft') {
        goToPreviousPhoto()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeGallery, closeModal, goToNextPhoto, goToPreviousPhoto])

  return {
    activeGallery,
    activePhoto,
    activePhotoIndex,
    openGallery,
    closeModal,
    goToNextPhoto,
    goToPreviousPhoto,
  }
}

