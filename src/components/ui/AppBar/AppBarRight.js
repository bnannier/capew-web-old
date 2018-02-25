import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex/Flex'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarRight extends Component {
    render() {
        let combinedStyle = "app-bar-right " + (this.props.css ? this.props.css : " ");

        return (
            <Flex id={this.props.id} css={combinedStyle} rowStart={1} rowEnd={1} colStart={7} colEnd={12} justify="right" align="center">
                {this.props.children}
            </Flex>
        );
    }
}

AppBarRight.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarRight;