import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,prathamCounter]=useState(15)//any value can be inserted and it give 2 thing in format of array which is 
  // counter which is variable and function which is usually called set counter is use to update the variable

  //let counter=15
  const addvalue=()=>{
    if(counter<20){
      // counter=counter+1;
      prathamCounter(counter+1)
      console.log("Clicked",counter)
    }else{
      alert("counter cant be greater than 20")
    }
  }

  const removeValue=()=>{
    if (counter<=0) {
      alert("counter cant be less than 0")
    }else{
      prathamCounter(counter -1)
    }
    
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addvalue}>Add value {counter}</button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     <p>footer :{counter}</p>
    </>
  )
}

export default App
