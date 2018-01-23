import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'

import './link.css'
import { Icon } from '../'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 * @param {bool} external -
 * @param {string} to -
 */
class Link extends Component {
    render() {
        if (this.props.external) {
            return (this.externalLink())
        } else {
            return (this.internalRoute())
        }
    }

    internalRoute() {
        return (
            <ReactRouterLink id={this.props.id}
                             className={
                                 "app-bar" + " " +
                                 (this.props.css ? this.props.css : " ")}
                             to={this.props.to}>
                {this.props.children}
            </ReactRouterLink>
        );
    }

    externalLink() {
        return (
            <a id={this.props.id + "_link"}
               className={
                   "link" + " " +
                   (this.props.css ? this.props.css : " ")}
               href={this.props.to}
               target={this.targetCheck()}>
                {this.props.children} <Icon icon="fa fa-external-link external-link"></Icon>
            </a>
        );
    }

    targetCheck() {
        if (this.props.external) {
            return ("_blank");
        }
    }
}

Link.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    external: PropTypes.bool,
    to: PropTypes.string
}

export default Link;
