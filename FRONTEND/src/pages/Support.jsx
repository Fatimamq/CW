import React,{ useState } from "react";

function Support() {
  // State to store questions and answers
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  // State to store the current question and answer being input
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');

  // Function to handle submission of a new question
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (currentQuestion.trim() !== '') {
      setQuestions([...questions, currentQuestion]);
      setCurrentQuestion('');
    }
  };

  // Function to handle submission of a new answer
  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (currentAnswer.trim() !== '') {
      setAnswers([...answers, currentAnswer]);
      setCurrentAnswer('');
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      
      <div className="flex-grow flex justify-between">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow mb-6 w-1/3  ml-14 mt-20 h-1/2 ">
          <h2 className="text-4xl font-bold mb-4 mr-4  text-green-700">Contact Us</h2>
          <div className="mb-2">
            <p className="text-gray-700 font-semibold">Phone:</p>
            <p className="text-gray-600">0194-45454</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-600">support@clearwaste.com</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700 font-semibold">Address:</p>
            <p className="text-gray-600">190012 Srinagar, Kashmir, CW 8895</p>
          </div>
        </div>

        {/* Question Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-6 w-1/3 h-1/3  mt-40 ml-4">
          <h2 className="text-4xl font-semibold mb-4 mr-10 text-green-700">Any Query?</h2>
          <form onSubmit={handleSubmitQuestion}>
            <textarea
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
              placeholder="Type your question here..."
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit 
            </button>
          </form>
        </div>

        {/* Answer Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-6 w-1/3 h-1/3  mt-40 ml-4">
          <h2 className="text-4xl font-semibold mb-4 text-green-700">Your Feedback</h2>
          <form onSubmit={handleSubmitAnswer}>
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-2 mr-8"
              placeholder="Type your answer here..."
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit 
            </button>
          </form>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-6xl h-1/3 mx-auto bg-white p-1 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">FAQs</h2>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-bold mb-8">Question {index + 1}?</h3>
            <p className="text-gray-600">{question}</p>
            {answers[index] && (
              <>
                <h3 className="text-lg font-semibold mt-2 mb-1">Feedback:</h3>
                <p className="text-gray-600">{answers[index]}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Support;