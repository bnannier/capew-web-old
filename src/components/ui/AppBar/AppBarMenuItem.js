import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarMenuItem extends Component {
    render() {
        return (
            <div className="app-bar-menu-item">
                {this.props.children}
            </div>
        );
    }
}

AppBarMenuItem.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarMenuItem;