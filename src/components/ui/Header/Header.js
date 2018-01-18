import React, { Component } from 'react'

/**
 * @description Site header component.
 */
class Header extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Header;