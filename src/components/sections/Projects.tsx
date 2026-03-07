import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SectionWrapper from '../layout/SectionWrapper'
import galery1Img1 from '../../assets/images/galery1/Screenshot from 2026-03-06 15-02-53.png'
import galery1Img2 from '../../assets/images/galery1/Screenshot from 2026-03-06 15-03-08.png'
import galery1Img3 from '../../assets/images/galery1/Screenshot from 2026-03-06 15-03-13.png'
import galery1Img4 from '../../assets/images/galery1/Screenshot from 2026-03-06 15-03-17.png'
import galery1Img5 from '../../assets/images/galery1/Screenshot from 2026-03-06 15-03-22.png'
import galery2Img1 from '../../assets/images/galery2/Screenshot from 2026-03-06 15-13-12.png'
import galery2Img2 from '../../assets/images/galery2/Screenshot from 2026-03-06 15-13-16.png'
import galery2Img3 from '../../assets/images/galery2/Screenshot from 2026-03-06 15-13-20.png'
import galery2Img4 from '../../assets/images/galery2/Screenshot from 2026-03-06 15-13-24.png'
import galery2Img5 from '../../assets/images/galery2/Screenshot from 2026-03-06 15-13-27.png'
import galery3Img1 from '../../assets/images/galery3/Screenshot from 2026-03-06 15-15-47.png'
import galery3Img2 from '../../assets/images/galery3/Screenshot from 2026-03-06 15-20-21.png'
import galery3Img3 from '../../assets/images/galery3/Screenshot from 2026-03-06 15-20-25.png'
import galery3Img4 from '../../assets/images/galery3/Screenshot from 2026-03-06 15-20-30.png'
import galery3Img5 from '../../assets/images/galery3/Screenshot from 2026-03-06 15-20-35.png'
import galery3Img6 from '../../assets/images/galery3/Screenshot from 2026-03-06 15-20-38.png'
import galery4Img1 from '../../assets/images/galery4/Screenshot from 2026-03-06 15-22-51.png'
import galery4Img2 from '../../assets/images/galery4/Screenshot from 2026-03-06 15-23-01.png'
import galery4Img3 from '../../assets/images/galery4/Screenshot from 2026-03-06 15-23-09.png'
import galery4Img4 from '../../assets/images/galery4/Screenshot from 2026-03-06 15-23-43.png'
import galery4Img5 from '../../assets/images/galery4/Screenshot from 2026-03-06 15-23-49.png'
import galery4Img6 from '../../assets/images/galery4/Screenshot from 2026-03-06 15-24-03.png'

const PHOTO_GALLERIES = [
  {
    title: 'Galeria 1 - Degustacoes',
    description: 'Momentos de degustacao guiada e analise sensorial.',
    photos: [
      { src: galery1Img1, alt: 'Foto da galeria 1 - degustacao 1' },
      { src: galery1Img2, alt: 'Foto da galeria 1 - degustacao 2' },
      { src: galery1Img3, alt: 'Foto da galeria 1 - degustacao 3' },
      { src: galery1Img4, alt: 'Foto da galeria 1 - degustacao 4' },
      { src: galery1Img5, alt: 'Foto da galeria 1 - degustacao 5' },
    ],
  },
  {
    title: 'Galeria 2 - Aulas e Comunidade',
    description: 'Aulas praticas, encontros e troca de experiencias.',
    photos: [
      { src: galery2Img1, alt: 'Foto da galeria 2 - aula 1' },
      { src: galery2Img2, alt: 'Foto da galeria 2 - aula 2' },
      { src: galery2Img3, alt: 'Foto da galeria 2 - aula 3' },
      { src: galery2Img4, alt: 'Foto da galeria 2 - aula 4' },
      { src: galery2Img5, alt: 'Foto da galeria 2 - aula 5' },
    ],
  },
  {
    title: 'Galeria 3 - Eventos',
    description: 'Eventos especiais, harmonizacoes e roteiros de vinho.',
    photos: [
      { src: galery3Img1, alt: 'Foto da galeria 3 - eventos 1' },
      { src: galery3Img2, alt: 'Foto da galeria 3 - eventos 2' },
      { src: galery3Img3, alt: 'Foto da galeria 3 - eventos 3' },
      { src: galery3Img4, alt: 'Foto da galeria 3 - eventos 4' },
      { src: galery3Img5, alt: 'Foto da galeria 3 - eventos 5' },
      { src: galery3Img6, alt: 'Foto da galeria 3 - eventos 6' },
    ],
  },
  {
    title: 'Galeria 4 - Recomendacoes',
    description: 'Rotulos selecionados, dicas e conteudos exclusivos.',
    photos: [
      { src: galery4Img1, alt: 'Foto da galeria 4 - recomendacoes 1' },
      { src: galery4Img2, alt: 'Foto da galeria 4 - recomendacoes 2' },
      { src: galery4Img3, alt: 'Foto da galeria 4 - recomendacoes 3' },
      { src: galery4Img4, alt: 'Foto da galeria 4 - recomendacoes 4' },
      { src: galery4Img5, alt: 'Foto da galeria 4 - recomendacoes 5' },
      { src: galery4Img6, alt: 'Foto da galeria 4 - recomendacoes 6' },
    ],
  },
]

