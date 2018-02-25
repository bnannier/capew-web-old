import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './flex.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Flex extends Component {
    render() {
        let combinedStyle = "flex " + (this.props.css ? this.props.css : "");
        let styles = {
            gridColumn: this.props.colStart + ' / ' + (this.props.colEnd + 1),
            gridRow: this.props.rowStart + ' / ' + (this.props.rowEnd + 1),
            justifyContent: this.justifyContent(this.props.justify),
            alignItems: this.alignItems(this.props.align)
        };

        return (
            <div id={this.props.id} className={combinedStyle} style={styles}>
                {this.props.children}
            </div>
        );
    }

    justifyContent(justify){
        if(justify === "left"){
            return "flex-start";

        } else if(justify === "center"){
            return "center";

        } else if(justify === "right"){
            return "flex-end";
        } else {
            return "";
        }
    }

    alignItems(align){
        if(align === "top"){
            return "flex-start";

        } else if(align === "center"){
            return "center";

        } else if(align === "bottom"){
            return "flex-end";
        } else {
            return "";
        }
    }
}

Flex.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
    justify: PropTypes.string,
    align: PropTypes.string
}

export default Flex;