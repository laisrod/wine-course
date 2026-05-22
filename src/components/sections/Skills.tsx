import SectionWrapper from '../layout/SectionWrapper'
import { useSiteSettings } from '../../hooks/useSiteSettings'

function Skills() {
  const settings = useSiteSettings()
  return (
    <SectionWrapper id="skills" className="skills">
      <h2 className="skills__title">What you will learn</h2>

      <div className="skills__content">
        <p className="skills__paragraph">{settings.skillsParagraph1}</p>
        <p className="skills__paragraph">{settings.skillsParagraph2}</p>

      </div>
    </SectionWrapper>
  )
}

export default Skills
