import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug } from '../data/courses'
import { getQuizForCourse } from '../data/quizzes'
import './QuizPage.css'

export default function QuizPage() {
  const { courseSlug } = useParams()
  const course = getCourseBySlug(courseSlug)

  if (!course) {
    return (
      <div className="container">
        <p>Course not found.</p>
        <Link to="/courses">Back to courses</Link>
      </div>
    )
  }

  const quiz = getQuizForCourse(course.id)

  if (!quiz) {
    return (
      <div className="container">
        <p>No quiz has been added for this course yet.</p>
        <Link to={`/courses/${course.slug}`}>Back to course</Link>
      </div>
    )
  }

  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setShowResults(true)
  }

  const correctCount = quiz.questions.reduce((acc, q) => {
    const selected = answers[q.id]
    return selected === q.correctIndex ? acc + 1 : acc
  }, 0)

  return (
    <div className="quiz-page">
      <div className="container">
        <nav className="lesson-breadcrumb">
          <Link to="/courses">Courses</Link>
          <span className="sep">/</span>
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
          <span className="sep">/</span>
          <span>Quiz</span>
        </nav>

        <header className="page-header">
          <h1>{quiz.title}</h1>
          <p>Answer the questions to test your understanding.</p>
        </header>

        <form className="quiz-card" onSubmit={submit}>
          {quiz.questions.map((q, idx) => {
            const selected = answers[q.id]
            const isCorrect = showResults && selected === q.correctIndex
            const isWrong = showResults && selected != null && selected !== q.correctIndex
            return (
              <div key={q.id} className="quiz-question">
                <h2>
                  Q{idx + 1}. {q.text}
                </h2>
                <div className="quiz-options">
                  {q.options.map((opt, i) => (
                    <label
                      key={i}
                      className={`quiz-option ${
                        showResults && i === q.correctIndex
                          ? 'correct'
                          : showResults && i === selected
                          ? 'wrong'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={i}
                        checked={selected === i}
                        onChange={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [q.id]: i,
                          }))
                        }
                        disabled={showResults}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {showResults && (
                  <p className={`quiz-explanation ${isCorrect ? 'ok' : isWrong ? 'bad' : ''}`}>
                    {q.explanation}
                  </p>
                )}
              </div>
            )
          })}

          <div className="quiz-footer">
            {showResults && (
              <span className="score">
                Score: {correctCount} / {quiz.questions.length}
              </span>
            )}
            {!showResults ? (
              <button type="submit" className="btn btn-primary">
                Submit quiz
              </button>
            ) : (
              <Link to={`/courses/${course.slug}`} className="btn btn-secondary">
                Back to course
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

