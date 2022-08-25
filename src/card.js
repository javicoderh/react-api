import React from "react";
import { useEffect, useState} from "react";


function Card(props) {

const [name, updateName] = useState (props.name)

useEffect (() => {
console.log(name)
})

function changeName () {
  updateName (name.toLowerCase())
}

return (
<div className="card" onClick={changeName}>
  <div className="style">
  <img
  src={props.background}
  alt={props.name}
  />   
  <img 
  src={props.icon}
  alt={props.name}
  />    
  <h3>{props.name}</h3>
  <h3>Total Quizzes: {props.totalQuizzes}</h3>
  <h3>Users: {props.users}</h3>
  </div>
</div> 
);
}

export default Card