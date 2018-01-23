import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './image.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 * @param {string} src -
 * @param {string} alt -
 */
class Image extends Component {
    render() {
        let propsClass = "image " + (this.props.css ? this.props.css : " ");

        return (
            <img id={this.props.id}
                 className={propsClass}
                 src={this.props.src}
                 alt={this.props.alt}/>
        );
    }
}

Image.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Image;