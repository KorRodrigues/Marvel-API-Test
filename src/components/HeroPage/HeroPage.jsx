import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'

import styles from './HeroPageStyle'

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
			return <CircularProgress />

		if(error)
			return <Chip color="secondary" label={error} />

		const {
						id,
						name,
						description,
						thumbnail,
						series: {items: series_arr},
						classes,
					} = this.props,
					image = `${thumbnail.path}${thumbnail.extension ? `.${thumbnail.extension}` : ''}`

		return (
			<main>
				<Card>
     			<CardContent>
						<Grid container spacing={16}justify="center">
							<Grid item xs={12} md={6} lg={5}>
								<CardMedia
									component="img"
									alt={name}
									image={image}
									title={name}
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={5}>
								<Typography variant="h4" component="h1" gutterBottom>
									<Link to={`/character/edit/${id}`} className={classes.editLink}>
										<Button
											variant="contained"
											color="primary"
										>
											Editar
											<EditIcon className={classes.editIcon} />
										</Button>
									</Link>
									{name}
        				</Typography>
								<Typography variant="body1" component="h1" gutterBottom>
									{description}
        				</Typography>
								{series_arr && !!series_arr.length &&
									<React.Fragment>
										<Typography variant="h6" component="h2" gutterBottom>
											Series:
										</Typography>
										<List dense>
											{series_arr.map((serie,index) =>
												<ListItem key={index}>
													<ListItemText
														primary={serie.name}
													/>
												</ListItem>
											)}
										</List>
									</React.Fragment>
								}
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</main>
		)
	}
}

//TODO add proptypes

export default withStyles(styles)(HeroPage)
