import './App.css';
import { Component, } from 'react';
import { Mensagem } from './Mensagem';

class App extends Component {
constructor(props){
  super(props);
  this.state ={
    nome:"Mateus"
  };
  this.entrar = this.entrar.bind(this);
}

entrar(){
  this.setState({
    nome:"Mateus Teixeira"
  })
}

  render() {
    return (
      <div>
        <Mensagem/>
       <center>
         <h1>{this.state.nome}</h1>
         <button onClick={this.entrar}>Entrar</button>
       </center>
       <br/>
       <Mac largura={400} altura={250}/>
       <James largura={400} altura={300} />
      </div>
    )
  }
}

export default App;

//Componente por Função
function Mac(props) {
  let img = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg'

  return (
    <div className="App">
      <img src={img} alt="" width={props.largura}/>
    </div>
  );
}

//Componente por Classe
class James extends Component {
  render(){
    let img = 'https://s2.glbimg.com/syKrJXB3qF3v-qrmuI1UMsqBpjM=/620x620/e.glbimg.com/og/ed/f/original/2016/02/16/skyfall-spoilers-have-hit-the-web.jpg'

  return (
    <div className="App">
      <img src={img} alt="" width={this.props.largura} height={this.props.altura}/>
    </div>
  );
  }
}
