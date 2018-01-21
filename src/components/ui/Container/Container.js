import React, { Component } from 'react'
import Common from '../Common/Common'
import './container.css'

/**
 * @description Container Component.
 */
class Container extends Component {
    render() {
        return (
            <Common className="container">
                {this.props.children}
            </Common>
        );
    }
}

export default Container;