import './StoryCard.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function StoryCard({ story }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Link to={`/stories/${story.id}`} className="story-card-link">
    <article className="story-card">
      <div className="story-card-image" aria-hidden="true">
        <span className="story-card-emoji">{story.emoji}</span>
      </div>
      <div className="story-card-body">
        <h3>{story.title}</h3>
        <p className="story-card-location">{story.location}</p>
        {isExpanded && <p className="story-card-excerpt">{story.excerpt}</p>}
        <button onClick={() => setIsExpanded(!isExpanded)}>
  {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </article>
    </Link>
  )
}

export default StoryCard
