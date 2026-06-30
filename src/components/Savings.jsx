import './Savings.css'

const COST_ITEMS = [
  { label: 'Papel timbrado (2–3 vias)',       value: 'R$ 0,80' },
  { label: 'Foto 10×15 colorida para capa',   value: 'R$ 1,50' },
  { label: 'Capa / envelope plástico',         value: 'R$ 0,90' },
  { label: 'Impressão colorida (2 páginas)',   value: 'R$ 2,80' },
  { label: 'Tempo de digitação manual',        value: '17+ min' },
]

const STATS = [
  { num: 'R$ 800',    label: 'por mês em insumos',      sub: '100 exames × R$ 8'         },
  { num: '28 horas',  label: 'de trabalho manual/mês',  sub: '17 min × 100 exames'        },
  { num: 'R$ 9.600',  label: 'economizados por ano',    sub: 'direto no caixa da clínica' },
]

const GAINS = [
  { icon: '📱', text: 'Médico acessa e libera laudos do celular — em casa, no consultório, em qualquer lugar' },
  { icon: '📸', text: 'Técnico captura as fotos durante o exame e elas já aparecem no laudo certo, sem pendrive' },
  { icon: '📄', text: 'PDF profissional em 1 clique — com logo da clínica, assinatura e fotos integradas' },
  { icon: '🔒', text: 'Paciente acessa o resultado pelo celular — sem imprimir, sem CD, sem acionar a recepção' },
]

export default function Savings() {
  return (
    <section className="savings section" id="economia">
      <div className="container">

        <div className="savings__header">
          <span className="section-label">Por que trocar</span>
          <h2 className="section-title">
            Sua clínica gasta até R$ 8 por laudo<br className="savings__br" /> sem perceber
          </h2>
          <p className="section-subtitle">
            Papel, foto, capa, impressão — cada laudo físico carrega um custo
            que sai do caixa todo dia, paciente por paciente.
          </p>
        </div>

        {/* Stat row */}
        <div className="savings__stats">
          {STATS.map((s, i) => (
            <div key={i} className="savings__stat">
              <div className="savings__stat-num">{s.num}</div>
              <div className="savings__stat-label">{s.label}</div>
              <div className="savings__stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="savings__layout">

          {/* Cost breakdown */}
          <div className="savings__cost-card">
            <p className="savings__cost-title">Custo médio por laudo físico hoje</p>
            <ul className="savings__cost-list">
              {COST_ITEMS.map((item, i) => (
                <li key={i} className="savings__cost-item">
                  <span>{item.label}</span>
                  <span className="savings__cost-val">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="savings__cost-footer">
              <span>Total por paciente</span>
              <span>R$ 5–8 + 17 min</span>
            </div>
          </div>

          {/* What changes */}
          <div className="savings__gains">
            <p className="savings__gains-title">O que muda com o Nexxio</p>
            {GAINS.map((g, i) => (
              <div key={i} className="savings__gain">
                <span className="savings__gain-icon">{g.icon}</span>
                <span className="savings__gain-text">{g.text}</span>
              </div>
            ))}

            <div className="savings__unique">
              <span className="savings__unique-badge">Diferencial exclusivo</span>
              <p>
                Nenhum concorrente na mesma faixa de preço integra a câmera ao laudo em tempo real.
                O técnico captura a imagem durante o exame — ela cai no laudo certo, esperando o médico.
                Sem transferir arquivo. Sem e-mail. Sem pendrive.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
