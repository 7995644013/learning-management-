import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import CourseList from './pages/CourseList'
import BonusCourses from './pages/BonusCourses'
import CourseDetail from './pages/CourseDetail'
import LessonView from './pages/LessonView'
import Playground from './pages/Playground'
import DoubtChat from './pages/DoubtChat'
import QuizPage from './pages/QuizPage'
import PracticePage from './pages/PracticePage'
import Login from './pages/Login'
import Snippets from './pages/Snippets'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <ProtectedRoute>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/bonus" element={<BonusCourses />} />
              <Route path="/courses/:courseSlug" element={<CourseDetail />} />
              <Route path="/courses/:courseSlug/lesson/:lessonId" element={<LessonView />} />
              <Route path="/courses/:courseSlug/quiz" element={<QuizPage />} />
              <Route path="/courses/:courseSlug/practice" element={<PracticePage />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/assistant" element={<DoubtChat />} />
              <Route path="/snippets" element={<Snippets />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </ProtectedRoute>
      } />
    </Routes>
  )
}
