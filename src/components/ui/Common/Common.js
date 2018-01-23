import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './alignment.css'
import './common.css'
import './typography.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Common extends Component {
    render() {
        return (
            <div id={this.props.id}
                 className={
                     "common" + " " +
                     (this.props.css ? this.props.css : " ")}>
                {this.props.children}
            </div>
        );
    }
}

Common.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default Common;