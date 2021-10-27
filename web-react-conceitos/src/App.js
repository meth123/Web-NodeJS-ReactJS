import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Joseffe'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    // this.state.nome = 'Joseffe Oliveira'
    this.setState({
      nome: 'Joseffe Oliveira'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
        </center>
      </div>
    );
  }
}
 
export default App;



/*

import './App.css';
import { Component } from 'react';
import { Macgyver } from './Macgyver';

class App extends Component {
  render() {
    return (
      <div>
        <Macgyver/>
        <Mac/>
      </div>
    )
  }
}

export default App;

//Componente por Função
function Mac() {
   let img = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg'

   return (
     <div className="App">
    <img src={img} alt="" width={250} height={180} />
    </div>
   );
 }
 
*/
