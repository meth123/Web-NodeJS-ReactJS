import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterVal: 0,
    };

    this.adicionar = this.adicionar.bind(this);
    this.retirar = this.retirar.bind(this);
    this.retirar = this.resetar.bind(this);
  }

  adicionar() {
    this.setState({ counterVal: this.state.counterVal + 1 });
  }

  retirar() {
    this.setState({ counterVal: this.state.counterVal - 1 });
  }

  resetar() {
    this.setState({ counterVal: (this.state.counterVal = 0) });
  }

  render() {
    return (
      <>
        <div>
          <center>
            <h1> Contador de Pessoas </h1>
            <div>
              <h2>{this.state.counterVal}</h2>
            </div>
            <button onClick={this.adicionar}>+</button>
          </center>
        </div>
        <div>
          <center>
            <button onClick={this.retirar}>-</button>
          </center>
        </div>
      </>
    );
  }
}

export default App;
