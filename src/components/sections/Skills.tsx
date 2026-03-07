import SectionWrapper from '../layout/SectionWrapper'

function Skills() {
  return (
    <SectionWrapper id="skills" className="skills">
      <h2 className="skills__title">What you will learn</h2>

      <div className="skills__content">
        <p className="skills__paragraph">
          O curso combina teoria essencial e pratica guiada para desenvolver seu
          paladar de forma estruturada. Voce aprende a analisar aparencia, aromas
          e sabor com metodo, entendendo como identificar estilos e qualidade.
        </p>

        <p className="skills__paragraph">
          Simona apresenta tecnicas de degustacao, dicas de harmonizacao e
          criterios para escolher vinhos com mais seguranca no dia a dia, seja
          para jantar em casa, presentear ou montar uma pequena adega pessoal.
        </p>

        <p className="skills__paragraph">
          Tambem exploramos regioes marcantes como Lanzarote, nas Ilhas Canarias,
          com foco em contexto, tipicidade e recomendacoes reais. O objetivo e
          que voce saia do curso confiante para degustar, conversar e escolher
          melhor cada garrafa.
        </p>
      </div>
    </SectionWrapper>
  )
}

export default Skills
