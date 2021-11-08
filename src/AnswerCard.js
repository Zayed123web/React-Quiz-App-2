import React, { Component } from "react";

export default class AnswerCard extends Component {
  render() {
    const { ans } = this.props;
    return (
      <div>
        <p>{ans}</p>
      </div>
    );
  }
}
