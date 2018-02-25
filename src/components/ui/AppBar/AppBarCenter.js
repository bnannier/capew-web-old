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
class AppBarCenter extends Component {
    render() {
        let combinedStyle = "app-bar-center " + (this.props.css ? this.props.css : " ");

        return (
            <Flex id={this.props.id} css={combinedStyle} rowStart={1} rowEnd={1} colStart={5} colEnd={8} justify="center" align="center">
                {this.props.children}
            </Flex>
        );
    }
}

AppBarCenter.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarCenter;