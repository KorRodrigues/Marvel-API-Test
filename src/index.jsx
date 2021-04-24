import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store, { history } from './store';

import SimplePage from './components/Template/SimplePage';
import HeroCatalog from './components/HeroCatalog/HeroCatalogConnected';
import HeroPage from './components/HeroPage/HeroPageConnected';
import HeroEdit from './components/HeroEdit/HeroEditConnected';

import getCustomTheme from './theme';

const element = document.querySelector('#root');

if (element) {
	render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
    		<MuiThemeProvider theme={getCustomTheme()}>
     			<CssBaseline />

					<SimplePage>

						<Switch>
							<Route exact path="/character/edit/:heroId" component={HeroEdit} />
							<Route exact path="/character/:heroId" component={HeroPage} />
							<Route exact path="/:name" component={HeroCatalog} />
							<Route exact path="/" component={HeroCatalog} />
							<Route component={() => "PAGE 404"} /> {/* TODO 404 */}
						</Switch>

					</SimplePage>
				</MuiThemeProvider>
			</ConnectedRouter>
		</Provider>,
		element
	)
}
