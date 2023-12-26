import { Component } from "react";
import React from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">name</h3>
          <div className="subheading mb-3 colorized">study</div>
          <div>area</div>
          <div>info</div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">date</span>
        </div>
      </div>
    );
  }
}
