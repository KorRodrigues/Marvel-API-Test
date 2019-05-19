import React, { Component } from 'react'

class HeroPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			description: '',
			thumbnail: {
				extension: '',
				path: '',
			}
		}
		// WillMount
		if(!props.alreadyFetched && props.heroId) {
			props.requestHero(props.heroId)
		} else if(props.alreadyFetched && !props.loading) {
			this.state = {
				name: props.name,
				description: props.description,
				thumbnail: props.thumbnail,
			}
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const changeHeroDetail = this.props.changeHeroDetail

		changeHeroDetail(this.props.heroId, this.state)
	}

	handleChangeInputText = (e) =>
		this.setState({[e.target.name]: e.target.value})

	handleChangeThumbnail = (e) => {
		const value = e.target.value,
					value_s = value.split('.'),
					extension = value_s.length > 1 ? value_s.pop() : '',
					path = value_s.join('.')
		this.setState({
			thumbnail: {
				extension,
				path,
			}
		})
	}

	componentDidUpdate(prevProps) {
		if(prevProps.heroId !== this.props.heroId || !prevProps.name) {
			const data = this.props
			this.setState({
				name: data.name,
				description: data.description,
				thumbnail: data.thumbnail,
			})
		}
	}

	render() {
		const {
						props,
						state,
						handleChangeInputText,
						handleChangeThumbnail,
						handleSubmit,
					} = this,
					{
						alreadyFetched,
						loading,
						error,
					} = props

		if(!alreadyFetched || loading)
			return <div>Loading...</div> //TODO tela de loading

		if(error)
			return <div>{error}</div> //TODO tela de erro

		const {
						// id,
						name,
						description,
						thumbnail,
						// series,
						// urls,
					} = state,
					thumbnailUrl = `${thumbnail.path}${
						thumbnail.extension ? `.${thumbnail.extension}`: ''}`

		return (
			<main>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleChangeInputText}
					/>
					<input
						type="text"
						name="description"
						value={description}
						onChange={handleChangeInputText}
					/>
					<input
						type="text"
						name="description"
						value={thumbnailUrl}
						onChange={handleChangeThumbnail}
					/>
					<img
						src={thumbnailUrl}
						width="50"
						alt={name}
					/>
					<button type="submit">Editar</button>
				</form>
			</main>
		)
	}
}

//TODO add proptypes

export default HeroPage
