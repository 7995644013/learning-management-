import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, db, googleProvider } from '../lib/firebase'
import './Login.css'

import { doc, getDoc, setDoc } from 'firebase/firestore'

export default function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSocialLogin = async () => {
    setError('')
    setIsLoading(true)
    try {
      // Perform the real Firebase popup sign in flow with Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Save basic details in profile if not exists
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
         const nameParts = user.displayName ? user.displayName.split(' ') : [];
         await setDoc(docRef, {
            firstName: nameParts[0] || '',
            lastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : '',
            studentEmail: user.email || '',
            photoBase64: user.photoURL || '', 
            createdAt: new Date().toISOString()
         }, { merge: true });
      }

      // Navigate to the home page on success
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-api-key' || err.message.includes('API key')) {
         setError('FIREBASE ERROR: MISSING API KEY. PLEASE UPDATE src/lib/firebase.js WITH YOUR KEYS!');
      } else {
         setError(`AUTH FAILED: ${err.message}`);
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <h1>LEARNPLUS</h1>
          <p className="brand-tagline">MASTER YOUR CRAFT.</p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-container">
          <h2 className="login-title">SIGN IN</h2>
          <p className="login-subtitle">
            ACCESS YOUR PLATFORM DASHBOARD
          </p>
          
          <div className="oauth-only-container" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button 
              className="btn-primary" 
              onClick={handleSocialLogin} 
              type="button"
              disabled={isLoading}
              style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              {isLoading ? 'CONNECTING...' : 'CONTINUE WITH GOOGLE'}
            </button>
            <p style={{ color: '#666', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', letterSpacing: '1px' }}>
              WE EXCLUSIVELY USE GOOGLE FOR SECURE AUTHENTICATION.
            </p>
          </div>

          {error && (
            <div style={{ color: '#ff4444', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', marginTop: '2rem', lineHeight: '1.4', textAlign: 'center' }}>
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
