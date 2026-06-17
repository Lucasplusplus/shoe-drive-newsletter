import '../App.css'
import StoryCard from '../components/StoryCard'
import stories from '../data/stories'

function Home() {
  return (
    <>
      <header className="site-header">
        <h1>Shoes for The Homeless Youth Ambassadors Program Newsletter</h1>{/* hardcoded title text */}
        <p>Stories from youth-led shoe drives in communities everywhere.</p>
      </header>
      <main className="story-grid">{/* HTML element that will contain the story cards, and the class name is for styling purposes */}
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </main>
    </>
  )
}

export default Home