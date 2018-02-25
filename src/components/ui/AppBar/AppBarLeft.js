import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex/Flex'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarLeft extends Component {
    render() {
        let combinedStyle = "app-bar-left " + (this.props.css ? this.props.css : " ");

        return (
            <Flex id={this.props.id} css={combinedStyle} rowStart={1} rowEnd={1} colStart={1} colEnd={4} justify="left" align="center">
                {this.props.children}
            </Flex>
        );
    }
}

AppBarLeft.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarLeft;