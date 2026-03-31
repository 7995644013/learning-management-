import { Link } from 'react-router-dom';
import { questions } from '../data/questions';
import './QuestionBank.css';

export default function QuestionBank() {
  return (
    <div className="question-bank-page">
      <div className="container">
        <header className="page-header">
          <h1>Question Bank</h1>
          <p>Practice coding questions to improve your skills and earn XP.</p>
        </header>

        <div className="qb-list">
          {questions.map(q => (
            <Link to={`/questions/${q.id}`} className="qb-item" key={q.id}>
              <div className="qb-title">{q.title}</div>
              <div className={`qb-diff ${q.difficulty?.toLowerCase()}`}>{q.difficulty || '-'}</div>
              <div className="qb-status">
                {q.status === 'SOLVED' ? (
                  <span className="status-solved">● SOLVED</span>
                ) : (
                  <span className="status-unsolved">○ UNSOLVED</span>
                )}
              </div>
              <div className="qb-xp">🪙 {q.xp}</div>
              <div className="qb-action">➔</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
