import './Savings.css'

const ITEMS_CUSTO = [
  { label: 'Papel timbrado (2–3 vias)', value: 'R$ 0,80' },
  { label: 'Foto 10×15 colorida (capa)', value: 'R$ 1,50' },
  { label: 'Capa/envelope plástico', value: 'R$ 0,90' },
  { label: 'Impressão colorida (2 páginas)', value: 'R$ 2,80' },
  { label: 'Tempo de digitação manual', value: '17+ min' },
]

export default function Savings() {
  return (
    <section className="savings section" id="economia">
      <div className="container">

        <div className="savings__header">
          <span className="section-label">Por que trocar</span>
          <h2 className="section-title">
            Sua clínica paga até <span className="savings__highlight">R$ 8 por laudo</span><br className="savings__br" /> sem perceber
          </h2>
          <p className="section-subtitle">
            Papel, foto, capa, impressão — cada laudo físico carrega um custo silencioso
            que sai direto do seu bolso, todo dia, paciente por paciente.
          </p>
        </div>

        <div className="savings__layout">

          {/* Coluna esquerda — breakdown de custo */}
          <div className="savings__cost-card">
            <div className="savings__cost-header">
              <span className="savings__cost-badge">Custo por laudo físico hoje</span>
            </div>
            <ul className="savings__cost-list">
              {ITEMS_CUSTO.map((item, i) => (
                <li key={i} className="savings__cost-item">
                  <span className="savings__cost-name">{item.label}</span>
                  <span className="savings__cost-val">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="savings__cost-total">
              <span>Total por paciente</span>
              <span className="savings__cost-total-val">R$ 5–8 + 17 min</span>
            </div>
          </div>

          {/* Coluna direita — cards de impacto */}
          <div className="savings__impact">

            <div className="savings__math-box">
              <div className="savings__math-row">
                <div className="savings__math-num">R$ 800</div>
                <div className="savings__math-desc">
                  por mês em insumos<br />
                  <span>com apenas 100 exames/mês × R$ 8</span>
                </div>
              </div>
              <div className="savings__math-divider" />
              <div className="savings__math-row">
                <div className="savings__math-num savings__math-num--amber">28h</div>
                <div className="savings__math-desc">
                  de trabalho manual por mês<br />
                  <span>17 min × 100 exames — só em digitação</span>
                </div>
              </div>
              <div className="savings__math-divider" />
              <div className="savings__math-row">
                <div className="savings__math-num savings__math-num--green">R$ 9.600</div>
                <div className="savings__math-desc">
                  economizados por ano<br />
                  <span>voltando direto para o caixa da clínica</span>
                </div>
              </div>
            </div>

            <div className="savings__bullets">
              <p className="savings__bullets-title">O que muda com o Nexxio</p>
              {[
                { icon: '📱', text: 'Médico acessa e libera laudos do celular — em casa, no consultório particular, de qualquer lugar' },
                { icon: '📸', text: 'Técnico captura as fotos durante o exame e elas já aparecem no laudo certo, sem pendrive' },
                { icon: '📄', text: 'PDF gerado com 1 clique — com logo, assinatura e fotos, no formato clínico correto' },
                { icon: '🔒', text: 'Paciente acessa o resultado pelo celular — sem imprimir, sem CD, sem acionar a recepção' },
                { icon: '☁️', text: 'Backup na nuvem — nunca mais perder laudo por HD queimado ou computador travado' },
              ].map((b, i) => (
                <div key={i} className="savings__bullet">
                  <span className="savings__bullet-icon">{b.icon}</span>
                  <span className="savings__bullet-text">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner de diferencial */}
        <div className="savings__differentiator">
          <span className="savings__diff-star">★</span>
          <p>
            <strong>Nenhum concorrente na mesma faixa de preço</strong> integra câmera ao laudo em tempo real.
            O técnico captura a imagem durante o exame — ela já cai no laudo certo, esperando o médico.
            Sem transferir arquivo. Sem e-mail. Sem pendrive entre setores.
          </p>
        </div>

      </div>
    </section>
  )
}
