import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './avatar.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 * @param {bool} primary -
 * @param {bool} secondary -
 * @param {bool} create -
 * @param {bool} success -
 * @param {bool} error -
 * @param {bool} info -
 */
class Avatar extends Component {
    render() {
        let combinedStyle = this.buttonType() + " " + this.secondaryButtonType() + " " + (this.props.css ? this.props.css : " ");

        return (
            <button id={this.props.id}
                    className={combinedStyle}
                    onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }

    buttonType() {
        if (this.props.primary) {
            return (" primary-button ");
        } else if (this.props.secondary) {
            return (" secondary-button ");
        } else if (this.props.image) {
            return (" image-button ");
        } else {
            return (" "); // Default Button
        }
    }

    secondaryButtonType() {
        if (this.props.create) {
            return (" secondary-button-cerate ");
        } else if (this.props.success) {
            return (" secondary-button-success ");
        } else if (this.props.error) {
            return (" secondary-button-error ");
        } else if (this.props.info) {
            return (" secondary-button-info ");
        }
    }
}

Avatar.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    create: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    info: PropTypes.bool
}

export default Avatar;