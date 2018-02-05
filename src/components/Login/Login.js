import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Card, Flex, Password } from '../ui'

import './login.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Login extends Component {
    responseFacebook(response) {
        console.log(response);
    }

    render() {
        return (
            <Flex rowStart={2} rowEnd={7} colStart={1} colEnd={12} justify="center" align="center">
                <Card id={this.props.id} css="login">
hjkhkj
                </Card>
            </Flex>
        );
    }
}

Login.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default Login;