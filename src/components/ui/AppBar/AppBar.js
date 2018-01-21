import React, { Component } from 'react'
import './appBar.css'

class AppBar extends Component {
    render() {
        return (
            <div>
                <div className={"app-bar " + this.props.className}>
                    {this.props.children}
                </div>
                <div className="app-bar-spacer">
                </div>
            </div>
        );
    }
}

export default AppBar;