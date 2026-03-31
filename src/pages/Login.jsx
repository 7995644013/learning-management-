import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/courses')
  }

  return (
    <div className="login-page">
      <div className="login-content-wrapper">
        <div className="login-container">
          <h1 className="login-logo">LearnPlus</h1>
          <p className="login-subtitle">Welcome back to the premium learning experience</p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            
            <Link to="#" className="forgot-password">Forgot password?</Link>
            
            <button type="submit" className="btn-primary">Sign In</button>
          </form>
          
          <div className="divider">
            <span>or continue with</span>
          </div>
          
          <div className="social-login">
            <button className="btn-social">
              <span>🌐</span> Google
            </button>
            <button className="btn-social">
              <span>🐱</span> GitHub
            </button>
          </div>
          
          <div className="signup-link">
            Don't have an account? <Link to="#">Sign up now</Link>
          </div>
        </div>

        <div className="login-3d-illustration">
          <img src="/3d_education_icon.png" alt="3D Education Illustration" />
        </div>
      </div>
    </div>
  )
}
