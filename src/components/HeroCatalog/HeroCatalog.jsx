import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import marvelConfig from '../../services/marvelConfigs'
import Pagination from '../Pagination/Container/PaginationContainer'
import PaginationList from '../Pagination/view/List'
import PaginationListItem from '../Pagination/view/Item'
import HeroCard from './HeroCardConnected'

function styles() {}

class HeroCatalog extends Component {
	constructor(props) {
		super(props)
		// Will mount
		const {page, match:{params:{ name }}} = this.props
		props.requestCatalog(page, name)
	}

	componentDidUpdate(prevProps) {
		const {requestCatalog, page, match: {params:{ name }}} = this.props

		if(prevProps.page !== page || prevProps.match.params.name !== name)
			requestCatalog(page, name)
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
					<footer>
						<Pagination
							curPage={page}
							itemsMax={heroesTotal}
							itemsPerPage={marvelConfig.itemsPerPage}
							href={''}
							changePage={changeCatalogPage}
							Item={PaginationListItem}
							List={PaginationList}
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
