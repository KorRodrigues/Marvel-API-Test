import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({id, name, image}) => (
	<Link to={`/character/${id}`}>
		<img src={image} width="50" alt={name} />
		{name}
	</Link>
)

//TODO add proptypes

export default HeroCard
