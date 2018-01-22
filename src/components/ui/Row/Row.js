import React, { Component } from 'react'
import './row.css'

/**
 * @description Col's Row Component.
 */
class Row extends Component {
    render() {
        return (
            <div className={"row " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Row;