function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text">
          &copy; {currentYear} Simona. Course and digital content about wines.
        </p>
        <div className="footer__links">
          <a
            href="#about"
            className="footer__link"
            aria-label="Sobre"
          >
            About
          </a>
          <a
            href="#projects"
            className="footer__link"
            aria-label="Modulos"
          >
            Gallery
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=simona.balzelli@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="Email"
          >
            Contact me
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
