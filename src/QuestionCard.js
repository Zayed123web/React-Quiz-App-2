import React, { Component } from "react";
import AnswerCard from "./AnswerCard";

export default class QuestionCard extends Component {
  render() {
    const { quiz, ansOpts } = this.props;
    console.log(ansOpts);
    return (
      <div>
        <h3>{quiz?.question}</h3>
        {ansOpts?.map((ans, index) => (
          <AnswerCard key={index} ans={ans} />
        ))}
      </div>
    );
  }
}
