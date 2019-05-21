import React from 'react'
import { createMemoryHistory } from 'history'
import { render } from 'react-testing-library'
import { Router } from 'react-router-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {history} from '../store'
import rootReducer from '../redux'

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

describe('render with router works', () => {
  it('render with router', () => {
    renderWithRouter(<div />,	{ route: '/', })
  })
})

export default renderWithRouter
