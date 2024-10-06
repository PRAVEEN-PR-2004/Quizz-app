import React, { useEffect, useState } from "react";
import quiz from "../../public/quiz.json"; // importing the local quiz data

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    setQuestions(quiz); // directly setting the quiz data from the import
  }, []);

  // Function to handle answer selection
  const handleAnswerSelect = (questionId, selectedOption) => {
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
  };
  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
  };

  return (
    <section>
      <div className="md:w-9/12 w-[90%] mx-auto mb-8">
        <div className="md:w-[70%] ">
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
                    }`}
                  >
                    <p className="text-[10px] mb-1">Option {index + 1}</p>
                    <p>{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="px-6 py-2 text-white rounded bg-primary"
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        </div>
        {/* answer */}
        <div className="md:w-[30%] w-full p-4">
          {showResult && (
            <div>
              <h3 className="text-2xl font-medium">Your Score</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
