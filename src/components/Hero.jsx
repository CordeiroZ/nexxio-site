import './Hero.css'

const WA_NUMBER = '5511999999999'

export default function Hero() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demo%20do%20Nexxio%20Clinic%21`

  return (
    <section className="hero" id="top">
      <div className="hero__bg-glow" />

      <div className="container hero__inner">
        {/* Left: copy */}
        <div className="hero__left">
          <div className="hero__specialties">
            <span className="specialty-pill specialty-pill--gastro">Gastroenterologia</span>
            <span className="specialty-pill specialty-pill--gine">Ginecologia</span>
            <span className="specialty-pill specialty-pill--orl">ORL</span>
            <span className="specialty-pill specialty-pill--uro">Urologia</span>
          </div>

          <h1 className="hero__title">
            Do exame ao laudo <em>online</em> — o paciente acessa pelo celular, sem papel.
          </h1>

          <p className="hero__subtitle">
            Vídeo integrado ao laudo, documentação padronizada por procedimento
            e acesso seguro do paciente, em conformidade com a LGPD.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hero__cta"
          >
            <WhatsAppIcon />
            Agendar uma demo gratuita
          </a>

          <p className="hero__cta-note">Sem compromisso · Respondemos em até 1h útil</p>
        </div>

        {/* Right: UI mockup */}
        <div className="hero__right">
          <div className="hero__mockup">

            {/* Floating notification */}
            <div className="mock-toast">
              <span className="mock-toast__dot" />
              Laudo liberado — Ana C. Ferreira
            </div>

            {/* Back card */}
            <div className="mock-card mock-card--back">
              <div className="mock-card__row">
                <span className="mock-label">Laudo #2845</span>
                <span className="mock-badge mock-badge--purple">Aguardando liberação</span>
              </div>
              <div className="mock-patient">
                <div className="mock-avatar mock-avatar--sm" style={{ background: '#7c3aed' }}>MR</div>
                <span className="mock-patient-name">Maria S. Oliveira — Colposcopia</span>
              </div>
            </div>

            {/* Front card */}
            <div className="mock-card mock-card--front">
              <div className="mock-card__row">
                <span className="mock-label">Laudo #2847</span>
                <span className="mock-badge mock-badge--green">
                  <span className="mock-badge__dot" />
                  Liberado
                </span>
              </div>

              <div className="mock-divider" />

              <div className="mock-patient">
                <div className="mock-avatar" style={{ background: '#0ea5e9' }}>CM</div>
                <div>
                  <div className="mock-patient-name">Carlos R. Mendes</div>
                  <div className="mock-patient-proc">Colonoscopia Total c/ Polipectomia</div>
                </div>
              </div>

              <div className="mock-divider" />

              <div className="mock-flow">
                <span className="mock-flow__label">Fluxo do laudo</span>
                <div className="mock-flow__steps">
                  {[
                    { label: 'Anamnese', done: true },
                    { label: 'Exame', done: true },
                    { label: 'Liberação', done: true },
                    { label: 'Publicado', done: true },
                  ].map((s, i) => (
                    <div key={i} className="mock-step">
                      <div className={`mock-step__dot${s.done ? ' mock-step__dot--done' : ''}`}>
                        {s.done && <MiniCheck />}
                      </div>
                      {i < 3 && <div className="mock-step__line mock-step__line--done" />}
                    </div>
                  ))}
                </div>
                <div className="mock-flow__labels">
                  <span>Anamnese</span>
                  <span>Exame</span>
                  <span>Liberação</span>
                  <span>Publicado</span>
                </div>
              </div>

              <div className="mock-divider" />

              <div className="mock-footer">
                <span className="mock-footer__meta">Dr. Eduardo Barros · hoje, 14h32</span>
                <button className="mock-footer__btn">
                  <PdfIcon /> Ver PDF
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function MiniCheck() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  )
}
