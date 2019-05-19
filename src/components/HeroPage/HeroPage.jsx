import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeroPage extends Component {
	constructor(props) {
		super(props)

		// WillMount
		if(!props.alreadyFetched && props.heroId) {
			props.requestHero(props.heroId)
		}
	}

	render() {
		const {
						alreadyFetched,
						loading,
						error,
					} = this.props

		if(!alreadyFetched || loading)
			return <div>Loading...</div> //TODO tela de loading

		if(error)
			return <div>{error}</div> //TODO tela de erro

		const {
						id,
						name,
						description,
						// thumbnail,
						// series,
						// urls,
					} = this.props

		return (
			<main>
				<Link to={`/character/edit/${id}`}>Editar</Link>
				<div>{name}</div>
				<div>{description}</div>
			</main>
		)
	}
}

//TODO add proptypes

export default HeroPage
