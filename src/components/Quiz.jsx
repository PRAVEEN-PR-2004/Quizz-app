import React, { useEffect, useState } from "react";
import quiz from "../../public/quiz.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setQuestions(quiz);
  }, []);

  const handleAnswerSelect = (questionId, selectedOption) => {
    if (showResult) return;
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setLoading(true);

    let calculatedScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setLoading(false);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };

  return (
    <section className="">
      <div className="md:w-9/12 w-[90%] mx-auto mb-8 flex flex-col md:flex-row">
        <div className="md:w-[70%]">
          {questions.map((qus, ind) => (
            <div
              key={qus.id}
              className="px-4 py-3 m-3 border border-gray-200 rounded shadow-sm"
            >
              <p className="flex items-center p-2 text-xs rounded cursor-pointer">
                <span className="flex items-center justify-center w-8 h-8 mr-3 text-green-800 rounded-full bg-primary">
                  {ind + 1}
                </span>
                {qus.question}
              </p>
              <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2">
                {qus.options.map((option, index) => (
                  <div
                    onClick={() => handleAnswerSelect(qus.id, option)}
                    key={index}
                    className={`border p-2 border-gray-200 rounded cursor-pointer text-sx ${
                      answers[qus.id] === option ? "bg-gray-300" : ""
                    } ${showResult ? "pointer-events-none opacity-50" : ""}`}
                  >
                    <p className="text-[10px] mb-1">Option {index + 1}</p>
                    <p>{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center w-full space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button
              className="w-full px-6 py-2 text-white rounded bg-primary md:w-auto"
              onClick={handleSubmit}
            >
              Submit Quiz
            </button>

            {/* Reset button */}
            {showResult && (
              <button
                className="w-full px-6 py-2 text-white bg-red-500 rounded md:w-auto"
                onClick={handleReset}
              >
                Reset Quiz
              </button>
            )}
          </div>
        </div>

        {/* Display Result and Explanation */}
        <div className="md:w-[30%] w-full p-4">
          {showResult && (
            <div>
              <h3 className="text-2xl font-medium">Your Score: {score}</h3>
              {questions.map((qus, index) => (
                <div key={qus.id} className="mt-4">
                  <h4 className="text-lg font-bold">
                    {index + 1}. {qus.question}
                  </h4>
                  <p
                    className={`text-sm ${
                      answers[qus.id] === qus.answer
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    Your Answer: {answers[qus.id]} <br />
                    Correct Answer: {qus.answer}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {qus.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
