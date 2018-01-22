import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Icon } from '../'

import './link.css'

class Link extends Component {
  render() {
    if (this.props.external) {
      return (this.externalLink())
    } else if (this.props.left) {

    }
    else {
      return (this.internalRoute())
    }
  }

  internalRoute() {
    return (
        <ReactRouterLink className={this.props.className} to={this.props.to}>{this.props.children}</ReactRouterLink>
    );
  }

  externalLink() {
    return (
        <a id={this.props.id + "_link"} className={this.props.className} href={this.props.to} target={this.targetCheck()}>
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
  href: PropTypes.string,
  children: PropTypes.node
}

export default Link;
