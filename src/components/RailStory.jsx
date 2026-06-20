import './RailStory.css'
import { Link } from 'react-router-dom'

function RailStory({ story }) {
  return (
    <Link to={`/stories/${story.id}`} className="rail-story-link">
      <article className="rail-story">
        {story.image && (
          <img
            src={story.image}
            alt={story.imageAlt || ''}
            className="rail-story-image"
          />
        )}
        <p className="eyebrow">{story.location}</p>
        <h3 className="rail-story-title">{story.title}</h3>
        <p className="rail-story-excerpt">{story.excerpt}</p>
        <span className="read-more-link">Read more →</span>
      </article>
    </Link>
  )
}

export default RailStory
