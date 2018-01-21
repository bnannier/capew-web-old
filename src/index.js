import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import registerServiceWorker from './components/utilities/registerServiceWorker'
import App from './components/App'
import rootReducer from './Reducers'
import { Container } from './components/ui'
import { Header } from './components/Header'

/**
 * @description Create a history of your choosing (we're using a browser history in this case)
 */
const history = createHistory()

/**
 * @description Build the middleware for intercepting and dispatching navigation actions
 */
const routerMiddlewareHistory = routerMiddleware(history)

/**
 * @description Apply all midllewares in to an array
 */
const middleware = [routerMiddlewareHistory, logger, thunk];

/**
 * @description Add the reducer to your store on the `router` key Also apply our middleware for navigating
 */
const store = createStore(
    combineReducers({
        ...rootReducer,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
)

/**
 * @description Wire-up Connected Router for the application.
 */
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Container>
                <Header />
                <Route exact path='/' component={App} />
            </Container>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();