import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import ListContainer from './containers/ListContainer'

render(
  <Provider store={store}>
    <ListContainer />
  </Provider>,
  document.getElementById('root')
)