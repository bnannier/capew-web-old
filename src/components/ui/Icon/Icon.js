import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../Common/fnt/font-awesome.css'
import './icon.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 * @param {string} icon -
 */
class Icon extends Component {
    render() {
        let propsClass = ("fa-" + this.props.icon) + " fa " + (this.props.css ? this.props.css : " ");

        return (
            <i id={this.props.id}
               className={propsClass}
               aria-hidden="true">
                {this.props.children}
            </i>
        );
    }
}

Icon.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string
}

export default Icon;