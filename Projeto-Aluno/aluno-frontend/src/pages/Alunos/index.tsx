import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import api from "../../services/api";
import moment from "moment";
import './index.css';

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
    const history = useHistory()

    useEffect (() => {
        loadAlunos()
    }, [])

    async function loadAlunos() {
        const response = await api.get('/alunos')
        console.log(response);
        setAlunos(response.data);
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    function newAluno() {
        history.push('/alunos_cadastro')
    }

    function editAluno(id: number) {
        history.push(`/alunos_cadastro/${id}`)
    }

    function viewAluno(id: number) {
        history.push(`/alunos/${id}`)
    }

    async function registrationAluno(id: number) {
        await api.patch(`/aluno/${id}`)
        loadAlunos()
    }

    async function deleteAluno(id: number) {
        await api.delete(`/aluno/${id}`)
        loadAlunos()
    }

  return(
      
      <div className = "container">
        <br />
        <div className = "aluno-header">
        <h1> Cadastro dos Alunos </h1>
        <Button id="button" variant = "dark" size = "sm" onClick = {newAluno} > Nova Matricula </Button>
        </div>
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
                            <td>{formatDate(aluno.birth)}</td>
                            <td>{aluno.adress}</td>
                            <td>{aluno.registration ? "Matriculado" : "Pendente"}</td>
                            <td>
                                <Button size = "sm"
disabled={aluno.registration} variant ="primary" onClick={() => 
editAluno(aluno.id)}> Editar </Button>{' '}
                                <Button size = "sm" 
disabled={aluno.registration} variant ="success" onClick={() => 
registrationAluno(aluno.id)}>Matricular</Button>{' '}
                                <Button size = "sm" variant ="warning" 
onClick={() => viewAluno(aluno.id)}>Visualizar</Button>{' '}
                                <Button size = "sm" variant ="danger" 
onClick={() => deleteAluno(aluno.id)}>Remover</Button>{' '}
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