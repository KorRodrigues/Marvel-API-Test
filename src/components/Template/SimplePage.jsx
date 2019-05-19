import React from 'react'
import { Link } from 'react-router-dom'

import SearchHero from '../SearchHero'

const SimplePage = ({children}) => (
  <div>
    <header>
      <Link to="/">Catalogo</Link>
			<SearchHero />
    </header>

		{children}

		<footer>
			<div>APP created by Tiago A. Rodrigues</div>
			<div><a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a></div>
		</footer>
  </div>
)

export default SimplePage
