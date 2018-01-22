import React, { Component } from 'react'
import { AppBar, Button, Col, Image, Link, Row } from '../ui'
import './header.css'
import capewLogo from '../assets/capew.svg'

/**
 * @description Header Component.
 */
class Header extends Component {


    render() {
        return (
            <AppBar>
                <Row className="header-row">
                    <Col col="col-2" colsm="col-12-sm" align="left">
                        <Link push="/xc">
                            <Image alt="Capew" src={capewLogo} className="header-logo" />
                        </Link>
                        {/*<Button image>*/}
                            {/*<Image alt="Capew" src={capewLogo} className="header-logo" />*/}
                        {/*</Button>*/}
                    </Col>
                    <Col col="col-10" colsm="hidden-sm" align="right">

                    </Col>

                </Row>
            </AppBar>
        );
    }
}

export default Header;