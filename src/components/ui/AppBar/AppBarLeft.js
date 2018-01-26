import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './appBar.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarLeft extends Component {
    render() {
        let propsClass = "app-bar-left " + (this.props.css ? this.props.css : " ");

        return (
            <div id={this.props.id} className={propsClass}>
                {this.props.children}
            </div>
        );
    }
}

AppBarLeft.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarLeft;