import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './login.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Login extends Component {
    render() {
        let propsClass = "login " + (this.props.css ? this.props.css : " ");

        return (
            <div id={this.props.id} className={propsClass}>
                <br /><br /><br />
                login
            </div>
        );
    }
}

Login.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default Login;