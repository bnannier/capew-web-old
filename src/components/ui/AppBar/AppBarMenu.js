import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarMenu extends Component {
    render() {
        return (
            <div className="app-bar-menu">
                {this.props.children}
            </div>
        );
    }
}

AppBarMenu.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarMenu;