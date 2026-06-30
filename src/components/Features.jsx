import './Features.css'

const features = [
  {
    icon: <FileTextIcon />,
    title: 'Template estruturado por procedimento',
    desc: 'O médico marca checkboxes e escolhe opções — sem digitar texto livre. Laudo completo em 3 minutos, com padrão clínico garantido.',
  },
  {
    icon: <CameraIcon />,
    title: 'Câmera integrada — diferencial único',
    desc: 'O técnico captura as fotos do exame direto no sistema. Elas aparecem automaticamente no laudo certo, esperando o médico — sem pendrive, sem transferência.',
  },
  {
    icon: <UserCheckIcon />,
    title: 'Paciente acessa pelo celular',
    desc: 'Resultado disponível online pelo CPF + data de nascimento. Sem imprimir, sem gravar CD, sem o paciente ligar para a recepção.',
  },
  {
    icon: <PdfIcon />,
    title: 'PDF profissional com 1 clique',
    desc: 'Logo da clínica, assinatura do médico, fotos do exame — tudo formatado automaticamente. O que antes levava 20 minutos agora leva 3.',
  },
  {
    icon: <UsersIcon />,
    title: 'Médico acessa de qualquer lugar',
    desc: 'Funciona no celular, tablet ou notebook. Sem instalar software, sem VPN, sem precisar estar na clínica para revisar e liberar laudos.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Rastreabilidade completa',
    desc: 'Cada ação registrada: quem abriu, editou e liberou cada laudo, com data e hora. Auditoria completa para fins legais e clínicos.',
  },
]

export default function Features() {
  return (
    <section className="features section" id="funcionalidades">
      <div className="container">
        <div className="features__header">
          <span className="section-label">Funcionalidades</span>
          <h2 className="section-title">Tudo que sua clínica precisa,<br />em uma só plataforma</h2>
          <p className="section-subtitle">
            Cada funcionalidade resolve um problema real do dia a dia clínico —
            nenhuma tela desnecessária, nenhum passo a mais.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FileTextIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  )
}

function UserCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <polyline points="17 11 19 13 23 9"/>
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 15v-4h2a1.5 1.5 0 010 3H9"/>
      <path d="M14 11v4"/>
      <path d="M14 11h1.5a1.5 1.5 0 010 3H14"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
