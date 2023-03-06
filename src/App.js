import logo from './logo.svg';
import './question.css';
import React from 'react';
import QuestionList from './QuestionList';
import AskQuestionForm from './AskQuestionForm';

function App() {
  return (
    <div className="App">
      <h1>My Question App</h1>
      <SignInForm />
      <QuestionList />
      <AskQuestionForm />
    </div>
  )
}

export default App;
