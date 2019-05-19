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
		props.requestCatalog(props.page)
	}

	componentDidUpdate(prevProps) {
		const {page} = this.props

		if(prevProps.page !== page)
			this.props.requestCatalog(page)
	}

	render() {
		const {
						props,
					} = this,
					{
						heroesList,
						heroesTotal,
						page,
						attributionHTML,
						isRequesting,
						error,
						changeCatalogPage,
					} = props

		if(isRequesting)
			return <div>Loading...</div> // TODO create loading component

		if(error)
			return <div>{error}</div> // TODO create error component

		if(!heroesList)
			return '' // TODO

		return (
			<main>
				<header></header>
				<section>
					{heroesList.map((hero, index) =>
						<HeroCard
							key={index}
							id={hero.id}
							name={hero.name}
							image={hero.thumbnail}
						/>
					)}
				</section>
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
					<div dangerouslySetInnerHTML={{__html: attributionHTML}} />
				</footer>
			</main>
		)
	}
}

// Todo add proptypes

export default HeroCatalog
