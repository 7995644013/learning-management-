import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'
import { courses } from '../data/courses'
import './Home.css'

const STATS = [
  { value: '150+', label: 'Million downloads' },
  { value: '4.7+', label: 'Star app rating' },
  { value: '1700+', label: 'Cities worldwide' },
  { value: '71 mins', label: 'Avg. time spent daily' },
]

const ADVANTAGES = [
  {
    title: 'Conceptual clarity through visualisation',
    desc: 'Learn with video lessons and interactive content that make concepts stick.',
  },
  {
    title: 'Personalised learning programs',
    desc: 'Structured courses for every level – from basics to competitive exams.',
  },
  {
    title: 'Unmatched individual attention',
    desc: 'Practice with quizzes, doubt chat and code playground built for you.',
  },
]

const TESTIMONIALS = [
  { quote: 'The best app for my daughter to strengthen her basics. She loves the video lessons.', author: 'Parent', location: 'Bangalore' },
  { quote: 'My son understands concepts better with the structured courses and practice.', author: 'Parent', location: 'Kolkata' },
  { quote: 'Helped me balance my studies and stay confident. Highly recommend.', author: 'Student', location: 'Mumbai' },
]

export default function Home() {
  const featured = courses.slice(0, 6)
  
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const today = new Date().toDateString()
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    
    const lastVisit = localStorage.getItem('learnplus_last_visit')
    let currentStreak = parseInt(localStorage.getItem('learnplus_streak') || '0', 10)

    if (lastVisit === today) {
      // Already visited today
      setStreak(currentStreak)
    } else if (lastVisit === yesterday) {
      // Kept the streak alive
      currentStreak += 1
      setStreak(currentStreak)
      localStorage.setItem('learnplus_streak', currentStreak.toString())
      localStorage.setItem('learnplus_last_visit', today)
    } else {
      // Missed a day or first time
      currentStreak = 1
      setStreak(currentStreak)
      localStorage.setItem('learnplus_streak', currentStreak.toString())
      localStorage.setItem('learnplus_last_visit', today)
    }
  }, [])

  return (
    <div className="home byjus-style">
      {/* Hero - Book your free session style */}
      <section className="hero-byjus" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative' }}>
          
          {/* Daily Streak Widget */}
          {streak > 0 && (
            <div className="streak-widget" style={{
              position: 'absolute',
              top: '-1rem',
              right: '1rem',
              background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
              color: '#d10020',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(255, 154, 158, 0.4)',
              transform: 'translateY(-50%)',
              animation: 'bounce 2s infinite'
            }}>
              <Flame size={20} fill="#d10020" />
              <span>{streak} Day Streak!</span>
            </div>
          )}

          <h1 className="hero-byjus-title">Book your Free Session</h1>
          <p className="hero-byjus-subtitle">Learn from India's best teachers</p>
          <p className="hero-byjus-tagline">
            Comprehensive learning programs & classes for all students. Become a lifelong learner with engaging video lessons and personalised learning journeys.
          </p>
          <Link to="/courses" className="btn btn-primary hero-cta">
            Explore free courses
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get the advantage */}
      <section className="section section-advantage">
        <div className="container">
          <h2 className="section-title">Get the LearnPlus advantage</h2>
          <div className="advantage-grid">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="advantage-card">
                <h3 className="advantage-title">{a.title}</h3>
                <p className="advantage-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-testimonials">
        <div className="container">
          <h2 className="section-title">Our students and parents love us</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.quote.slice(0, 20)} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <p className="testimonial-author">– {t.author}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore our learning programs */}
      <section className="section section-programs">
        <div className="container">
          <h2 className="section-title">Explore our learning programs</h2>
          <div className="course-grid">
            {featured.map((course) => (
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
                  <span className="course-category">{course.category}</span>
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-desc">{course.description}</p>
                  <div className="course-meta">
                    <span>{course.lessonsCount} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/courses" className="btn btn-secondary">
              View all courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
