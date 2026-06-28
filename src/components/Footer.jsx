import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo-nexxio-tema-escuro.png" alt="Nexxio Med" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            Laudos endoscópicos digitais para gastroenterologia, ginecologia, ORL e urologia.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <span className="footer__col-title">Produto</span>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#fluxo">Como funciona</a>
            <a href="#perfis">Perfis de acesso</a>
            <a href="#seguranca">Segurança & LGPD</a>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Contato</span>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:contato@nexxiomed.com.br">E-mail</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Nexxio Med. Todos os direitos reservados.</span>
          <span className="footer__bottom-right">
            Feito com cuidado para clínicas brasileiras.
          </span>
        </div>
      </div>
    </footer>
  )
}
