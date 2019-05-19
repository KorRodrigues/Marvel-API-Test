import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import marvelConfig from '../../services/marvelConfigs'
import Pagination from '../Pagination/Container/PaginationContainer'
import PaginationList from '../Pagination/view/List'
import PaginationListItem from '../Pagination/view/Item'
import HeroCard from './HeroCardConnected'

const styles = theme => ({
	footer: {
		marginTop: 32,
	}
})

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
					} = props

		if(isRequesting)
			return <div>Loading...</div> // TODO create loading component

		if(error)
			return <div>{error}</div> // TODO create error component

		if(!heroesList)
			return <div>Not found</div> // TODO not fount

		return (
			<main>
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

// Todo add proptypes

export default withStyles(styles)(HeroCatalog)
