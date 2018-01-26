import React, { Component } from 'react'
import { AppBar, AppBarLeft, AppBarCenter, AppBarRight } from '../ui'

import capewLogo from '../assets/capew.svg'

/**
 * @description Header Component.
 */
class Header extends Component {
    render() {
        return (
            <AppBar>
                <AppBarLeft>
                    AppBarLeft
                </AppBarLeft>
                <AppBarCenter>
                    AppBarCenter
                </AppBarCenter>
                <AppBarRight>
                    AppBarRight
                </AppBarRight>
            </AppBar>
        );
    }
}

export default Header;
