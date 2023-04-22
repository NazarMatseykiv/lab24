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
    selectedAnswer: null
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
    selectedAnswer: null
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
    selectedAnswer: null
  },
];

const Task4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerId) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selectedAnswer = answerId;
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
      const selectedAnswer = question.selectedAnswer;
      if (selectedAnswer !== null && question.answers[selectedAnswer].correct) {
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
            const selectedAnswer = question.selectedAnswer;
            const isCorrect = selectedAnswer !== null && question.answers[selectedAnswer].correct;
            return (
              <li key={question.id} style={{ color: isCorrect ? 'green' : 'red' }}>
                {question.text} - Your answer: {selectedAnswer !== null ? question.answers[selectedAnswer].text : 'Not answered'}
                {isCorrect ? ', Correct' : `, Incorrect, correct answer: ${question.answers.find(answer => answer.correct).text}`}
              </li>
            );
          })}
    </ul>
    <p>Your score: {score}/{questions.length}</p>
  </>
);
};

const renderQuestion = (question) => {
return (
<>
<h3>{question.text}</h3>
<form>
{question.answers.map((answer) => (
<div key={answer.id}>
<label>
<input
type="radio"
name={'question-${question.id}'}
value={answer.id}
checked={question.selectedAnswer === answer.id}
onChange={() => handleAnswerSelect(answer.id)}
/>
{answer.text}
</label>
</div>
))}
</form>
<button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>Previous</button>
<button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
<button onClick={handleShowResults} disabled={currentQuestion !== questions.length - 1}>Finish</button>
</>
);
};

return (
<div>
{!showResults && renderQuestion(questions[currentQuestion])}
{showResults && renderResults()}
</div>
);
};

export default Task4;