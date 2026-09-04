import Icon from '../Icon/Icon.jsx'
import './Header.css'

export default function Header({ counts, isCreating, onToggleCreate }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="/" aria-label="ConsultingTask's, página inicial">
          <span className="header__logo" aria-hidden="true">
            <Icon name="check" size={16} />
          </span>
          <span className="header__name">ConsultingTask's</span>
        </a>

        <ul className="header__stats" aria-label="Resumo das tarefas">
          <li className="header__stat">
            <strong>{counts.all}</strong> {counts.all === 1 ? 'tarefa' : 'tarefas'}
          </li>
          <li className="header__stat">
            <strong>{counts.pending}</strong> {counts.pending === 1 ? 'pendente' : 'pendentes'}
          </li>
          <li className="header__stat header__stat--done">
            <strong>{counts.completed}</strong> {counts.completed === 1 ? 'concluída' : 'concluídas'}
          </li>
        </ul>

        <button
          type="button"
          className="header__new"
          onClick={onToggleCreate} // callback recebido do App: abre/fecha o formulário de nova tarefa
          aria-expanded={isCreating}
        >
          <Icon name={isCreating ? 'close' : 'plus'} size={18} />
          <span>{isCreating ? 'Fechar' : 'Nova tarefa'}</span>
        </button>
      </div>
    </header>
  )
}
