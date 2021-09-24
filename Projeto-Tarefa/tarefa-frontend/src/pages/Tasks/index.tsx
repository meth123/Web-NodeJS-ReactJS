import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
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

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {
        const response = await api.get('/tasks')
        console.log(response);
        setTasks(response.data)
    }

    function formtDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    return (
        <div className="container">
            <br />
            <h1> Página de Tarefas </h1>
            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Data de Atualização</th>
                    <th>Status</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key = {task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.updated_at}</td>
                            <td>{task.finished ? "Finalizado" : "Pendente"}</td>

                            <td>
                                <Button size="sm"
variant="primary">Editar</Button>{' '}
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