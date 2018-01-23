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
        return (
            <div id={this.props.id}
                 className={
                     "row" + " " +
                     (this.props.css ? this.props.css : " ")}>
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