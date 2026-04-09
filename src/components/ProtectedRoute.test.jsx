import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import ProtectedRoute from './ProtectedRoute'
import * as firebaseAuth from 'firebase/auth'

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn(),
  getAuth: vi.fn(),
}))

vi.mock('../lib/firebase', () => ({
  auth: {},
}))

test('shows loading indicator initially', () => {
  firebaseAuth.onAuthStateChanged.mockImplementation(() => () => {})
  
  render(
    <MemoryRouter>
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    </MemoryRouter>
  )
  
  expect(screen.getByText(/LOADING/i)).toBeInTheDocument()
})

test('redirects to login if user is not authenticated', () => {
  firebaseAuth.onAuthStateChanged.mockImplementation((auth, callback) => {
    callback(null)
    return () => {}
  })
  
  render(
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/protected" element={
          <ProtectedRoute>
             <div>Protected Content</div>
          </ProtectedRoute>
        } />
      </Routes>
    </MemoryRouter>
  )
  
  expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
  expect(screen.queryByText(/Protected Content/i)).not.toBeInTheDocument()
})

test('renders children if user is authenticated', () => {
  firebaseAuth.onAuthStateChanged.mockImplementation((auth, callback) => {
    callback({ uid: '123', email: 'test@example.com' })
    return () => {}
  })
  
  render(
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/protected" element={
          <ProtectedRoute>
             <div>Protected Content</div>
          </ProtectedRoute>
        } />
      </Routes>
    </MemoryRouter>
  )
  
  expect(screen.getByText(/Protected Content/i)).toBeInTheDocument()
  expect(screen.queryByText(/Login Page/i)).not.toBeInTheDocument()
})
