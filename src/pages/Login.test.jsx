import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test, vi, beforeEach } from 'vitest'
import Login from './Login'
import * as firebaseAuth from 'firebase/auth'
import * as firestore from 'firebase/firestore'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom')
  return {
    ...mod,
    useNavigate: () => mockNavigate
  }
})

vi.mock('firebase/auth', () => ({
  signInWithPopup: vi.fn(),
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn()
}))

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  getFirestore: vi.fn()
}))

vi.mock('../lib/firebase', () => ({
  auth: {},
  db: {},
  googleProvider: {}
}))

beforeEach(() => {
  vi.clearAllMocks()
})

test('renders Login page UI correctly', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  expect(screen.getByText(/LEARNPLUS/i)).toBeInTheDocument()
  expect(screen.getByText(/CONTINUE WITH GOOGLE/i)).toBeInTheDocument()
})

test('handles successful login and profile initialization', async () => {
  firebaseAuth.signInWithPopup.mockResolvedValue({
    user: { uid: '123', email: 'test@example.com', displayName: 'John Doe', photoURL: 'http://photo' }
  })
  firestore.getDoc.mockResolvedValue({ exists: () => false })
  
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  
  const loginButton = screen.getByText(/CONTINUE WITH GOOGLE/i)
  fireEvent.click(loginButton)
  
  expect(screen.getByText(/CONNECTING.../i)).toBeInTheDocument()
  
  await waitFor(() => {
    expect(firestore.setDoc).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})

test('handles login error', async () => {
  firebaseAuth.signInWithPopup.mockRejectedValue(new Error('Network Error'))
  
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  
  const loginButton = screen.getByText(/CONTINUE WITH GOOGLE/i)
  fireEvent.click(loginButton)
  
  await waitFor(() => {
    expect(screen.getByText(/AUTH FAILED: Network Error/i)).toBeInTheDocument()
  })
  expect(mockNavigate).not.toHaveBeenCalled()
})
