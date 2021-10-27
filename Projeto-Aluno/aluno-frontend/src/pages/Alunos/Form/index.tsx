import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';

// .

interface IAlunos{
    name: string;
    age: number;
    ra: string;
    adress: string;
    birth: Date;
    registration: boolean;
}

const Alunos: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<{ id: string } > ()

    const [model, setModel] = useState<IAlunos>({
        name: '',
        age: 0o0,
        ra: '',
        adress: '',
        birth: new Date(), 
        registration: false
    });

    useEffect(() => {
        console.log(id)
        if (id != undefined) {
            findAluno(id)
        }
    }, [id])

    function updatedModel (e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id != undefined) {
            const response = await api.put(`/aluno/${id}`, model)
        }
        else{
            const response = await api.post('/aluno', model)
        }
        back()
    }

    function back(){
        history.goBack()
    }

    async function findAluno(id: string) {
        const response = await api.get(`aluno/${id}`)
        console.log(response)
        setModel({
            name: response.data.name,
            age: response.data.age,
            ra: response.data.ra,
            adress: response.data.adress,
            birth: response.data.birth,
            registration: response.data.registration
        })
    }

    return (

        <div className = "container">
            <br />
            <div className = "aluno-header">
                <h1> Nova Matricula </h1>
                <Button className ="voltar" variant="dark" size= "sm" onClick={back}> Voltar </Button>
                </div> 
                <br />
                <div className = "container">
                    <Form onSubmit = {onSubmit}>
                        <Form.Group>
                            <Form.Label> Nome </Form.Label>
                            <Form.Control
                                placeholder = "Digite seu nome"
                                type = "text"
                                name = "name"
                                value = {model.name}
                                onChange={(e: 
ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Idade </Form.Label>
                    <Form.Control
                        placeholder = "Digite sua idade"
                        type="number"
                        name="age"
                        value={model.age}
                        onChange={(e: 
ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>

                <Form.Group>
                            <Form.Label> RA </Form.Label>
                            <Form.Control
                                placeholder = "Digite seu registro acadêmico"
                                type = "text"
                                name = "ra"
                                value={model.ra}
                                onChange={(e: 
ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Endereço </Form.Label>
                                <Form.Control
                                    placeholder = "Digite seu endereço"
                                    type = "text"
                                    name = "adress"
                                    value={model.adress}
                                    onChange={(e: 
ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Aniversário </Form.Label>
                                <Form.Control
                                    type = "date"
                                    name = "birth"
                                    value={model.birth}
                                    onChange={(e: 
ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group> 

                <Button className="submit" variant="dark" type="submit">
                        Salvar
                </Button>

                    </Form>
                </div>
            </div>
        );
}

export default Alunos;