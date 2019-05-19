import React, { Component } from 'react'
import { history } from '../../store'

class SearchHero extends Component {
	constructor(props) {
		super(props)

		this.state = {
			formValue: '',
		}
	}

	handleValueChange = (e) =>
		this.setState({formValue: e.target.value})

	handleSubmit = (e) => {
		e.preventDefault()
		history.push({
			pathname: `/${this.state.formValue}`
		})

		this.setState({formValue: ''})
	}

	render() {
		const {
						state,
						handleValueChange,
						handleSubmit,
					} = this,
					{
						formValue,
					} = state
		return (
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={formValue}
					onChange={handleValueChange}
				/>
				<button type="submit">Search</button>
			</form>
		)
	}
}

export default SearchHero
