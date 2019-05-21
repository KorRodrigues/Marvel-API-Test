import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import renderWithRouter from '../renderWith'
import HeroCard from '../../components/HeroCatalog/HeroCard'

afterEach(cleanup)
describe('HeroCard is rendering', () => {
  it('Can render alone', () => {
    const { getByText } = renderWithRouter(
			<HeroCard
				id={1}
				name="Hero name"
				thumbnail="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
			/>,
			{
				route: '/',
			}
		)
    getByText('Hero name')
		fireEvent.click(getByText("Ver"), { button: 0 })
		fireEvent.click(getByText("Editar"), { button: 0 })
	})
})
