import React, { useState, useEffect } from "react";

//initiaizing the state variable using useState hook
function App() {
    const [user, setUser] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [editQuestion, setEditQuestion] = useState(null);
    const [editQuestionText, setEditQuestionText] = useState("");
    const [answerQuestion, setAnswerQuestion] = useState(null);
    const [answerText, setAnswerText] = useState("");
    
    <div id="container">
        <form>
            <input type="text" value="questionarea"/>
            <button type="submit">submitquestion</button>
            <button type="delete">deletequestion</button>
            <button type="edit">editQuestion</button>
        </form>
    </div>
     //  Check if user is authenticated 
    // useEffect checks if a data exists in local storage,and i it does,it sends a request to 'api/User'
    // response is converted to json using the json()method and setUser function is called to update the 
    // user stte variable with the response data
    useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
        //use of promises and response
    fetch("/api/user", { headers: { Authorization: Bearer ,$:{data} } })
    .then((response) => {
    if (response.ok) {
    return response.json();
    }
    throw new Error("Network response not ok.");
    })
    .then((data) => {
    setUser(data);
    })
    .catch((error) => {
    console.error(error);
    });
    }
});
 
// Fetch questions 
    useEffect(() => {
    fetch("/api/questions")
    .then((response) => {
    if (response.ok) {
    return response.json();
    }
    throw new Error("Network error.");
    })
    .then((data) => {
    setQuestions(data);
    })
    .catch((error) => {
    console.error(error);
    });
    }, []);
   
    // Handle ask question
    const handleAskQuestion = async (event) => {
    event.preventDefault();
    try {
    const response = await fetch("/api/questions", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Authorization: Bearer ,$:{localStorage:getItem("data")},
    },
    body: JSON.stringify({
    text: newQuestion,
    }),
    });
    if (response.ok) {
    const data = await response.json();
    setQuestions((prevQuestions) => [...prevQuestions, data]);
    setNewQuestion("");
    } else {
    throw new Error("Network error.");
    }
    } 
    .catch((error) => {
        console.error(error);
        })
        }, []);
    
    // Handle edit question
    const handleEditQuestion = async (event) => {
    event.preventDefault();
    try {
    const response = await fetch(/api/questions/$,{editQuestion:id}, {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    Authorization: Bearer ,$:{localStorage:getItem("Network error.")},
    },
    body: JSON.stringify({
    text: editQuestionText,
    }),
    });
    if (response.ok) {
        const data = await response.json();
    setQuestions((prevQuestions) => {
    const index = prevQuestions.findIndex((question) => question.id === data.id)
    }
    )}}
}}
       
        
        
        
        
        