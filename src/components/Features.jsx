import './Features.css'

const features = [
  {
    icon: <FileTextIcon />,
    title: 'Laudos médicos digitais',
    desc: 'Fluxo completo com múltiplos status — da anamnese à liberação. Cada etapa rastreada e registrada.',
  },
  {
    icon: <CameraIcon />,
    title: 'Laudo com vídeo endoscópico',
    desc: 'Captura de imagens e gravação de vídeo do exame integrada diretamente ao laudo — sem arquivos soltos.',
  },
  {
    icon: <UserCheckIcon />,
    title: 'Portal do paciente',
    desc: 'Acesso seguro pelo CPF e data de nascimento — sem necessidade de senha ou cadastro extra.',
  },
  {
    icon: <PdfIcon />,
    title: 'Geração de PDF',
    desc: 'Laudos prontos para impressão ou envio digital, com layout profissional gerado na hora.',
  },
  {
    icon: <UsersIcon />,
    title: 'Controle de usuários',
    desc: 'Perfis por função com permissões distintas: admin, médico, laudista e recepcionista.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Logs de auditoria',
    desc: 'Rastreabilidade completa de todas as ações no sistema — quem acessou, editou e liberou cada laudo.',
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
            Desenvolvido para o fluxo real de especialidades endoscópicas —
            do agendamento ao laudo com vídeo arquivado.
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
