import React, { useState, Component } from 'react'
import logo from './logo.svg';
import './App.css';

//hooks allow us to create state inside function component
const App = () => {
  // [state's name, function to change state]
  const [number, setNumber] = useState(0) //number
  const [text, setText] = useState("") //string
  const [arr, setAarr] = useState([ //array
    {
      id: 1,
      title: "this is title"
    }
  ])
  const [obj, setObj] = useState({ //object
    name: "satrio kamaludin"
  })

  const add = () => {
    setNumber(number + 1)
  }

  const minus = () => {
    setNumber(number - 1)
  }
  return (
    <div>
      {number}
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

//if using class component, which more complex compared using function component that uses hooks
// class App extends Component {
//   state = {
//     number = 0
//   }

//   add = () => {
//     setState({
//       number: number + 1
//     })
//   }

//   minus = () => {
//     setState({
//       number: number - 1
//     })
//   }

//   render(){
//     return(
//       <div>
//         {this.state.number}
//         <button onClick={this.add}></button>
//         <button onClick={this.minus}></button>
//       </div>
//     )
//   }
// }

export default App;
