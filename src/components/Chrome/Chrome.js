import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from '../ui'
import Header from '../Header/Header'

import configureStore from '../../utilities/configureStore'
import registerServiceWorker from '../../utilities/registerServiceWorker'

function Chrome(routes, reducers) {
    const store = configureStore(reducers);

    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Container>
                    <Header/>
                    {routes}
                </Container>
            </Router>
        </Provider>
        , document.getElementById('root')
    );
    registerServiceWorker();
}

export default Chrome;