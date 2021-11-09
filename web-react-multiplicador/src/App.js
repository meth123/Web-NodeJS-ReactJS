import React, { Component } from 'react';
import './App.css';
import './multiplicador.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOne: 0,
      numberTwo: 0,
      finalResult: 0
    };
 
    this.resultado = this.resultado.bind(this);
  }

  resultado = () => {
    this.setState({
      numberOne: document.getElementById('one').value,
      numberTwo: document.getElementById('two').value,
    })
    this.setState({finalResult: this.state.numberOne * this.state.numberTwo})
  }

  render(){
    return(
      <div>
        <center>
          <h1>Multiplicador</h1>
          <h4>Digite dois números</h4>
          <input id = "one" class = "number" type = "number" placeholder = "Digite um número" />
          <input id = "two" class = "number"type = "number" placeholder = "Digite um número" />
          <button onClick={this.resultado} id = "result">Resultado</button>
          <h1>{this.state.finalResult}</h1>
        </center>
      </div>
    );
  }
}
 
export default App;