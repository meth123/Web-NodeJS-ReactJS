import React, { useState, useEffect } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../services/api';
import './index.css';
import moment from 'moment';
 
interface IAlunos{
    id: number;
    name: string;
    age: number;
    ra: string;
    birth: Date;
    adress: string;
    registration: boolean;
}

const Detail: React.FC = () => {
 
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const [alunos, setAlunos] = useState<IAlunos>()

    function back(){
        history.goBack()
    }

    async function findAluno(){
        const response = await api.get<IAlunos>(`/aluno/${id}`)
        console.log(response)
        setAlunos(response.data)
    }
     // Quando o param "id" mudar/receber um novo valor, o useEffect será executado chamando o findAluno
    useEffect(() => {
        findAluno()
    }, [id])

    return (
        <div className="container">
            <br />
            <div className="aluno-header">
                <h1>Detalhes do Aluno</h1>
                <Button className="voltar" variant="dark" size="sm" 
onClick={back}>Voltar</Button>
            </div>
            <br />


            <Card className="bg-dark text-white" border="warning" style={{width: '35rem'}}>
                 <Card.Header>
                    <Nav variant="tabs" style={{marginLeft: '6rem'}}>
                    <Nav.Item style={{paddingRight: '1rem'}}>
                        <Nav.Link href="https://github.com/meth123" target="_blank">GitHub</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{paddingRight: '2rem'}}>
                        <Nav.Link href="https://www.linkedin.com/in/mateus-teixeira-bb34601ba/" target="_blank">Linkedin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{paddingRight: '2rem'}}>
                        <Nav.Link href="#disabled">
                        Facebook
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
    </Card.Header>
                <Card.Body className="card-body"> 
                    <Card.Title style={{ fontSize: '28px', marginBottom: '15px'}}>{alunos?.name}</Card.Title>
                    
                    <Card.Text>
                    {alunos?.age}
                    <br/>
                    {alunos?.ra}
                    <br />
                    {alunos?.registration ? "Matriculado" : "Pendente"}
                    <br />
                    {alunos?.adress}
                    <br />
                    <strong> Data de Nascimento: </strong>
                    {moment(alunos?.birth).format('MM/DD/YYYY')}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}
 
export default Detail;
