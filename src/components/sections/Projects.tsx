import { createPortal } from 'react-dom'
import SectionWrapper from '../layout/SectionWrapper'
import { PHOTO_GALLERIES } from '../../constants/photoGalleries'
import { useGalleryModal } from '../../hooks/useGalleryModal'

function Projects() {
  const {
    activeGallery,
    activePhoto,
    activePhotoIndex,
    openGallery,
    closeModal,
    goToNextPhoto,
    goToPreviousPhoto,
  } = useGalleryModal(PHOTO_GALLERIES)

  return (
    <SectionWrapper id="projects" className="projects">
      <h2 className="projects__title">Gallery</h2>

      <div className="projects__galleries">
        {PHOTO_GALLERIES.map((gallery, index) => (
          <button
            key={gallery.title}
            type="button"
            className="projects__gallery"
            onClick={() => openGallery(index)}
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
