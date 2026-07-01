import './Hero.css'

const WA_NUMBER = '5521984189452'
const DEMO_URL  = 'https://app.nexxiomed.com.br'

export default function Hero() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%2C%20quero%20ver%20uma%20demo%20do%20Nexxio%20Med%21`

  return (
    <section className="hero" id="top">
      <div className="hero__bg-glow" />

      <div className="container hero__inner">
        {/* Left: copy */}
        <div className="hero__left">

          {/* Specialty pills — uniform style */}
          <div className="hero__specialties">
            {['Colposcopia', 'Histeroscopia', 'CAF', 'Endoscopia'].map(s => (
              <span key={s} className="specialty-pill">{s}</span>
            ))}
          </div>

          <h1 className="hero__title">
            Três sistemas viram um. O laudo sai em PDF. O paciente acessa pelo celular.
          </h1>

          <p className="hero__subtitle">
            Sua clínica usa Word para laudar, WhatsApp para entregar e papel para arquivar.
            O Nexxio reúne tudo em um lugar — com rastreabilidade, fotos do exame integradas
            e acesso digital ao paciente. Funciona no navegador, sem instalar nada.
          </p>

          {/* "Replaces" row */}
          <div className="hero__replaces">
            <span className="hero__replaces-label">Substitui:</span>
            <div className="hero__replaces-chips">
              <span className="tool-chip">Word / Google Docs</span>
              <span className="tool-chip">WhatsApp para entrega</span>
              <span className="tool-chip">Papel + impressora</span>
            </div>
          </div>

          <div className="hero__cta-group">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hero__cta">
              <PlayIcon />
              Testar o sistema agora
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp hero__cta">
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          <p className="hero__cta-note">Acesso imediato · Dados fictícios · Sem cadastro</p>
        </div>

        {/* Right: UI mockup */}
        <div className="hero__right">
          <div className="hero__mockup">

            <div className="mock-toast">
              <span className="mock-toast__dot" />
              Laudo liberado — Ana C. Ferreira
            </div>

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
                <div className="mock-avatar" style={{ background: '#0ea5e9' }}>AP</div>
                <div>
                  <div className="mock-patient-name">Ana P. Ferreira</div>
                  <div className="mock-patient-proc">Videohisteroscopia Diagnóstica</div>
                </div>
              </div>
              <div className="mock-divider" />
              <div className="mock-flow">
                <span className="mock-flow__label">Fluxo do laudo</span>
                <div className="mock-flow__steps">
                  {['Anamnese', 'Fotos', 'Laudo', 'Online'].map((label, i) => (
                    <div key={i} className="mock-step">
                      <div className="mock-step__dot mock-step__dot--done">
                        <MiniCheck />
                      </div>
                      {i < 3 && <div className="mock-step__line mock-step__line--done" />}
                    </div>
                  ))}
                </div>
                <div className="mock-flow__labels">
                  {['Anamnese', 'Fotos', 'Laudo', 'Online'].map(l => <span key={l}>{l}</span>)}
                </div>
              </div>
              <div className="mock-divider" />
              <div className="mock-footer">
                <span className="mock-footer__meta">Dra. Camila Rocha · hoje, 14h32</span>
                <button className="mock-footer__btn"><PdfIcon /> Ver PDF</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function MiniCheck() {
  return <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

function PdfIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
}
