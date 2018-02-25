import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        let combinedStyle = (this.props.css ? this.props.css : " ");

        return (
            <div id={this.props.id} className={combinedStyle}>
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