import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import './CourseList.css'

export default function BonusCourses() {
  const bonusCourses = courses.filter((c) => c.category === 'Bonus')

  return (
    <div className="course-list-page">
      <div className="container">
        <header className="page-header" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)'}}>
          <h1 style={{color: '#fff'}}>Bonus Courses</h1>
          <p style={{color: 'var(--text-muted)'}}>Exclusive extra classes for Speaking, Writing, Aptitude, and QR.</p>
        </header>

        <section className="category-section">
          <div className="course-grid">
            {bonusCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.slug}`}
                className="course-card"
                style={{background: 'var(--surface)', border: '1px solid var(--border)'}}
              >
                <div className="course-card-image">
                  <img src={course.thumbnail} alt="" />
                  <span className="course-badge">{course.level}</span>
                </div>
                <div className="course-card-body">
                  <h3 className="course-card-title" style={{color: 'var(--text)'}}>{course.title}</h3>
                  <p className="course-card-desc">{course.description}</p>
                  <div className="course-meta">
                    <span>{course.lessonsCount} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
