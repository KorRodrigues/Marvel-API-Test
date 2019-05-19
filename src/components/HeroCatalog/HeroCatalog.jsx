import React, { Component } from 'react'

import marvelConfig from '../../services/marvelConfigs'

import HeroCard from './HeroCardConnected'
import Pagination from '../Pagination/Container/PaginationContainer'
import PaginationList from '../Pagination/view/List'
import PaginationListItem from '../Pagination/view/Item'

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
					{heroesList.map((hero, index) =>
						<HeroCard
							key={index}
							id={hero.id}
							name={hero.name}
							thumbnail={hero.thumbnail}
						/>
					)}
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

export default HeroCatalog
