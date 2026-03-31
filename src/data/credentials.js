// Demo login credentials (front-end only; replace with real auth/API later)

export const DEMO_USERS = [
  {
    email: 'admin@codeguru.com',
    password: 'admin123',
    name: 'Admin',
    role: 'admin',
  },
  {
    email: 'student@codeguru.com',
    password: 'student123',
    name: 'Student',
    role: 'student',
  },
  {
    email: 'user@codeguru.com',
    password: 'user123',
    name: 'Demo User',
    role: 'student',
  },
]

export function validateCredentials(email, password) {
  const normalizedEmail = (email || '').trim().toLowerCase()
  const user = DEMO_USERS.find(
    (u) => u.email.toLowerCase() === normalizedEmail && u.password === password
  )
  return user ? { name: user.name, email: user.email, role: user.role } : null
}
