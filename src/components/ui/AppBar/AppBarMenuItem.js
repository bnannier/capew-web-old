import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarMenuItem extends Component {
    render() {
        return (
            <div className="app-bar-menu-item">
                <button className="app-bar-menu-item-dropdown-button">{this.props.label}</button>
                <div className="app-bar-menu-item-content">
                    <a href="/login">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        );
    }
}

AppBarMenuItem.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

export default AppBarMenuItem;

{/*<div className="app-bar-menu-item">*/}
    {/*{this.props.children}*/}
{/*</div>*/}