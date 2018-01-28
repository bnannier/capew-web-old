import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './appBar.css'
import Flex from '../Flex/Flex'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarRight extends Component {
    render() {
        let propsClass = "app-bar-right " + (this.props.css ? this.props.css : " ");

        return (
            <Flex id={this.props.id} css={propsClass} rowStart={1} rowEnd={1} colStart={9} colEnd={12} justify="right" align="center">
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