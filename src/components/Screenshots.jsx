import { useState } from 'react'
import './Screenshots.css'

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    desc: 'Visão geral dos laudos em andamento — quantos aguardam anamnese, exame ou liberação, e os últimos atendimentos.',
    src: '/screenshot-dashboard.png',
  },
  {
    id: 'laudos',
    label: 'Lista de laudos',
    desc: 'Todos os laudos com filtros por status, busca por paciente e médico, e acesso rápido a cada atendimento.',
    src: '/screenshot-laudos.png',
  },
  {
    id: 'fotografico',
    label: 'Laudo fotográfico',
    desc: 'Captura de fotos e vídeos direto da câmera, vinculados ao exame — tudo registrado dentro do laudo, sem arquivos soltos.',
    src: '/laudo-fotografico.png',
  },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="screenshots section">
      <div className="container">
        <div className="screenshots__header">
          <span className="section-label">O sistema por dentro</span>
          <h2 className="section-title">Interface projetada para<br />o fluxo clínico real</h2>
        </div>

        <div className="screenshots__tabs">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`ss-tab${active === i ? ' ss-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="screenshots__desc">{tab.desc}</p>

        <div className="browser-frame">
          <div className="browser-frame__bar">
            <div className="browser-frame__dots">
              <span /><span /><span />
            </div>
            <div className="browser-frame__url">
              app.nexxiomed.com.br
            </div>
          </div>
          <div className="browser-frame__screen">
            {tabs.map((t, i) => (
              <img
                key={t.id}
                src={t.src}
                alt={t.label}
                className={`browser-frame__img${active === i ? ' browser-frame__img--active' : ''}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
