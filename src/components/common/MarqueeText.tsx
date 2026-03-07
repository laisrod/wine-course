function MarqueeText() {
  const wineTopics = [
    'Degustacao Guiada',
    'Harmonizacao',
    'Regioes Classicas',
    'Lanzarote',
    'Eventos',
    'Recomendacoes',
    'Aromas e Sabores',
    'Servico de Vinhos',
    'Analise Sensorial',
    'Estilos de Uva',
    'Conteudo em Video',
    'Curadoria de Rotulos',
  ]

  const wineIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 3h12" />
      <path d="M8 3v4a4 4 0 0 0 8 0V3" />
      <path d="M12 11v8" />
      <path d="M8 21h8" />
    </svg>
  )

  /* Build a row of icons duplicated for seamless loop */
  const iconRow = wineTopics.map((topic, i) => (
    <span key={i} className="marquee__item">
      <span className="marquee__icon" aria-hidden="true">{wineIcon}</span>
      <span className="marquee__label">{topic}</span>
    </span>
  ))

  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <div className="marquee__group">{iconRow}</div>
        <div className="marquee__group">{iconRow}</div>
      </div>
    </section>
  )
}

export default MarqueeText
