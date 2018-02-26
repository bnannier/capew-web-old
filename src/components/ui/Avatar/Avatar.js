import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './avatar.css'
import Image from "../Image/Image";

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Avatar extends Component {
    render() {
        let combinedStyle = this.size() + " " + this.shape() + " " + (this.props.css ? this.props.css : " ");

        return [
            <Image key="avatarImage" alt={this.props.name} src={this.props.image} css={combinedStyle}/>,
            <div key="avatarName" className={this.description()}>
                Hi,<br />{this.props.name}
            </div>
        ];
    }

    size() {
        if (this.props.small) {
            return (" avatar-small ");
        } else if (this.props.medium) {
            return (" avatar-medium ");
        } else if (this.props.large) {
            return (" avatar-large ");
        } else {
            return (" "); // Default Button
        }
    }

    shape() {
        if (this.props.circle) {
            return (" avatar-circle ");
        } else if (this.props.square) {
            return (" avatar-square ");
        } else {
            return (" "); // Default Button
        }
    }

    description() {
        if (this.props.left) {
            return (" avatar-left ");
        } else if (this.props.right) {
            return (" avatar-right ");
        } else {
            return (" "); // Default Button
        }
    }
}

Avatar.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool
}

export default Avatar;
