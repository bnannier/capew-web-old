import React, { Component } from 'react';
import '../Common/fnt/font-awesome.css';
import './icon.css';

class Icon extends Component {
  render() {
    return (
        <i className={"fa-" + this.props.icon + " fa"} aria-hidden="true">{this.props.children}</i>
    );
  }
}

export default Icon;