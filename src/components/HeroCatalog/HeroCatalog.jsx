import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import marvelConfig from '../../services/marvelConfigs'
import Pagination from '../Pagination/Container/PaginationContainer'
import PaginationList from '../Pagination/view/List'
import PaginationListItem from '../Pagination/view/Item'
import HeroCard from './HeroCardConnected'

import styles from './HeroCatalogStyle'

class HeroCatalog extends Component {
	constructor(props) {
		super(props)
		// Will mount
		const {page, match:{params:{ name }}} = this.props
		props.requestCatalog(page, name)
	}

	componentDidUpdate(prevProps) {
		const {changeCatalogPage, requestCatalog, page, match: {params:{ name }}} = this.props

		if(prevProps.page !== page)
			requestCatalog(page, name)
		if(prevProps.match.params.name !== name) {
			changeCatalogPage(1)
			requestCatalog(1, name)
		}
	}

	render() {
		const {
						props,
					} = this,
					{
						heroesList,
						heroesTotal,
						page,
						isRequesting,
						error,
						changeCatalogPage,
						location,
						classes,
						match:{params:{ name: findName }},
					} = props

		if(isRequesting)
			return <CircularProgress />

		if(error)
			return <Chip color="secondary" label={error} />

		if(!heroesList.length)
			return <Chip color="secondary" label="Nenhum resultado encontrado" />

		return (
			<main>
				{findName &&
					<Paper className={classes.paper}>
						<Breadcrumbs aria-label="Breadcrumb">
							<Link color="inherit" to="/" className={classes.link}>
								Heróis
							</Link>
							<Typography color="textPrimary">
								Busca: {findName}
							</Typography>
						</Breadcrumbs>
					</Paper>
				}
				<section>
					<Grid container spacing={16}>
						{heroesList.map((hero, index) =>
							<Grid item xs sm={6} md={4} lg={3} key={index}>
								<HeroCard
									id={hero.id}
									name={hero.name}
									thumbnail={hero.thumbnail}
								/>
							</Grid>
						)}
					</Grid>
				</section>
				{heroesTotal > marvelConfig.itemsPerPage &&
					<footer className={classes.footer}>
						<Pagination
							curPage={page}
							itemsMax={heroesTotal}
							itemsPerPage={marvelConfig.itemsPerPage}
							href={location.pathname}
							changePage={changeCatalogPage}
							Item={PaginationListItem}
							List={PaginationList}
							PrevContent={ArrowBackIos}
							NextContent={ArrowForwardIos}
							paginationLength={6}
						/>
					</footer>
				}
			</main>
		)
	}
}

HeroCatalog.propTypes = {
	page: PropTypes.number,
	match: PropTypes.object.isRequired,
	requestCatalog: PropTypes.func.isRequired,
	changeCatalogPage: PropTypes.func.isRequired,
	heroesList: PropTypes.array,
	heroesTotal: PropTypes.number,
	isRequesting: PropTypes.bool,
	error: PropTypes.string,
	location: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroCatalog)
