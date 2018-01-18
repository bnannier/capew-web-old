import React, { Component } from 'react'
import './grid.css'

/**
 * @description Row's Col Component.
 */
class Col extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Col;