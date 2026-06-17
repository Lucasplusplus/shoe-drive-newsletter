import  stories  from '../data/stories'
import { useParams, Link } from 'react-router-dom'

function StoryPage() {
     const { id } = useParams()
  const story = stories.find((s) => s.id === parseInt(id))//parseint does the same thing as a number sign would
     return (
    <div>
      <Link to="/">Back to Home</Link>
         <h1>{story.title}</h1>{/* dynamic, not hardcoded text, so it can change based on the story */}
          <p>
        {story.location}
        </p>
         <p>
        {story.excerpt}
        </p>
    </div>
  )
 
}
export default StoryPage