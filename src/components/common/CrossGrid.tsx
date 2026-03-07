import { useMemo } from 'react'

const COLS = 30
const ROWS = 4

function CrossGrid() {
  const crosses = useMemo(() => Array.from({ length: COLS * ROWS }), [])

  return (
    <section className="cross-grid" aria-hidden="true">
      <div className="cross-grid__container">
        {crosses.map((_, i) => (
          <span key={i} className="cross-grid__item" aria-hidden="true">
            <svg className="cross-grid__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 2h4v4l1.5 2.5V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8.5L10 6V2zm1 2v1.4L9.5 8v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8l-1.5-2.6V4h-2z" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  )
}

export default CrossGrid
