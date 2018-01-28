import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './grid.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Grid extends Component {
    render() {
        let propsClass = "grid " + (this.props.css ? this.props.css : "");

        return (
            <div id={this.props.id} className={propsClass} style={this.renderStyles()}>
                {this.props.children}
            </div>
        );
    }

    renderStyles(){
        return ({
            gridTemplateColumns: 'repeat(' + this.props.columns + ', 1fr)',
            gridTemplateRows: 'repeat(' + this.props.rows + ', 1fr)',
            gridRowStart: this.props.rowStart,
            gridRowEnd: this.props.rowEnd,
            gridColumnStart: this.props.colStart,
            gridColumnEnd: (this.props.colEnd + 1)
        });
    }
}

Grid.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    rows: PropTypes.number.isRequired,
    rowStart: PropTypes.number.isRequired,
    rowEnd: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    colStart: PropTypes.number.isRequired,
    colEnd: PropTypes.number.isRequired
}

export default Grid;