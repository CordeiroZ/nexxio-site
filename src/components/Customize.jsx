import './Customize.css'

const items = [
  'Logo e identidade visual da clínica no cabeçalho',
  'Campos e checkboxes por tipo de procedimento',
  'Estrutura e ordem das seções do laudo',
  'Cabeçalho com CRM, endereço e dados do médico',
  'Formato de impressão — margens, tamanho, rodapé',
  'Assinatura digital do responsável pelo laudo',
]

export default function Customize() {
  return (
    <section className="customize section">
      <div className="container">
        <div className="customize__inner">

          <div className="customize__left">
            <span className="section-label">Personalização inclusa</span>
            <h2 className="customize__title">
              O laudo sai com a<br />
              <span className="customize__title--accent">identidade da sua clínica.</span>
            </h2>
            <p className="customize__desc">
              Nenhuma clínica usa o mesmo modelo. Por isso, antes do primeiro exame
              configuramos o laudo do jeito que você quer — layout, campos, cabeçalho
              e formato de impressão. <strong>Sem custo adicional. Sem você precisar mexer em nada.</strong>
            </p>
            <div className="customize__badge">
              <CheckIcon />
              Incluso em todos os planos — feito pela equipe Nexxio
            </div>
          </div>

          <div className="customize__right">
            <div className="customize__card">
              <div className="customize__card-label">O que configuramos para você</div>
              <ul className="customize__list">
                {items.map((item, i) => (
                  <li key={i} className="customize__item">
                    <span className="customize__item-check">
                      <CheckCircleIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
