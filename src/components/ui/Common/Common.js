import React, { Component } from 'react'
import './alignment.css'
import './common.css'
import './typography.css'

class Common extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Common;