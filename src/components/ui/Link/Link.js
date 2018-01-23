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
        let propsClass = (this.props.css ? this.props.css : " ");

        if (this.props.external) {
            return (this.externalLink(propsClass))
        } else {
            return (this.internalRoute(propsClass))
        }
    }

    internalRoute(propsClass) {
        return (
            <ReactRouterLink id={this.props.id}
                             className={propsClass}
                             to={this.props.to}>
                {this.props.children}
            </ReactRouterLink>
        );
    }

    externalLink(propsClass) {
        return (
            <a id={this.props.id + "_link"}
               className={propsClass}
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
