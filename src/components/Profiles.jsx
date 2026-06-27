import './Profiles.css'

const profiles = [
  {
    role: 'Administrador',
    color: '#3b82f6',
    icon: <AdminIcon />,
    perms: [
      'Acesso total ao sistema',
      'Gerenciamento de usuários e perfis',
      'Visualização de logs de auditoria',
      'Configurações da clínica',
    ],
  },
  {
    role: 'Médico',
    color: '#10b981',
    icon: <DoctorIcon />,
    perms: [
      'Revisão e assinatura de laudos',
      'Liberação do laudo para o paciente',
      'Acesso ao histórico clínico',
      'Visualização de todos os atendimentos',
    ],
  },
  {
    role: 'Laudista',
    color: '#8b5cf6',
    icon: <LaudistIcon />,
    perms: [
      'Preenchimento de laudos técnicos',
      'Captura de fotos e vídeos ao vivo',
      'Registro de anamnese e exame',
      'Atualização de status do laudo',
    ],
  },
  {
    role: 'Recepcionista',
    color: '#f59e0b',
    icon: <ReceptionIcon />,
    perms: [
      'Cadastro e gestão de pacientes',
      'Abertura de atendimentos',
      'Visualização de agenda',
      'Acompanhamento de status',
    ],
  },
]

export default function Profiles() {
  return (
    <section className="profiles section" id="perfis">
      <div className="container">
        <div className="profiles__header">
          <span className="section-label">Perfis de acesso</span>
          <h2 className="section-title">Cada colaborador com<br />a permissão certa</h2>
          <p className="section-subtitle">
            Controle granular por perfil — nenhum usuário acessa mais do que precisa.
          </p>
        </div>

        <div className="profiles__grid">
          {profiles.map((p, i) => (
            <div className="profile-card" key={i}>
              <div className="profile-card__header">
                <div className="profile-card__icon" style={{ background: p.color + '1a', color: p.color, borderColor: p.color + '30' }}>
                  {p.icon}
                </div>
                <span className="profile-card__role" style={{ color: p.color }}>{p.role}</span>
              </div>
              <ul className="profile-card__perms">
                {p.perms.map((perm, j) => (
                  <li key={j}>
                    <CheckIcon color={p.color} />
                    {perm}
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

function CheckIcon({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function AdminIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  )
}

function DoctorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

function LaudistIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  )
}

function ReceptionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  )
}
