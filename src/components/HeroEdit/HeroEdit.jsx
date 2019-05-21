import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'
import Typography from '@material-ui/core/Typography'

import styles from './HeroEditStyles'
import { history } from '../../store'

class HeroEdit extends Component {
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
		const { changeHeroDetail, heroId } = this.props

		changeHeroDetail(heroId, this.state)

		history.push({
			pathname: `/character/${heroId}`
		})
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
		if(prevProps.heroId !== this.props.heroId || (!prevProps.name && this.props.name)) {
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
						id,
						alreadyFetched,
						loading,
						error,
						name: defaultName,
						classes,
					} = props

		if(!alreadyFetched || loading)
			return <CircularProgress />

		if(error)
			return <Chip color="secondary" label={error} />

		const {
						name,
						description,
						thumbnail,
						// series,
					} = state,
					thumbnailUrl = `${thumbnail.path}${
						thumbnail.extension ? `.${thumbnail.extension}`: ''}`

		return (
			<main>
				<Paper className={classes.paper}>
					<Breadcrumbs aria-label="Breadcrumb">
						<Link color="inherit" to="/" className={classes.link}>
							Heróis
						</Link>
						<Link color="inherit" to={`/character/${id}`} className={classes.link}>
							{defaultName}
						</Link>
						<Typography color="textPrimary">Editar</Typography>
					</Breadcrumbs>
				</Paper>
				<Card>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={16}>
								<Grid item xs={12} md={7}>
									<TextField
										type="text"
										name="name"
										value={name}
										onChange={handleChangeInputText}

										label="Nome"
            				fullWidth
									/>
								</Grid>
								<Grid item xs={12} md={7}>
									<TextField
										type="text"
										name="description"
										value={description}
										onChange={handleChangeInputText}
										rows={3}

										label="Descrição"
										fullWidth
										multiline
									/>
								</Grid>
							</Grid>
							<Grid container spacing={16}>
								<Grid item xs={9} md={6} lg={6}>
									<TextField
										type="text"
										name="thumbnail"
										value={thumbnailUrl}
										onChange={handleChangeThumbnail}

										label="Url da imagem"
            				fullWidth
									/>
								</Grid>
								<Grid item xs={3} md={1} lg={1}>
									<img
										src={thumbnailUrl}
										height="50"
										alt={name}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										variant="contained"
										color="primary"
										type="submit"
									>Salvar</Button>
								</Grid>
							</Grid>
						</form>
					</CardContent>
				</Card>
			</main>
		)
	}
}

HeroEdit.propTypes = {
	id: PropTypes.number,
	heroId: PropTypes.oneOfType([
    PropTypes.string,
		PropTypes.number,
	]).isRequired,
	alreadyFetched: PropTypes.bool,
	loading: PropTypes.bool,
	error: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	thumbnail: PropTypes.object,
	classes: PropTypes.object.isRequired,
	requestHero: PropTypes.func.isRequired,
	changeHeroDetail: PropTypes.func.isRequired,
}

export default withStyles(styles)(HeroEdit)
