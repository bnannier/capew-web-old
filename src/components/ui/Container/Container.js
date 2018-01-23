import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './container.css'
import Common from '../Common/Common'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Container extends Component {
    render() {
        return (
            <Common id={this.props.id}
                    className={
                        "container" + " " +
                        (this.props.css ? this.props.css : "")}>
                {this.props.children}
            </Common>
        );
    }
}

Container.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default Container;