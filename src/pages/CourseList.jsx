import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { courses } from '../data/courses'
import './CourseList.css'

export default function CourseList() {
  const [searchQuery, setSearchQuery] = useState('')
  const categories = [...new Set(courses.map((c) => c.category))]

  const filteredCourses = courses.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="course-list-page">
      <div className="container">
        <header className="page-header">
          <h1>All courses</h1>
          <p>Structured learning with YouTube. Pick a course and start watching.</p>
        </header>

        <div className="search-container">
          <div className="search-input-wrapper">
             <Search className="search-icon" size={20} />
             <input 
               type="text" 
               placeholder="Search courses..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="search-input"
             />
          </div>
        </div>

        {categories.map((cat) => {
          const catCourses = filteredCourses.filter(c => c.category === cat)
          if (catCourses.length === 0) return null;
          
          return (
            <section key={cat} className="category-section">
              <h2 className="category-title">{cat}</h2>
              <div className="course-grid">
                {catCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.slug}`}
                    className="course-card"
                  >
                    <div className="course-card-image">
                      <img src={course.thumbnail} alt="" />
                      <span className="course-badge">{course.level}</span>
                    </div>
                    <div className="course-card-body">
                      <h3 className="course-card-title">{course.title}</h3>
                      <p className="course-card-desc">{course.description}</p>
                      <div className="course-meta">
                        <span>{course.lessonsCount} lessons</span>
                        <span>{course.duration}</span>
                        {course.totalXp && <span style={{color: '#f59e0b', fontWeight: 'bold'}}>🪙 {course.totalXp}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No courses found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
