import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [questions, setQuestions]= useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(resp => setQuestions(resp))
  }, [])

  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "delete"})
      .then(resp => resp.json())
      .then(resp => setQuestions(questions.filter((question) => question.id !== id)))
    }

    const handleAnswers=(id,correctIndex)=>{
      fetch(`http://localhost:4000/questions/${id}`,{
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({correctIndex}),
      }).then(resp=>resp.json())
      .then(resp=>{ setQuestions(questions.map(question=>{
      if(question.id===resp.id){
        return resp
      }return question
    }
    )
    )
      })
    }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem
        key={question.id}
        question={question}
        handleDelete={handleDelete}
        onAnswer={handleAnswers}
      />
      })}</ul>
    </section>
  );
}

export default QuestionList;
