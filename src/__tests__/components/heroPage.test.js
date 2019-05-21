import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import renderWithRouter from '../renderWith'
import HeroPage from '../../components/HeroPage/HeroPage'

afterEach(cleanup)
describe('HeroPage is rendering', () => {
  it('Can render alone', () => {
    const { getAllByText, getByText } = renderWithRouter(
			<HeroPage
				id={1}
				heroId="1"
				alreadyFetched={true}
				loading={false}
				error=""
				name="hero name"
				description="Description of hero"
				series={{items:[{name:"Name of the serie"}]}}
				thumbnail={{path:'/', extension:''}}
				requestHero={function(){}}
			/>,
			{
				route: 'http://localhost:3000/character/edit/1011334',
			}
		)
    getByText('Editar')
    getAllByText('hero name')
    getByText('Description of hero')
    getByText('Name of the serie')
		fireEvent.click(getByText("Editar"), { button: 0 })
	})
})
