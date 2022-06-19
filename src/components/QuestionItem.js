import React from "react";

function QuestionItem({ question, handleDelete, onAnswer}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClickDelete(){
   handleDelete(id)
  }
  
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
        defaultValue={correctIndex} 
        onChange={e=>onAnswer(id,e.target.value)}
        >{options}</select>
      </label>
      <button onClick={handleClickDelete}>Delete Question</button>
    </li>
  );
  }

export default QuestionItem;
