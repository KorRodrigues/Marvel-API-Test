import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import renderWithRouter from '../renderWith'
import HeroCatalog from '../../components/HeroCatalog/HeroCatalog'

const mock = {
	page: 1,
	searchName: '',
	requestCatalog: ()=>{},
	changeCatalogPage: ()=>{},
	heroesList: [],
	heroesTotal: 0,
	isRequesting: false,
	error: '',
	location: { pathname: '/' },
}

afterEach(cleanup)
describe('HeroCatalog is rendering', () => {
  it('Can render alone', () => {
    renderWithRouter(
			<HeroCatalog
				{...mock}
			/>,
			{
				route: 'http://localhost:3000/character/edit/1011334',
			}
		)
	})
})
