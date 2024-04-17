import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
   
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

   
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption('');
  };

  return (
    <div className="container mx-auto py-10">
      {currentQuestionIndex < questions.length ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}</h1>
          <p className="mb-4">{questions[currentQuestionIndex].question}</p>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`p-4 border ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-white'}`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="mt-4 p-2 bg-blue-500 text-white" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Quiz Completed</h1>
          <p>Your score is {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
