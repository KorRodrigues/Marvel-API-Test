import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import renderWithRouter from '../renderWith'
import HeroEdit from '../../components/HeroEdit/HeroEdit'

afterEach(cleanup)
describe('HeroEdit is rendering', () => {
  it('Can render alone', () => {
    const { getByText } = renderWithRouter(
			<HeroEdit
				id={1}
				heroId="1"
				alreadyFetched={true}
				loading={false}
				error=""
				name="hero name"
				description="Description of hero"
				thumbnail={{path:'', extension:''}}
				requestHero={function(){}}
				changeHeroDetail={function(){}}
			/>,
			{
				route: 'http://localhost:3000/character/edit/1011334',
			}
		)
    getByText('Salvar')
    getByText('hero name')
		fireEvent.click(getByText("Salvar"), { button: 0 })
	})
})
