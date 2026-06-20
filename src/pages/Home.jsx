import '../App.css'
import LeadStory from '../components/LeadStory'
import RailStory from '../components/RailStory'
import stories from '../data/stories'

function Home() {
  const [lead, ...rest] = stories

  return (
    <>
      <header className="site-header enter">
        <p className="eyebrow">Shoes for the Homeless</p>
        <h1>Youth Ambassadors Newsletter</h1>
        <p className="site-header-tagline">
          Stories from youth-led shoe drives in communities everywhere.
        </p>
      </header>

      <div className="home-columns enter">
        <section className="lead-column">
          <LeadStory story={lead} />
        </section>
        <aside className="rail-column">
          {rest.map((story) => (
            <RailStory key={story.id} story={story} />
          ))}
        </aside>
      </div>
    </>
  )
}

export default Home
