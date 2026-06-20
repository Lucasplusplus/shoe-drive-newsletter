import './StoryCard.css'
import { Link } from 'react-router-dom'

function StoryCard({ story }) {
  return (
    <Link to={`/stories/${story.id}`} className="story-card-link">
      <article className="story-card">
        {story.image && (
          <img
            src={story.image}
            alt={story.imageAlt || ''}
            className="story-card-image"
          />
        )}
        <div className="story-card-body">
          <p className="eyebrow">{story.location}</p>
          <h3 className="story-card-title">{story.title}</h3>
          <p className="story-card-excerpt">{story.excerpt}</p>
          <span className="read-more-link">Read more →</span>
        </div>
      </article>
    </Link>
  )
}

export default StoryCard
