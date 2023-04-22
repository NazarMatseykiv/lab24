import React, { useState } from 'react';

const questions = [
  {
    question: 'Яка столиця України?',
    answer: 'Київ'
  },
  {
    question: 'Який океан лежить на заході від Європи?',
    answer: 'Атлантичний'
  },
  {
    question: 'Яке найбільше озеро в Україні?',
    answer: 'Світязь'
  }
];

const Task3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = event.target.value;
    setAnswers(newAnswers);
  }

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  }

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  const handleSubmit = () => {
    setShowResults(true);
  }

  const renderQuestion = (question, index) => {
    return (
      <div key={index}>
        <h3>{question.question}</h3>
        <input type="text" value={answers[index]} onChange={handleAnswer} />
      </div>
    );
  }

  const renderResult = (question, index) => {
    const answer = answers[index];
    const correctAnswer = question.answer;
    const isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();

    return (
      <div key={index}>
        <h3>{question.question}</h3>
        <p>Ваша відповідь: {answer}</p>
        {isCorrect ? (
          <p style={{ color: 'green' }}>Правильно!</p>
        ) : (
          <p style={{ color: 'red' }}>Не правильно. Правильна відповідь: {correctAnswer}</p>
        )}
      </div>
    );
  }

  if (showResults) {
    return (
      <div>
        {questions.map(renderResult)}
      </div>
    );
  }

  return (
    <div>
      {renderQuestion(questions[currentQuestion], currentQuestion)}

      <button onClick={handlePrev} disabled={currentQuestion === 0}>Назад</button>
      <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>Вперед</button>

      {currentQuestion === questions.length - 1 && <button onClick={handleSubmit}>Перевірити відповіді</button>}
    </div>
  );
}

export default Task3;
