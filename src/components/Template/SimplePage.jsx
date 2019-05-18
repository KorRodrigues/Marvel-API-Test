import React from 'react'
import { Link } from 'react-router-dom'

const SimplePage = ({children}) => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

		{children}

		<footer>
			Footer
		</footer>
  </div>
)

export default SimplePage
