import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import styles from './HeroCardStyle'

const HeroCard = ({id, name, thumbnail, classes}) => {
	const viewUrl = `/character/${id}`,
				editUrl = `/character/edit/${id}`,
				thumbUrl = `${thumbnail.path}${thumbnail.extension ? `.${thumbnail.extension}` : ''}`

	return (
		<Card>
			<CardActionArea>
				<Link to={viewUrl} className={classes.cardLink}>
					<CardMedia
						className={classes.cardMedia}
						image={thumbUrl}
						title={name}
					/>
					<CardContent>
						<Typography
							className={classes.cardTitle}
							gutterBottom
							variant="title"
							component="h2"
							color="default"
						>
							{name}
						</Typography>
					</CardContent>
				</Link>
			</CardActionArea>
      <CardActions>
				<Link to={viewUrl} className={classes.cardLink}>
					<Button size="small" color="primary">
						Ver
					</Button>
				</Link>
				<Link to={editUrl} className={classes.cardLink}>
					<Button size="small" color="primary">
						Editar
					</Button>
				</Link>
      </CardActions>
		</Card>
	)
}

HeroCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string,
	thumbnail: PropTypes.object,
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroCard)
