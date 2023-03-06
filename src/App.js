import logo from './logo.svg';
import './question.';
import React from 'react';
import QuestionList from './QuestionList';
import AskQuestion from './AskQuestion';

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
