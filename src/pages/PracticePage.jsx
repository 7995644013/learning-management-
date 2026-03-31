import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug } from '../data/courses'
import { getPracticeForCourse } from '../data/practice'
import './PracticePage.css'

export default function PracticePage() {
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

  const practice = getPracticeForCourse(course.id)

  if (!practice) {
    return (
      <div className="container">
        <p>No practice set has been added for this course yet.</p>
        <Link to={`/courses/${course.slug}`}>Back to course</Link>
      </div>
    )
  }

  return (
    <div className="practice-page">
      <div className="container">
        <nav className="lesson-breadcrumb">
          <Link to="/courses">Courses</Link>
          <span className="sep">/</span>
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
          <span className="sep">/</span>
          <span>Practice</span>
        </nav>

        <header className="page-header">
          <h1>{practice.title}</h1>
          <p>Use these tasks to get hands-on practice. Try solving them in the playground or your editor.</p>
        </header>

        <ol className="practice-list">
          {practice.tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ol>

        <div className="practice-footer">
          <Link to="/playground" className="btn btn-primary">
            Open playground
          </Link>
        </div>
      </div>
    </div>
  )
}

