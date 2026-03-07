import { useRef, useCallback } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import Badge from '../ui/Badge'

function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const [springs, api] = useSpring(() => ({
    x: 550,
    y: 200,
    active: 0,
    config: { mass: 1, tension: 280, friction: 40 },
  }))

  const updateSpot = useCallback(
    (clientX: number, clientY: number) => {
      const h1 = h1Ref.current
      if (!h1) return
      const rect = h1.getBoundingClientRect()
      api.start({
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: 1,
      })
    },
    [api]
  )

  const hideSpot = useCallback(() => {
    api.start({ active: 0 })
  }, [api])

  /* Mouse handlers */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => updateSpot(e.clientX, e.clientY),
    [updateSpot]
  )

  /* Touch handlers */
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      const touch = e.touches[0]
      if (touch) updateSpot(touch.clientX, touch.clientY)
    },
    [updateSpot]
  )

  return (
    <section
      className="hero"
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={hideSpot}
      onTouchMove={handleTouchMove}
      onTouchEnd={hideSpot}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__container">
        <animated.h1
          className="hero__statement"
          ref={h1Ref}
          style={{
            backgroundImage: to(
              [springs.x, springs.y, springs.active],
              (x, y, a) =>
                a > 0.1
                  ? `radial-gradient(circle 360px at ${x}px ${y}px, #c08a2f 0%, #7d1f3a 34%, #41214d 72%, #1f1024 100%)`
                  : `linear-gradient(135deg, #c08a2f 0%, #7d1f3a 35%, #54275d 68%, #1f1024 100%)`
            ),
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sharing my passion for wine and inspiring my friends
          
        </animated.h1>

        <div className="hero__bottom">
          <div className="hero__info">
            <p className="hero__name">Simona</p>
            <p className="hero__title">Criadora de Conteudo Digital sobre Vinhos</p>
            <Badge variant="status">Inscricoes Abertas</Badge>
          </div>

          <div className="hero__social">
            <a
              href="https://www.instagram.com/winewithsimo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Instagram de Wine with Simo"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-1.7-1.7 4 4 0 0 1 1.7 1.7z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              <span className="hero__social-text">@winewithsimo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
