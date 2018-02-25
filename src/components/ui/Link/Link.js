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
        let combinedStyle = (this.props.css ? this.props.css : " ");

        if (this.props.external) {
            return (this.externalLink(combinedStyle))
        } else {
            return (this.internalRoute(combinedStyle))
        }
    }

    internalRoute(combinedStyle) {
        return (
            <ReactRouterLink id={this.props.id}
                             className={combinedStyle}
                             to={this.props.to}>
                {this.props.children}
            </ReactRouterLink>
        );
    }

    externalLink(combinedStyle) {
        return (
            <a id={this.props.id + "_link"}
               className={combinedStyle}
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
