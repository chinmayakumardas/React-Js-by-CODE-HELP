
import './App.css';
import Input from './component/Input';
import Form from './component/Form';
import { useState } from 'react';

function App() {
let [inputText,setinputText]=useState("Input text is !")
let [formText,setformText]=useState("New form.....");

console.log(`current value of textState: ${inputText}`);
const eventHandler=(event)=>{
  setformText(event.target.value)
}

const clickhandler=(event)=>{
  console.log(event.target.value)
  setinputText(event.target.value);
}
  return (
    <div className="App bg-purple-600 h-52">
     <Input handaler={clickhandler}/>
     <div >{inputText}</div>
     <Form handaler={eventHandler}></Form>
     <div >{formText}</div>
    </div>
  );
}


export default App;
