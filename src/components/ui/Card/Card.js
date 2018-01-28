import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './card.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Card extends Component {
    render() {
        let propsClass = "card " + (this.props.css ? this.props.css : " ");

        return (
            <div id={this.props.id} className={propsClass}>
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
}

export default Card;