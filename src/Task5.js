import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    answers: [
      { id: 1, text: 'London', correct: false },
      { id: 2, text: 'Paris', correct: true },
      { id: 3, text: 'Berlin', correct: false },
      { id: 4, text: 'Madrid', correct: false },
    ],
    selectedAnswers: []
  },
  {
    id: 2,
    text: 'What is the largest planet in the solar system?',
    answers: [
      { id: 1, text: 'Earth', correct: false },
      { id: 2, text: 'Jupiter', correct: true },
      { id: 3, text: 'Saturn', correct: false },
      { id: 4, text: 'Mars', correct: false },
    ],
    selectedAnswers: []
  },
  {
    id: 3,
    text: 'What is the highest mountain in the world?',
    answers: [
      { id: 1, text: 'Mount Everest', correct: true },
      { id: 2, text: 'Kilimanjaro', correct: false },
      { id: 3, text: 'Denali', correct: false },
      { id: 4, text: 'Fuji', correct: false },
    ],
    selectedAnswers: []
  },
];

const Task5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerId) => {
    const updatedQuestions = [...questions];
    const selectedAnswers = updatedQuestions[currentQuestion].selectedAnswers;
    const answerIndex = selectedAnswers.indexOf(answerId);

    if (answerIndex === -1) {
      selectedAnswers.push(answerId);
    } else {
      selectedAnswers.splice(answerIndex, 1);
    }

    updatedQuestions[currentQuestion].selectedAnswers = selectedAnswers;
    questions[currentQuestion] = updatedQuestions[currentQuestion];
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, i) => {
      const selectedAnswers = question.selectedAnswers;
      const correctAnswers = question.answers.filter(answer => answer.correct).map(answer => answer.id);

      if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answerId => correctAnswers.includes(answerId))) {
        score++;
      }
    });
    return score;
  };

  const renderResults = () => {
    const score = calculateScore();
    return (
      <>
        <h3>Results:</h3>
        <ul>
          {questions.map((question, i) => {
            const selectedAnswers = question.selectedAnswers;
            const correctAnswers = question.answers.filter(answer => answer.correct).map(answer => answer.id);
            const isCorrect = selectedAnswers.length
            return (
                <li key={question.id}>
                  <p>{question.text}</p>
                  <p>{isCorrect ? 'Correct' : 'Incorrect'}</p>
                </li>
              );
            })}
          </ul>
          <p>Your score is: {score}/{questions.length}</p>
        </>
      );
    };

    const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
    <>
    <h3>{question.text}</h3>
    <ul>
    {question.answers.map((answer, i) => (
    <li key={answer.id}>
    <label>
    <input type="checkbox" checked={question.selectedAnswers.includes(answer.id)} onChange={() => handleAnswerSelect(answer.id)} />
    {answer.text}
    </label>
    </li>
    ))}
    </ul>
    <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>Previous</button>
    <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
    <button onClick={handleShowResults} disabled={!questions.every(question => question.selectedAnswers.length > 0)}>Submit</button>
    </>
    );
    };
    
    return (
    <>
    {showResults ? renderResults() : renderQuestion()}
    </>
    );
    };
    
    export default Task5;      