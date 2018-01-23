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
        let propsClass = "container " + (this.props.css ? this.props.css : "");

        return (
            <Common id={this.props.id} css={propsClass}>
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