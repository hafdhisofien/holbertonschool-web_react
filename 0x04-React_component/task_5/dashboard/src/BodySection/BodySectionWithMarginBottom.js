import React, { Component } from "react";
import "./BodySectionWithMarginBottom.css";
import BodySection from "./BodySection";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

export default BodySectionWithMarginBottom;
