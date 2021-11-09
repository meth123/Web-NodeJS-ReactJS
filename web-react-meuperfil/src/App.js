import React, { Component } from "react";
import "./App.css";
import "./Mateus.css";

class App extends Component {
  render() {
    let img =
      "https://avatars.githubusercontent.com/u/62814567?v=4";

    return (
      <div>
        <center>
          <h1>App Meu Perfil</h1>
          <img src={img} width={250} height={250} />
          <h3 class="subtitles">Dados Pessoais:</h3>
          <p class="text">Mateus Teixeira Dos Santos- 19 anos - Brasileiro</p>
          <h3 class="subtitles">Formação:</h3>
          <p class="text">Ciência da Computação - UNIP - 2020/Presente</p>
          <h3 class="subtitles">Experiência:</h3>
          <p class="text">Em busca de estágio.</p>
          <h3 class="subtitles">Projetos:</h3>
          <p class="text">
         CRUD de Alunos - Algoritmos Complexos
          </p>
        </center>
      </div>
    );
  }
}

export default App;
