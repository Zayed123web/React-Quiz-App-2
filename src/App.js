import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import "./Style.css";
import { shuffle } from "./uties";

class App extends Component {
  state = {
    quizes: [],
    currentQuestionIndex: 0,
    currentAnswers: [],
  };

  fetchQuiz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    const asnOpts = shuffle(results[0]);
    this.setState({
      quizes: results,
      currentAnswers: asnOpts,
    });
  };
  render() {
    const { quizes, currentQuestionIndex, currentAnswers } = this.state;
    return (
      <div>
        <button onClick={this.fetchQuiz} className="btn btn-primary">
          Start Quiz
        </button>
        <QuestionCard
          ansOpts={currentAnswers}
          quiz={quizes[currentQuestionIndex]}
        />
      </div>
    );
  }
}

export default App;
