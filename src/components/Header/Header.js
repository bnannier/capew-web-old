import React, { Component } from 'react'
import { AppBar, AppBarLeft, AppBarCenter, AppBarRight, Image, Link } from '../ui'

import './header.css'
import capewLogo from '../assets/img/capew.svg'

/**
 * @description Header Component.
 */
class Header extends Component {
    render() {
        return (
            <AppBar>
                <AppBarLeft>
                    <Link to="/">
                        <Image alt="Capew" src={capewLogo} css="header-logo"/>
                    </Link>
                </AppBarLeft>
                <AppBarCenter>
                </AppBarCenter>
                <AppBarRight>
                    <Link to="/login" css="header-link">Log In</Link>
                </AppBarRight>
            </AppBar>
        );
    }
}

export default Header;
