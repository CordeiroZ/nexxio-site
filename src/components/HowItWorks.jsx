import { useEffect, useRef, useState } from 'react'
import './HowItWorks.css'

const STEP_MS = 520    // ms entre cada step acender
const START_DELAY = 400 // ms após entrar na viewport

const steps = [
  {
    icon: <UserPlusIcon />,
    title: 'Cadastro',
    desc: 'Recepção cadastra o paciente com foto, CPF e convênio',
  },
  {
    icon: <VideoIcon />,
    title: 'Exame',
    desc: 'Captura de vídeo e fotos direto da câmera, vinculados ao exame',
  },
  {
    icon: <FileEditIcon />,
    title: 'Laudo',
    desc: 'Template estruturado por procedimento — sem digitar texto livre',
  },
  {
    icon: <PdfIcon />,
    title: 'PDF gerado',
    desc: 'Laudo profissional com fotos, formatação clínica e dados do procedimento',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'Notificação',
    desc: 'Botão de WhatsApp com mensagem pronta — médico envia com um clique ao liberar',
  },
  {
    icon: <PhoneIcon />,
    title: 'Acesso online',
    desc: 'Paciente acessa o laudo pelo CPF — sem criar conta, no celular',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const [activeStep, setActiveStep] = useState(-1)
  const timers = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        steps.forEach((_, i) => {
          const t = setTimeout(
            () => setActiveStep(i),
            START_DELAY + i * STEP_MS
          )
          timers.current.push(t)
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      timers.current.forEach(clearTimeout)
    }
  }, [])

  const fillPct = activeStep < 0
    ? 0
    : (activeStep / (steps.length - 1)) * 100

  return (
    <section className="how section" id="fluxo" ref={ref}>
      <div className="container">
        <div className="how__header">
          <span className="section-label">Fluxo clínico</span>
          <h2 className="section-title">Um exame, um sistema</h2>
          <p className="section-subtitle">
            Da recepção ao paciente acessando o laudo pelo celular —
            sem papel, sem retrabalho.
          </p>
        </div>

        <div className="how__steps">
          {/* Track (desktop only) */}
          <div className="how__track" aria-hidden="true">
            <div
              className="how__track-fill"
              style={{ width: `${fillPct}%` }}
            />
          </div>

          {steps.map((step, i) => {
            const active = i <= activeStep
            return (
              <div
                className={`flow-step${active ? ' flow-step--active' : ''}`}
                key={i}
                style={{ '--delay': `${i * 0.08}s` }}
              >
                <div className={`flow-step__card${active ? ' flow-step__card--active' : ''}`}>
                  <span className={`flow-step__num${active ? ' flow-step__num--active' : ''}`}>
                    {i + 1}
                  </span>
                  <div className="flow-step__icon">{step.icon}</div>
                </div>
                <h3 className="flow-step__title">{step.title}</h3>
                <p className="flow-step__desc">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function UserPlusIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  )
}

function FileEditIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <path d="M9 15v-3h1.5a1.5 1.5 0 010 3H9"/><line x1="14" y1="12" x2="14" y2="15"/>
      <path d="M17 12h-1.5a1 1 0 000 2H17"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )
}
