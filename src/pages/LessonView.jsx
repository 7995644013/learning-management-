import { Link, useParams, useNavigate } from 'react-router-dom'
import { getLessonFromCourse, getAllLessons } from '../data/courses'
import { getSnippetForLesson } from '../data/snippets'
import YouTubeEmbed from '../components/YouTubeEmbed'
import ProgressBar from '../components/ProgressBar'
import CheatSheet from '../components/CheatSheet'
import './LessonView.css'

const PROGRESS_KEY = 'lms-progress'

function getStoredProgress(courseId) {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    const data = raw ? JSON.parse(raw) : {}
    return data[courseId] || []
  } catch {
    return []
  }
}

function setStoredProgress(courseId, lessonIds) {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    const data = raw ? JSON.parse(raw) : {}
    data[courseId] = lessonIds
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data))
  } catch {}
}

export default function LessonView() {
  const { courseSlug, lessonId } = useParams()
  const navigate = useNavigate()
  const result = getLessonFromCourse(courseSlug, lessonId)

  if (!result) {
    return (
      <div className="container">
        <p>Lesson not found.</p>
        <Link to="/courses">Back to courses</Link>
      </div>
    )
  }

  const { course, module, lesson } = result
  const allLessons = getAllLessons(course)
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 && currentIndex >= 0 ? allLessons[currentIndex + 1] : null

  const completedIds = getStoredProgress(course.id)
  const completedCount = allLessons.filter((l) => completedIds.includes(l.id)).length

  const markComplete = () => {
    if (completedIds.includes(lesson.id)) return
    const next = [...completedIds, lesson.id]
    setStoredProgress(course.id, next)
    if (nextLesson) {
      navigate(`/courses/${course.slug}/lesson/${nextLesson.id}`)
    } else {
      navigate(`/courses/${course.slug}`)
    }
  }

  const isCompleted = completedIds.includes(lesson.id)
  const snippet = getSnippetForLesson(lesson.id)

  return (
    <div className="lesson-view-page">
      <div className="container">
        <nav className="lesson-breadcrumb">
          <Link to="/courses">Courses</Link>
          <span className="sep">/</span>
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
          <span className="sep">/</span>
          <span>{lesson.title}</span>
        </nav>

        <div className="lesson-layout">
          <div className="lesson-main">
            <h1 className="lesson-title">{lesson.title}</h1>
            <p className="lesson-module">{module.title}</p>
            <YouTubeEmbed videoId={lesson.videoId} title={lesson.title} />
            {snippet && (
              <section className="lesson-snippet">
                <h2>Example code</h2>
                <pre>
                  <code>{snippet.code}</code>
                </pre>
              </section>
            )}
            <CheatSheet moduleId={module.id} />
            <div className="lesson-actions">
              <button
                type="button"
                className={`btn ${isCompleted ? 'btn-completed' : 'btn-primary'}`}
                onClick={markComplete}
              >
                {isCompleted ? '✓ Completed' : 'Mark as complete'}
              </button>
              <div className="lesson-nav-buttons">
                {prevLesson && (
                  <Link
                    to={`/courses/${course.slug}/lesson/${prevLesson.id}`}
                    className="btn btn-secondary"
                  >
                    ← Previous
                  </Link>
                )}
                {nextLesson ? (
                  <Link
                    to={`/courses/${course.slug}/lesson/${nextLesson.id}`}
                    className="btn btn-primary"
                  >
                    Next →
                  </Link>
                ) : (
                  <Link to={`/courses/${course.slug}`} className="btn btn-primary">
                    Finish course
                  </Link>
                )}
              </div>
            </div>
          </div>

          <aside className="lesson-sidebar">
            <ProgressBar
              completed={completedCount}
              total={allLessons.length}
              label="Progress"
            />
            <h3>Lessons</h3>
            <ul className="sidebar-lesson-list">
              {allLessons.map((l) => (
                <li key={l.id}>
                  <Link
                    to={`/courses/${course.slug}/lesson/${l.id}`}
                    className={l.id === lessonId ? 'active' : completedIds.includes(l.id) ? 'done' : ''}
                  >
                    {completedIds.includes(l.id) && '✓ '}
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
