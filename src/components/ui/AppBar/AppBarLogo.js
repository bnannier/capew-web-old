import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from '../Image/Image'
import Link from '../Link/Link'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarLogo extends Component {
    render() {
        return (
            <Link to="/">
                <Image alt="Capew" src={this.props.logo} css="app-bar-logo"/>
            </Link>
        );
    }
}

AppBarLogo.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    logo: PropTypes.string
}

export default AppBarLogo;