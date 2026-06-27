import './Security.css'

const items = [
  {
    icon: <LockIcon />,
    title: 'RLS no banco de dados',
    desc: 'Row Level Security no Supabase — cada usuário acessa apenas os dados a que tem permissão, no nível do banco.',
  },
  {
    icon: <KeyIcon />,
    title: 'Dados sensíveis isolados',
    desc: 'Informações críticas processadas exclusivamente em funções serverless, sem exposição ao cliente.',
  },
  {
    icon: <FileShieldIcon />,
    title: 'Conformidade com a LGPD',
    desc: 'Política de privacidade integrada, consentimento documentado e boas práticas de proteção de dados pessoais de saúde.',
  },
  {
    icon: <EyeIcon />,
    title: 'Logs de auditoria completos',
    desc: 'Registro de cada acesso, edição e liberação. Rastreabilidade total para fins de conformidade e investigação.',
  },
]

export default function Security() {
  return (
    <section className="security section" id="seguranca">
      <div className="container">
        <div className="security__inner">
          <div className="security__text">
            <span className="section-label">Segurança & LGPD</span>
            <h2 className="section-title">Seus dados de saúde protegidos<br />do jeito certo</h2>
            <p className="section-subtitle">
              Dados médicos exigem cuidado extra. O Nexxio Clinic foi construído com segurança
              em cada camada — do banco à interface.
            </p>
          </div>

          <div className="security__items">
            {items.map((item, i) => (
              <div className="security-item" key={i}>
                <div className="security-item__icon">{item.icon}</div>
                <div>
                  <h3 className="security-item__title">{item.title}</h3>
                  <p className="security-item__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  )
}

function FileShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M10 12l1.5 1.5L15 10"/>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}
