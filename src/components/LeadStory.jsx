import './LeadStory.css'
import { Link } from 'react-router-dom'

function LeadStory({ story }) {
  return (
    <article className="lead-story enter">
      {story.image && (
        <img
          src={story.image}
          alt={story.imageAlt || ''}
          className="lead-story-image"
        />
      )}
      <p className="eyebrow">{story.location}</p>
      <h2 className="lead-story-title">
        <Link to={`/stories/${story.id}`}>{story.title}</Link>
      </h2>
      <div className="lead-story-body">
        {story.body.slice(0, 2).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Link to={`/stories/${story.id}`} className="continue-reading-link">
        Continue reading →
      </Link>
    </article>
  )
}

export default LeadStory
