import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Alunos from "./pages/Alunos";

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/alunos" exact component = {Alunos} />
        </Switch>
    )
}

export default Routes;