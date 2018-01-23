import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './row.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Row extends Component {
    render() {
        let propsClass = "row " + (this.props.css ? this.props.css : " ");

        return (
            <div id={this.props.id}
                 className={propsClass}>
                 {this.props.children}
            </div>
        );
    }
}

Image.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default Row;