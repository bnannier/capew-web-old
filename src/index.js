import React from 'react'
import { Route } from 'react-router-dom'
import Chrome from './components/Chrome/Chrome'
import Login from './components/Login/Login'
import reducers from './components/reducers'

/**
 * @description Wire-up Chrome UI Kit
 */

Chrome (
    [
        <Route key="default" exact path='/' component={Login}/>,
        <Route key="login" exact path='/login' component={Login}/>
    ],
    reducers
);