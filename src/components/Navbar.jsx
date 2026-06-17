import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About the Program</NavLink></li> {/* this is directly for the about page link text, not the url path itself */}
      </ul>
    </nav>
  )
}

export default Navbar