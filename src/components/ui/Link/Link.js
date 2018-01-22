import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon } from '../'

import './link.css'

class Link extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = ({ meal, day }) => {
        this.setState(() => ({
            foodModalOpen: true,
            meal,
            day,
        }))
    }

    render() {
        if (this.props.external) {
            return (this.externalLink())
        } else {
            return (this.internalRoute())
        }
    }

    internalRoute() {
        return (
            <button id={this.props.id + "_link"} className={this.props.className} onClick={this.handleOnClick}>
                {this.props.children}
            </button>
        );
    }

    externalLink() {
        return (
            <a id={this.props.id + "_link"} className={this.props.className} href={this.props.href}
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
  href: PropTypes.string,
  children: PropTypes.node
}

function mapStateToProps ({ }) {
    return {

    }
}

function mapDispatchToProps (dispatch) {
    return {
        loginClick: () => dispatch(push("/aaa"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
