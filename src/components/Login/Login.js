import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../ui'

import './login.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Login extends Component {
    render() {
        return (
            <Card id={this.props.id} css="login">
                login
            </Card>
        );
    }
}

Login.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default Login;