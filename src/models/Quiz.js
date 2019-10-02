import _ from 'lodash';
import QuizFetcher from '../data_fetchers/QuizFetcher';

class Quiz {
  constructor({ question, correctAnswer, incorrectAnswers }) {
    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswers = [...incorrectAnswers];
  }

  shuffleAnswers() {
    return _.shuffle([
      this._correctAnswer,
      ...this._incorrectAnswers
    ]);
  }

  judgeCorrectAnswer(answer) {
    return answer === this._correctAnswer;
  }

  static async fetchAndCreateQuizzes() {
    const quizDataList = await QuizFetcher.fetch();

    return quizDataList.results.map(result => {
      return {
        question: result.question,
        correctAnswer: result.correct_answer,
        incorrectAnswers: [...result.incorrect_answers]
      };
    })
    .map(quizData => {
      return new Quiz(quizData);
    })
  }
}

export default Quiz;