function Projects() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const activeGallery = activeGalleryIndex !== null ? PHOTO_GALLERIES[activeGalleryIndex] : null
  const activePhoto = activeGallery ? activeGallery.photos[activePhotoIndex] : null

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
    setActivePhotoIndex((prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length)
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

  return (
    <SectionWrapper id="projects" className="projects">
      <h2 className="projects__title">Modules and Experiences</h2>

      <p className="projects__intro">
        Uma jornada completa com aulas, degustacoes guiadas, recomendacoes e
        vivencias para elevar seu conhecimento sobre vinhos com leveza e profundidade.
      </p>

      <div className="projects__galleries">
        {PHOTO_GALLERIES.map((gallery, index) => (
          <button
            key={gallery.title}
            type="button"
            className="projects__gallery"
            onClick={() => {
              setActiveGalleryIndex(index)
              setActivePhotoIndex(0)
            }}
            aria-label={`Abrir ${gallery.title}`}
          >
            <div className="projects__gallery-header">
              <h3 className="projects__gallery-title">{gallery.title}</h3>
              <p className="projects__gallery-description">{gallery.description}</p>
            </div>

            <div className="projects__gallery-grid">
              {gallery.photos.slice(0, 2).map((photo) => (
                <figure key={photo.alt} className="projects__photo-frame">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="projects__photo"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </button>
        ))}
      </div>

      {activeGallery &&
        createPortal(
          <div
            className="projects__modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeGallery.title}
            onClick={closeModal}
          >
            <div className="projects__modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="projects__modal-close"
                onClick={closeModal}
                aria-label="Fechar galeria"
              >
                x
              </button>

              <h3 className="projects__modal-title">{activeGallery.title}</h3>
              <p className="projects__modal-description">{activeGallery.description}</p>

              {activePhoto && (
                <div className="projects__modal-viewer">
                  <button
                    type="button"
                    className="projects__modal-nav projects__modal-nav--prev"
                    onClick={goToPreviousPhoto}
                    aria-label="Foto anterior"
                  >
                    ‹
                  </button>

                  <figure className="projects__modal-photo-frame">
                    <img src={activePhoto.src} alt={activePhoto.alt} className="projects__modal-photo" />
                  </figure>

                  <button
                    type="button"
                    className="projects__modal-nav projects__modal-nav--next"
                    onClick={goToNextPhoto}
                    aria-label="Proxima foto"
                  >
                    ›
                  </button>
                </div>
              )}

              <p className="projects__modal-counter">
                {activePhotoIndex + 1} / {activeGallery.photos.length}
              </p>
            </div>
          </div>,
          document.body
        )}
    </SectionWrapper>
  )
}

export default Projects
