import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';

interface ITask{
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}

const Tasks: React.FC = () => {

    const [tasks, setTasks] = useState<ITask[]>([])
    const history = useHistory()

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {
        const response = await api.get('/tasks')
        console.log(response);
        setTasks(response.data)
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    function newTask(){
        history.push('/tarefas_cadastro')
    }

    function editTask(id: number) {
        history.push(`/tarefas_cadastro/${id}`)
    }

    return (

        <div className="container">
            <br />
            <div className = "task-header">
            <h1> Página de Tarefas </h1>
            <Button variant = "dark" size="sm" onClick = { newTask }> Nova Tarefa </Button>
            </div>
            <br />
            <Table striped bordered hover variant="dark">
                <thead className="text-center">
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Data de Atualização</th>
                    <th>Status</th>
                    <th>Ações</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {
                        tasks.map(task => (
                            <tr key = {task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{formatDate(task.updated_at)}</td>
                                <td>{task.finished ? "Matriculado" : "Pendente"}</td>

                            <td>
                                <Button size="sm"
variant="primary" onClick={() => editTask(task.id)}> Editar </Button>{' '}
                                <Button size="sm"
variant="success">Finalizar</Button>{' '}
                                <Button size="sm"
variant="warning">Visualizar</Button>{' '}
                                <Button size="sm"
variant="danger">Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Tasks;