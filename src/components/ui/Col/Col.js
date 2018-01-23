import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './col.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 * @param {string} col -
 * @param {string} colsm -
 * @param {string} align -
 */
class Col extends Component {
    render() {
        return (
            <div id={this.props.id}
                 className={
                     "col" + " " +
                     this.props.col + " " +
                     this.props.colsm + " " +
                     this.props.align + " " +
                     (this.props.css ? this.props.css : " ")}>
                {this.props.children}
            </div>
        );
    }
}

Col.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    col: PropTypes.string,
    colsm: PropTypes.string,
    align: PropTypes.string
}

export default Col;