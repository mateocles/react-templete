import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import './assets/sass/main.scss'
import { App } from './scenes/App'
import * as serviceWorker from './serviceWorker'
import initStore from './store/Store'
import { BrowserRouter } from 'react-router-dom'
export const history = createBrowserHistory()
export const store = initStore(history)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
