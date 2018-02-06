import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'

import { Card, Flex, Password } from '../ui'

import './login.css'

import {
    facebookLogin
} from './Actions'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Login extends Component {
    render() {
        return (
            <Flex rowStart={2} rowEnd={7} colStart={1} colEnd={12} justify="center" align="center">
                <Card id={this.props.id} css="login">
                    <FacebookLogin
                        appId="462130920868794"
                        autoLoad={true}
                        fields="name,email,picture"
                        // scope="public_profile,user_friends,user_actions.books"
                        callback={this.props.responseFacebook}
                    />
                    <div>{this.props.name}</div>
                </Card>
            </Flex>
        );
    }
}

Login.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node
}

const mapStateToProps = (state) => {
    return {
        name: state.login.facebookLogin.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        responseFacebook: (response) => dispatch(facebookLogin(response))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
