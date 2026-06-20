import './StoryPage.css'
import stories from '../data/stories'
import { useParams, Link } from 'react-router-dom'

function StoryPage() {
  const { id } = useParams()
  const story = stories.find((s) => s.id === parseInt(id))

  if (!story) {
    return (
      <main className="issue enter">
        <p>Story not found.</p>
        <Link to="/" className="issue-back">
          ← Back to all stories
        </Link>
      </main>
    )
  }

  return (
    <main className="issue enter">
      <p className="issue-eyebrow">Shoe Drive Newsletter</p>
      <span className="issue-marker" aria-hidden="true"></span>

      <h1 className="issue-title">{story.title}</h1>

      <p className="issue-meta">
        {story.location} <span aria-hidden="true">·</span> {story.date}
      </p>

      <hr className="issue-rule" />

      <div className="issue-body">
        {story.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Link to="/" className="issue-back">
        ← Back to all stories
      </Link>
    </main>
  )
}

export default StoryPage
