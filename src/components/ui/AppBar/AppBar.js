import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './appBar.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBar extends Component {
    let myClass = "app-bar" + " " + (this.props.css ? this.props.css : " ")

    render() {
        return (
            <div id={this.props.id}
                 className={myClass}>
                {this.props.children}
            </div>
        );
    }
}

AppBar.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBar;