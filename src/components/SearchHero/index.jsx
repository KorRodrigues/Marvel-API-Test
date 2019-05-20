import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

import { history } from '../../store'
import styles from './styles'

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
						props,
						state,
						handleValueChange,
						handleSubmit,
					} = this,
					{
						formValue,
					} = state,
					{
						classes,
					} = props
		return (
			<form onSubmit={handleSubmit}>
				<TextField
					type="text"
					value={formValue}
					onChange={handleValueChange}

					label="Buscar herói"
					fullWidth
					InputLabelProps={{
						classes: {
							root: classes.cssLabel,
							focused: classes.cssFocused,
						}
					}}
          InputProps={{
						classes: {
							underline: classes.cssUnderline,
							input: classes.input,
						},
            endAdornment: (
							<InputAdornment position="end">
								<IconButton
									className={classes.button}
									aria-label="Enviar"
									type="submit"
									disableRipple
								>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						),
          }}
				/>

			</form>
		)
	}
}

export default withStyles(styles)(SearchHero)
