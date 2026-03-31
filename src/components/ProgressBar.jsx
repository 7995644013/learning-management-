import './ProgressBar.css'

export default function ProgressBar({ completed, total, label = 'Course progress' }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="progress-bar-wrap" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      <span className="progress-bar-text">
        {label}: {completed}/{total} ({percent}%)
      </span>
    </div>
  )
}
