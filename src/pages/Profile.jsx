import { useState, useEffect } from 'react'
import { auth, db } from '../lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { Upload, X, Camera, FileText, CheckCircle2, AlertTriangle } from 'lucide-react'
import './Profile.css'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [photoPreview, setPhotoPreview] = useState(null)
  const [resumeFile, setResumeFile] = useState({ name: '', data: '' })
  const [isDragging, setIsDragging] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    certificateName: '',
    gender: 'Male',
    commLanguage: 'English',
    teachLanguage: 'English',
    dob: '',
    twitter: '',
    linkedin: '',
    github: '',
    codechef: '',
    hackerrank: '',
    leetcode: '',
    studentPhone: '',
    studentEmail: '',
    studentWhatsappSame: 'Yes',
    parentFirstName: '',
    parentLastName: '',
    parentRelation: 'Father',
    parentOccupation: '',
    parentEmail: '',
    parentLanguage: 'English',
    parentPhone: '',
    parentWhatsappSame: 'Yes'
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setFormData(prev => ({ ...prev, studentEmail: currentUser.email || '' }))
        setLoading(false) // Unblock the UI immediately
        
        try {
          const docRef = doc(db, 'users', currentUser.uid)
          const docSnap = await getDoc(docRef)
          
          if (docSnap.exists()) {
            const data = docSnap.data()
            setFormData(prev => ({ ...prev, ...data }))
            if (data.photoBase64) setPhotoPreview(data.photoBase64)
            if (data.resumeName) setResumeFile({ name: data.resumeName, data: data.resumeBase64 })
          }
        } catch (error) {
          console.error("Error loading profile:", error)
        }
      } else {
        setUser(null)
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 1048576) {
        setMessage({ type: 'error', text: 'PHOTO MUST BE LESS THAN 1MB' })
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
        setFormData(prev => ({ ...prev, photoBase64: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setPhotoPreview(null)
    setFormData(prev => ({ ...prev, photoBase64: null }))
  }

  const processResumeFile = (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'RESUME MUST BE LESS THAN 10MB' })
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setResumeFile({ name: file.name, data: reader.result })
      setFormData(prev => ({ ...prev, resumeName: file.name, resumeBase64: reader.result }))
    }
    reader.readAsDataURL(file)
  }

  const handleResumeChange = (e) => {
    processResumeFile(e.target.files[0])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    processResumeFile(e.dataTransfer.files[0])
  }

  const handleRemoveResume = (e) => {
    e.preventDefault() // prevent triggering the label file dialog
    setResumeFile({ name: '', data: '' })
    setFormData(prev => ({ ...prev, resumeName: '', resumeBase64: '' }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    if (!user) {
      setMessage({ type: 'error', text: 'YOU MUST BE LOGGED IN TO SAVE PROFILE.' })
      return
    }

    setSaving(true)
    setMessage({ type: '', text: '' })
    try {
      await setDoc(doc(db, 'users', user.uid), formData, { merge: true })
      setMessage({ type: 'success', text: 'PROFILE UPDATED SUCCESSFULLY.' })
      setTimeout(() => setMessage({ type: '', text: '' }), 5000)
    } catch (error) {
      console.error("Firestore Error:", error)
      setMessage({ type: 'error', text: 'ERROR SAVING TO DATABASE. PLEASE CHECK YOUR ENABLED FIRESTORE PERMISSIONS.' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="profile-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}><h2>LOADING ASSETS...</h2></div>
  }

  if (!user) {
    return (
      <div className="profile-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column'}}>
        <h2>ACCESS DENIED</h2>
        <p style={{color: '#888', marginTop: '1rem'}}>PLEASE LOGIN TO ACCESS YOUR PROFILE.</p>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-title">STUDENT PROFILE</h1>
        <p className="profile-subtitle">SECURELY MANAGE YOUR PLATFORM DETAILS.</p>
      </div>

      <form className="profile-form" onSubmit={handleSave}>
        
        {/* SECTION 1: STUDENT PROFILE */}
        <section className="profile-section">
          <h2 className="section-title">PERSONAL DETAILS</h2>
          <p className="section-subtitle">Information provided will be used for official certificates.</p>

          <div className="photo-upload-container">
            <div className="photo-placeholder" style={{ overflow: 'hidden', borderRadius: '4px' }}>
              {photoPreview ? (
                <img src={photoPreview} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <Camera size={32} color="#444" />
              )}
            </div>
            <div className="upload-actions">
              <input type="file" id="photo-upload" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoChange} />
              <label htmlFor="photo-upload" className="btn-upload" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Upload size={16} /> UPLOAD PHOTO
              </label>
              <button type="button" className="btn-danger" onClick={handleRemovePhoto}>
                <X size={16} /> REMOVE PHOTO
              </button>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="e.g. Satoshi" />
            </div>
            <div className="form-group">
              <label>LAST NAME</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="e.g. Nakamoto" />
            </div>
            <div className="form-group full-width">
              <label>NAME ON YOUR CERTIFICATE</label>
              <input type="text" name="certificateName" value={formData.certificateName} onChange={handleChange} placeholder="How would you like your name to appear?" />
            </div>

            <div className="form-group full-width">
              <label>GENDER</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
                </label>
                <label className="radio-label">
                  <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
                </label>
                <label className="radio-label">
                  <input type="radio" name="gender" value="Transgender" checked={formData.gender === 'Transgender'} onChange={handleChange} /> Transgender
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>PREFERRED COMM. LANGUAGE</label>
              <select name="commLanguage" value={formData.commLanguage} onChange={handleChange}>
                <option value="English">ENGLISH</option>
                <option value="Telugu">TELUGU</option>
                <option value="Hindi">HINDI</option>
                <option value="Spanish">SPANISH</option>
              </select>
            </div>
            <div className="form-group">
              <label>PREFERRED TEACHING LANGUAGE</label>
              <select name="teachLanguage" value={formData.teachLanguage} onChange={handleChange}>
                <option value="English">ENGLISH</option>
                <option value="Telugu">TELUGU</option>
                <option value="Hindi">HINDI</option>
              </select>
            </div>

            <div className="form-group">
              <label>DATE OF BIRTH</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={{ colorScheme: 'dark' }} />
            </div>
            <div className="form-group">
              <label>LINKEDIN PROFILE</label>
              <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/" />
            </div>

            <div className="form-group">
              <label>TWITTER / X PROFILE</label>
              <input type="url" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="https://twitter.com/" />
            </div>
            <div className="form-group">
              <label>GITHUB PROFILE</label>
              <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder="https://github.com/" />
            </div>

            <div className="form-group">
              <label>CODECHEF PROFILE</label>
              <input type="url" name="codechef" value={formData.codechef} onChange={handleChange} placeholder="https://codechef.com/users/" />
            </div>
            <div className="form-group">
              <label>LEETCODE PROFILE</label>
              <input type="url" name="leetcode" value={formData.leetcode} onChange={handleChange} placeholder="https://leetcode.com/u/" />
            </div>

            <div className="form-group">
              <label>HACKERRANK PROFILE</label>
              <input type="url" name="hackerrank" value={formData.hackerrank} onChange={handleChange} placeholder="https://hackerrank.com/profile/" />
            </div>
            
            <div className="form-group full-width">
              <label>RESUME</label>
              <input type="file" id="resume-upload" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={handleResumeChange} />
              <label 
                htmlFor="resume-upload" 
                className="resume-upload" 
                style={{ 
                  display: 'block', 
                  margin: 0, 
                  border: isDragging ? '2px dashed #00ff88' : '1px dashed #333',
                  backgroundColor: isDragging ? 'rgba(0, 255, 136, 0.05)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {resumeFile.name ? (
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                      <FileText size={48} color="#00ff88" />
                      <p style={{fontWeight: 700, color: '#00ff88', letterSpacing: '1px'}}>{resumeFile.name}</p>
                      <button type="button" className="btn-danger" onClick={handleRemoveResume} style={{ marginTop: '0.5rem' }}>
                         <X size={16} /> REMOVE FILE
                      </button>
                   </div>
                ) : (
                   <div>
                      <FileText size={48} color="#444" style={{marginBottom: '1rem'}} />
                      <p style={{fontWeight: 600}}>UPLOAD RESUME OR DRAG AND DROP</p>
                      <p style={{fontSize: '0.8rem', color: '#666', marginTop: '0.5rem'}}>PDF, DOC, DOCX up to 10MB</p>
                   </div>
                )}
              </label>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTACT DETAILS */}
        <section className="profile-section">
          <h2 className="section-title">STUDENT CONTACT</h2>
          <p className="section-subtitle">We will use this to send important program updates.</p>
          <div className="form-grid">
            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input type="tel" name="studentPhone" value={formData.studentPhone} onChange={handleChange} placeholder="+1 123 456 7890" />
            </div>
            <div className="form-group">
              <label>SAME AS WHATSAPP?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="studentWhatsappSame" value="Yes" checked={formData.studentWhatsappSame === 'Yes'} onChange={handleChange} /> Yes
                </label>
                <label className="radio-label">
                  <input type="radio" name="studentWhatsappSame" value="No" checked={formData.studentWhatsappSame === 'No'} onChange={handleChange} /> No
                </label>
              </div>
            </div>
            <div className="form-group full-width">
              <label>EMAIL ID (FROM AUTH)</label>
              <input type="email" name="studentEmail" value={formData.studentEmail} readOnly style={{ opacity: 0.5 }} />
            </div>
          </div>
        </section>

        {/* SECTION 3: PARENT DETAILS */}
        <section className="profile-section">
          <h2 className="section-title">PARENT/GUARDIAN</h2>
          <p className="section-subtitle">Person who supports the student during their journey.</p>
          <div className="form-grid">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input type="text" name="parentFirstName" value={formData.parentFirstName} onChange={handleChange} placeholder="Name" />
            </div>
            <div className="form-group">
              <label>LAST NAME</label>
              <input type="text" name="parentLastName" value={formData.parentLastName} onChange={handleChange} placeholder="Surname" />
            </div>
            <div className="form-group">
              <label>RELATIONSHIP</label>
              <select name="parentRelation" value={formData.parentRelation} onChange={handleChange}>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Guardian">Guardian</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>OCCUPATION</label>
              <input type="text" name="parentOccupation" value={formData.parentOccupation} onChange={handleChange} placeholder="e.g. Software Engineer" />
            </div>
            <div className="form-group">
              <label>EMAIL ID</label>
              <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} placeholder="Email" />
            </div>
            <div className="form-group">
              <label>PREFERRED COMM. LANGUAGE</label>
              <select name="parentLanguage" value={formData.parentLanguage} onChange={handleChange}>
                <option value="English">ENGLISH</option>
                <option value="Telugu">TELUGU</option>
                <option value="Hindi">HINDI</option>
              </select>
            </div>
            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} placeholder="+1 123 456 7890" />
            </div>
            <div className="form-group">
              <label>SAME AS WHATSAPP?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="parentWhatsappSame" value="Yes" checked={formData.parentWhatsappSame === 'Yes'} onChange={handleChange} /> Yes
                </label>
                <label className="radio-label">
                  <input type="radio" name="parentWhatsappSame" value="No" checked={formData.parentWhatsappSame === 'No'} onChange={handleChange} /> No
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Global form message display */}
        {message.text && (
          <div style={{
            background: message.type === 'error' ? 'rgba(255, 68, 68, 0.1)' : 'rgba(0, 255, 136, 0.1)',
            border: `1px solid ${message.type === 'error' ? '#ff4444' : '#00ff88'}`,
            color: message.type === 'error' ? '#ff4444' : '#00ff88',
            padding: '1rem',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            letterSpacing: '1px'
          }}>
            {message.type === 'error' ? <AlertTriangle size={20} /> : <CheckCircle2 size={20} />}
            {message.text}
          </div>
        )}

        <div className="profile-actions">
          <button type="submit" className="btn-save" disabled={saving}>
            {saving ? 'SAVING DATA...' : 'SAVE CHANGES'}
          </button>
        </div>

      </form>
    </div>
  )
}
