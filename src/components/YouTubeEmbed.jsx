import './YouTubeEmbed.css'

export default function YouTubeEmbed({ videoId, title = 'Lesson video' }) {
  if (!videoId) return <div className="youtube-placeholder">No video for this lesson.</div>

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`

  return (
    <div className="youtube-embed">
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
