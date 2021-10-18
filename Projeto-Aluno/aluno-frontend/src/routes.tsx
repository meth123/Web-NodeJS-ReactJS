import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Alunos from "./pages/Alunos";
import AlunosForm from './pages/Alunos/Form';
import AlunosDetail from './pages/Alunos/Detail';

const Routes: React.FC = () => {

    return(
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/alunos" exact component = {Alunos} />
            <Route path = "/alunos_cadastro" exact component = {AlunosForm} />
            <Route path = "/alunos_cadastro/:id" exact component = {AlunosForm} />
            <Route path = "/alunos/:id" exact component = {AlunosDetail} />

        </Switch>
    );
}

export default Routes;