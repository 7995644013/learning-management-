import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug, getAllLessons } from '../data/courses'
import ProgressBar from '../components/ProgressBar'
import { getQuizForCourse } from '../data/quizzes'
import { getPracticeForCourse } from '../data/practice'
import './CourseDetail.css'

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

export default function CourseDetail() {
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

  const completedIds = getStoredProgress(course.id)
  const allLessons = getAllLessons(course)
  const completedCount = allLessons.filter((l) => completedIds.includes(l.id)).length
  const quiz = getQuizForCourse(course.id)
  const practice = getPracticeForCourse(course.id)

  return (
    <div className="course-detail-page">
      <div className="container">
        <div className="course-detail-header">
          <div className="course-detail-hero">
            <img src={course.thumbnail} alt="" className="course-detail-thumb" />
            <div className="course-detail-info">
              <span className="course-category">{course.category}</span>
              <h1>{course.title}</h1>
              <p className="course-detail-desc">{course.description}</p>
              <div className="course-detail-meta">
                <span>{course.lessonsCount} lessons</span>
                <span>{course.duration}</span>
                <span>{course.level}</span>
                {course.totalXp && <span style={{color: '#f59e0b', fontWeight: 'bold'}}>🪙 {course.totalXp}</span>}
              </div>
              <ProgressBar
                completed={completedCount}
                total={allLessons.length}
                label="Your progress"
              />
            </div>
          </div>
        </div>

        <div className="course-detail-content">
          <div className="course-detail-top-row">
            <h2>Course content</h2>
            <div className="course-ctas">
              {quiz && (
                <Link to={`/courses/${course.slug}/quiz`} className="btn btn-secondary small">
                  Take quiz
                </Link>
              )}
              {practice && (
                <Link to={`/courses/${course.slug}/practice`} className="btn btn-secondary small">
                  Practice tasks
                </Link>
              )}
            </div>
          </div>
          {course.modules.map((mod) => (
            <div key={mod.id} className="module-block">
              <h3 className="module-title">{mod.title}</h3>
              <ul className="lesson-list">
                {mod.lessons.map((lesson) => {
                  const isCompleted = completedIds.includes(lesson.id)
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={`/courses/${course.slug}/lesson/${lesson.id}`}
                        className={`lesson-row ${isCompleted ? 'completed' : ''}`}
                      >
                        <span className="lesson-icon">
                          {isCompleted ? '✓' : '▶'}
                        </span>
                        <span className="lesson-name">{lesson.title}</span>
                        <span className="lesson-duration">
                          {lesson.duration}
                          {lesson.xp && <span style={{marginLeft: '12px', color: '#f59e0b', fontSize: '0.9em', fontWeight: '600'}}>🪙 {lesson.xp}</span>}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
