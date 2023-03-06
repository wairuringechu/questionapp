import React, { useState } from 'react';
import Question from './components/Question';
import QuestionForm from './components/QuestionForm';

function App() {
  const [questions, setQuestions] = useState([]);

<div id="conatiner">
    <form>
        <input type="question" value="add a question"/>
        <input type="submit" value="submitquestion"/>
        <button type="delete">deletequestion</button>
        <button type="edit">editquestion</button>
    </form>
</div>

  // Function to add a new question
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  // Function to edit a question
  const editQuestion = (id, updatedQuestion) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, text: updatedQuestion } : question
    );
    setQuestions(updatedQuestions);
  };

  // Function to delete a question
  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  // Function to answer a question
  const answerQuestion = (id, answer) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, answer: answer } : question
    );
    setQuestions(updatedQuestions);
  };

}

export default App;
