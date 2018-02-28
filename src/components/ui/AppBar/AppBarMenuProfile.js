import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './appBar.css'
import Image from "../Image/Image";
import Button from "../Button/Button";

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class AppBarMenuProfile extends Component {
    render() {
        // let combinedStyle = "app-bar-menu-profile " + this.shape() + this.description() + " " + (this.props.css ? this.props.css : " ");

        let imageCSS = "app-bar-menu-profile-image " + this.shape() + this.justify();

        return (
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        );
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

    justify() {
        if (this.props.left) {
            return (" app-bar-menu-profile-image-left ");
        } else if (this.props.right) {
            return (" app-bar-menu-profile-image-right ");
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


{/*<Button css="app-bar-menu-profile-button">*/}
{/*<Image key="profileImage" alt={this.props.name} src={this.props.image} css={imageCSS}/>*/}
{/*&nbsp; {this.props.name.split(' ')[0]} &#x25be;*/}
{/*</Button>*/}
