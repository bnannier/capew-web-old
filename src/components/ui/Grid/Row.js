import React, { Component } from 'react'
import './grid.css'

/**
 * @description Grid's Row Component.
 */
class Row extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Row;