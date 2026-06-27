import './Specialties.css'

const specialties = [
  {
    name: 'Gastroenterologia',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    icon: <GastroIcon />,
    procedures: [
      'Colonoscopia',
      'Endoscopia digestiva alta (EDA)',
      'Retossigmoidoscopia',
      'CPRE',
      'Enteroscopia',
    ],
  },
  {
    name: 'Ginecologia',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
    icon: <GineIcon />,
    procedures: [
      'Colposcopia',
      'Histeroscopia diagnóstica',
      'Histeroscopia cirúrgica',
      'Laparoscopia ginecológica',
      'Vulvoscopia',
    ],
  },
  {
    name: 'ORL',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    icon: <OrlIcon />,
    procedures: [
      'Nasofibroscopia',
      'Laringoscopia',
      'Videotoscopia',
      'Rinossinusoscopia',
      'Videoestroboscopia',
    ],
  },
  {
    name: 'Urologia',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    icon: <UroIcon />,
    procedures: [
      'Cistoscopia',
      'Uretroscopia',
      'Ureteroscopia',
      'Uretrocistoscopia',
      'Pieloscopia',
    ],
  },
]

export default function Specialties() {
  return (
    <section className="specialties section" id="especialidades">
      <div className="container">
        <div className="specialties__header">
          <span className="section-label">Especialidades</span>
          <h2 className="section-title">Desenvolvido para quem<br />trabalha com vídeo endoscópico</h2>
          <p className="section-subtitle">
            Cada especialidade tem seus procedimentos mapeados. O sistema acompanha
            o laudo do início ao fim, com vídeo integrado.
          </p>
        </div>

        <div className="specialties__grid">
          {specialties.map((s, i) => (
            <div
              className="spec-card"
              key={i}
              style={{ '--spec-color': s.color, '--spec-bg': s.bg, '--spec-border': s.border }}
            >
              <div className="spec-card__header">
                <div className="spec-card__icon">{s.icon}</div>
                <h3 className="spec-card__name">{s.name}</h3>
              </div>
              <ul className="spec-card__list">
                {s.procedures.map((p, j) => (
                  <li key={j}>
                    <span className="spec-dot" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GastroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"/>
      <path d="M12 8v1M12 15v1"/>
    </svg>
  )
}

function GineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5"/>
      <path d="M12 13v8M9 18h6"/>
    </svg>
  )
}

function OrlIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 00-7 7c0 3.87 3.13 7 7 7s7-3.13 7-7a7 7 0 00-7-7z"/>
      <path d="M12 16v6M8 19l4 3 4-3"/>
      <path d="M9 9a3 3 0 016 0"/>
    </svg>
  )
}

function UroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L8 8H4l4 4-2 6 6-3 6 3-2-6 4-4h-4L12 2z"/>
    </svg>
  )
}
