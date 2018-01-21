import React, { Component } from 'react'
import './col.css'

/**
 * @description Row's Col Component.
 */
class Col extends Component {
    render() {
        return (
            <div className={this.props.col + " " + this.props.colsm}>
                {this.props.children}
            </div>
        );
    }
}

export default Col;