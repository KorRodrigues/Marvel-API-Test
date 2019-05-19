import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({id, name, thumbnail}) => (
	<Link to={`/character/${id}`}>
		<img src={`${thumbnail.path}.${thumbnail.extension}`} width="50" alt={name} />
		{name}
	</Link>
)

//TODO add proptypes

export default HeroCard
