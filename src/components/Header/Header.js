import React, { Component } from 'react'
import {AppBar, Col, Image, Row} from '../ui'
import './header.css'
import capewLogo from '../assets/capew.svg'

/**
 * @description Header Component.
 */
class Header extends Component {
    render() {
        return (
            <AppBar>
                <Row>
                    <Col col="col-6" colsm="col-12-sm">
                        <Image alt="Capew" src={capewLogo} className="logo" />
                    </Col>
                    <Col col="col-6" colsm="hidden-sm">asdasd</Col>
                </Row>
            </AppBar>
        );
    }
}

export default Header;