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

   

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem
        key={question.id}
        question={question}
        handleDelete={handleDelete}
      />
      })}</ul>
    </section>
  );
}

export default QuestionList;
