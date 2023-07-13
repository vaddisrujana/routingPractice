import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="background">
    <div className="background1">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p>Wave</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
