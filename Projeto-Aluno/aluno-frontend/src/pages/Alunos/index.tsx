import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import api from "../../services/api";
import moment from "moment";

interface IAlunos{
    id: number;
    name: string;
    age: number;
    ra: string;
    birth: Date;
    adress: string;
    registration: boolean;
}

const Alunos: React.FC = () => {

    const [alunos, setAlunos] = useState<IAlunos[]>([])

    useEffect (() => {
        loadAlunos()
    }, [])

    async function loadAlunos() {
        const response = await api.get("/alunos")
        console.log(response);
        setAlunos(response.data);
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

  return(
      <div className = "container">
        <br />
        <h1> Cadastro dos Alunos </h1>
        <br />
        <Table striped bordered hover variant="dark">
            <thead className="text-center">
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>RA</th>
                <th>Birth</th>
                <th>Adress</th>
                <th>Registration</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                     alunos.map(aluno => (
                        <tr key = {aluno.id}>
                        <td>{aluno.id}</td>
                        <td>{aluno.name}</td>
                        <td>{aluno.age}</td>
                        <td>{aluno.ra}</td>
                        <td>{aluno.birth}</td>
                        <td>{aluno.adress}</td>
                        <td>{aluno.registration ? "Matriculado" : "Pendente"}</td>
                            <td>
                                <Button size = "sm" 
variant ="primary">Editar</Button>{' '}
                                <Button size = "sm" 
variant ="success">Matricular</Button>{' '}
                                <Button size = "sm" 
variant ="warning">Visualizar</Button>{' '}
                                <Button size = "sm" 
variant ="danger">Remover</Button>{' '}
                            </td>
                        </tr>
                     ))
                }
            </tbody>
            </Table>
      </div>
    );
}

export default Alunos;