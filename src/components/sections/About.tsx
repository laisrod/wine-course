import SectionWrapper from '../layout/SectionWrapper'
import avatarImg from '../../assets/images/portifolioeu.jpg'
import { useSiteSettings } from '../../hooks/useSiteSettings'

function About() {
  const settings = useSiteSettings()
  return (
    <SectionWrapper id="about" className="about">
      <h2 className="about__title">About Simona</h2>

      <div className="about__grid">
        <div className="about__left">
          <div className="about__content">
            <p className="about__paragraph">{settings.aboutParagraph1}</p>
            <p className="about__paragraph">{settings.aboutParagraph2}</p>
          </div>

          <div className="about__social">
            <a
              href="#projects"
              className="about__social-link"
              aria-label="Conteudos do curso"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 3h12" />
                <path d="M8 3v4a4 4 0 0 0 8 0V3" />
                <path d="M12 11v8" />
                <path d="M8 21h8" />
              </svg>
            </a>
            <a
              href="#contact"
              className="about__social-link"
              aria-label="Inscreva-se"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 7l-10 6L2 7" />
                <rect x="2" y="5" width="20" height="14" rx="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="about__right">
          <img
            src={avatarImg}
            alt="Simona"
            className="about__avatar"
            loading="lazy"
            width="200"
            height="200"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
