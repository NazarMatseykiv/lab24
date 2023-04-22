import { useState } from "react";

const questions = [
  {
    question: "Яка столиця Франції?",
    answer: "Париж",
  },
  {
    question: "Яка найвища гора в світі?",
    answer: "Еверест",
  },
  {
    question: "Який найбільший океан у світі?",
    answer: "Тихий океан",
  },
];

const Task2 = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: value,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const renderQuestion = (question, index) => {
    const isCorrect = answers[index] === question.answer;
    return (
      <div key={index}>
        <p>{question.question}</p>
        {!showResults ? (
          <input
            type="text"
            onChange={(e) => handleInputChange(e, index)}
          />
        ) : (
          <p style={{ color: isCorrect ? "green" : "red" }}>
            {`Ваша відповідь: ${answers[index]}. ${
              isCorrect ? "Правильно!" : `Правильна відповідь ${question.answer}.`
            }`}
          </p>
        )}
      </div>
    );
  };

  const totalScore = questions.reduce((acc, question, index) => {
    const isCorrect = answers[index] === question.answer;
    return isCorrect ? acc + 1 : acc;
  }, 0);

  return (
    <div>
      <h1>Test</h1>
      {questions.map(renderQuestion)}
      {!showResults && (
        <button onClick={handleSubmit}>Submit answers</button>
      )}
      {showResults && (
        <div>
          <h2>Results:</h2>
          <p>
            {`You got ${totalScore} out of ${questions.length} questions correct!`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Task2;
