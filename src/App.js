import React from "react";
import "./style.css";
function ListAndKeys(props){
  const names = props.names;
  const print =names.map(el=><li key={el.toString()}>{el}</li>)
  return (
    <>
    <ol>{print}</ol>
    </>
  );
}
export default function App() {
  const names = ["Nagendra","Maruthi","Maruthi's Wife","Nagendra's wife"];
  return (
    <div>
      <ListAndKeys names={names}/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
