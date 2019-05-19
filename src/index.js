import React from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store'

import SimplePage from './components/Template/SimplePage'
import HeroCatalog from './components/HeroCatalog/HeroCatalogConnected'
import HeroPage from './components/HeroPage/HeroPageConnected'

import './index.css'

const element = document.querySelector('#root')

if (element)
	render(
		<Provider store={store}>
			<ConnectedRouter history={history}>

				<SimplePage>

					<Switch>
						<Route exact path="/character/edit/:heroId" component={HeroPage} />
						<Route exact path="/character/:heroId" component={HeroPage} />
						<Route exact path="/" component={HeroCatalog} />
						<Route component={() => "PAGE 404"} /> {/* TODO 404 */}
					</Switch>

				</SimplePage>

			</ConnectedRouter>
		</Provider>,
		element
	)
