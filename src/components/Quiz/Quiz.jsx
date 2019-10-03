import React from 'react';
import { Link } from 'react-router-dom';
import QuizModel from '../../models/Quiz';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      currentIndex : 0,
      numberOfCorrects : 0
    };
  }

  async componentDidMount() {
    await this.restart();
  }

  async restart() {
    this.setState({
      quizzes: [],
      currentIndex : 0,
      numberOfCorrects : 0
    });

    const quizzes = await QuizModel.fetchAndCreateQuizzes();

    this.setState({ quizzes });
  }

  selectAnswer(quiz, answer) {
    let { currentIndex, numberOfCorrects } = this.state;
    const isCorrect = quiz.judgeCorrectAnswer(answer);

    if (isCorrect) {
      numberOfCorrects++;
      alert('Correct answer!!');
    } else {
      alert(`Wrong answer... (The correct answer is "${quiz._correctAnswer}")`);
    }
    currentIndex++;

    this.setState({
      currentIndex,
      numberOfCorrects
    });
  }

  render() {
    const { quizzes, currentIndex } = this.state;

    // 読込中
    if (quizzes.length === 0) {
      return this.renderLoading();
    }

    // クイズ中
    if (quizzes.length > 0 && currentIndex < quizzes.length) {
      return this.reunderQuiz();
    }

    // クイズ結果
    if (quizzes.length > 0 && currentIndex >= quizzes.length) {
      return this.renderResult();
    }
  }

  renderLoading() {
    return (
      <div>
        <h1>クイズページ</h1>
        <p>Now loading...</p>
        <hr/>
        <Link to="/">トップページへ</Link>
      </div>
    );
  }

  reunderQuiz() {
    const { currentIndex, quizzes } = this.state;

    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return (
        <li
          className="QuizAnswer"
          key={index}
          onClick={() => { this.selectAnswer(quiz, answer) }}>
          {answer}
        </li>
      );
    });

    return (
      <div>
        <h1>クイズページ</h1>
        <div className="container">
          <p>{quiz.question}</p>
          <ul className="QuizList">{answers}</ul>
        </div>
        <hr/>
        <Link to="/">トップページへ</Link>
      </div>
    );
  }

  renderResult() {
    const { quizzes, numberOfCorrects } = this.state;

    return (
      <div>
        <h1>クイズページ</h1>
        <div className="container">
          <p id="result">{`${numberOfCorrects}/${quizzes.length} corrects.`}</p>
          <button onClick={() => {this.restart()}}>Restart</button>
        </div>
        <hr/>
        <Link to="/">トップページへ</Link>
      </div>
    );
  }
}

export default Quiz;