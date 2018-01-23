import React, { Component } from 'react'
import { AppBar, Col, Image, Link, Row } from '../ui'
import './header.css'
import capewLogo from '../assets/capew.svg'

/**
 * @description Header Component.
 */
class Header extends Component {
    render() {
        return (
            <AppBar>
                <Row css="header-row">
                    <Col col="col-2" colsm="col-12-sm" align="left">
                        <Link to="/">
                            <Image alt="Capew" src={capewLogo} css="header-logo"/>
                        </Link>
                    </Col>
                    <Col col="col-10" colsm="hidden-sm" align="right">
                        <Link to="/login" css="header-link">Login</Link>
                    </Col>

                </Row>
            </AppBar>
        );
    }
}

export default Header;
