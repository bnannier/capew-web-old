import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AppBar, AppBarLeft, AppBarCenter, AppBarRight, AppBarLogo, AppBarMenuItem, AppBarMenuProfile, Avatar, Image, Link, AppBarMenu} from '../ui'

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
                    <AppBarLogo logo={capewLogo}/>
                </AppBarLeft>
                <AppBarCenter>
                </AppBarCenter>
                <AppBarRight>
                    <AppBarMenu>
                        <AppBarMenuItem label={this.props.name}>
                            yo
                        </AppBarMenuItem>
                    </AppBarMenu>
                </AppBarRight>
            </AppBar>
        );
    }

    loginCheck() {
        if (this.props.name !== null || this.props.name !== undefined) {
            return (
                <Image alt="Capew" src={this.props.userImage} />
            )
        } else {
            return (
                <Link to="/login" css="header-link">Log In</Link>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.login.name,
        userImage: state.login.picture.url
    }
};

export default connect(mapStateToProps)(Header)
