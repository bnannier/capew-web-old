import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './appBar.css'
import Grid from '../Grid/Grid'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBar extends Component {
    render() {
        let combinedStyle = "app-bar " + (this.props.css ? this.props.css : " ");

        return (
            <Grid id={this.props.id} css={combinedStyle} rows={1} rowStart={1} rowEnd={1} columns={12} colStart={1} colEnd={12}>
                {this.props.children}
            </Grid>
        );
    }
}

AppBar.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBar;
