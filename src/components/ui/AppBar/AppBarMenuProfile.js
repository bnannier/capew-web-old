import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './appBar.css'
import Image from "../Image/Image";

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarMenuProfile extends Component {
    render() {
        let combinedStyle = "app-bar-menu-profile-image " + this.shape() + " " + (this.props.css ? this.props.css : " ");

        return [
            <Image key="profileImage" alt={this.props.name} src={this.props.image} css={combinedStyle}/>,
            <div key="profileName" className={this.description()}>
                {this.props.name.split(' ')[0]} &#x25be;
            </div>
        ];
    }

    shape() {
        if (this.props.circle) {
            return (" app-bar-menu-profile-image-circle ");
        } else if (this.props.square) {
            return (" app-bar-menu-profile-image-square ");
        } else {
            return (" "); // Default Button
        }
    }

    description() {
        if (this.props.left) {
            return (" app-bar-menu-profile-text-left ");
        } else if (this.props.right) {
            return (" app-bar-menu-profile-text-right ");
        } else {
            return (" "); // Default Button
        }
    }
}

AppBarMenuProfile.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool
}

export default AppBarMenuProfile;
