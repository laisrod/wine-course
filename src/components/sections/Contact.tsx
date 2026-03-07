import SectionWrapper from '../layout/SectionWrapper'
import { useForm } from '../../hooks/useForm'
import type { ContactFormValues } from '../../types'

const FORMSPREE_ID = 'mwvnnjjn'

function Contact() {
  const { values, handleChange, handleSubmit, submitted, sending, error } =
    useForm<ContactFormValues>({
      initialValues: { name: '', email: '', message: '' },
      onSubmit: async (vals) => {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: vals.name,
            email: vals.email,
            message: vals.message,
          }),
        })

        if (!response.ok) {
          throw new Error('Formspree submission failed')
        }
      },
    })

  return (
    <SectionWrapper id="contact" className="contact">
      <div className="contact__grid">
        <div className="contact__info">
          <h2 className="contact__title">Subscription and Contact</h2>
          <p className="contact__text">
            Quer participar do curso da Simona ou tirar duvidas sobre as aulas?
            Envie sua mensagem e receba as proximas datas, valores e detalhes do
            programa completo.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="contact-name" className="contact__label">Nome</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              className="contact__input"
              placeholder="Seu nome"
              required
              value={values.name}
              onChange={handleChange('name')}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email" className="contact__label">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              className="contact__input"
              placeholder="Seu email"
              required
              value={values.email}
              onChange={handleChange('email')}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message" className="contact__label">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              className="contact__textarea"
              placeholder="Conte um pouco sobre seu interesse no curso"
              rows={6}
              required
              value={values.message}
              onChange={handleChange('message')}
            />
          </div>

          <button
            type="submit"
            className="contact__submit"
            disabled={sending || submitted}
          >
            {sending ? 'Enviando...' : submitted ? 'Mensagem enviada com sucesso' : 'Quero me inscrever'}
          </button>

          {submitted && (
            <p className="contact__success" role="status">
              Mensagem enviada com sucesso! Em breve voce recebe um retorno.
            </p>
          )}

          {error && (
            <p className="contact__error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  )
}

export default Contact
