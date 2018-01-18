import React, { Component } from 'react'

import { Col, Container, Grid, Header, Row } from './ui'

class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Grid>
                        <Row>
                            <Col>1</Col>
                            <Col>2</Col>
                            <Col>3</Col>
                        </Row>
                    </Grid>
                </Header>
            </Container>
        );
    }
}

export default App;