import { getRepository } from "typeorm";
import { Alunos } from '../entity/Alunos';
import { Request, Response } from "express";

// Consultar Alunos
export const getAlunos = async(request: Request, response: Response) => {
    const alunos = await getRepository(Alunos).find()
    return response.json(alunos); 
};

// Inserir Aluno
export const saveAluno = async(request: Request, response: Response) => {
    const aluno = await getRepository(Alunos).save(request.body)
    return response.json(aluno); 
};

// Consultar apenas um aluno
export const getAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).findOne(id)
    return response.json(aluno);
};

// Atualizar aluno
export const updateAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, request.body)

    if (aluno.affected == 1) {
        const alunoUpdated = await getRepository(Alunos).findOne(id)
        return response.json(alunoUpdated);
    } 
    else{
        return response.status(404).json ( {message: 'Aluno não encontrado! D:'} )
    }
};

// Deletar o coitado do aluno
export const deleteAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).delete(id)

    if (aluno.affected == 1) {
        return response.status(200).json( {message: 'Aluno excluído com sucesso! :D'}) ;
    } 
    else{
        return response.status(404).json ( {message: 'Aluno não encontrado! D:'} )
    }
};

// Matricula do aluno --> no caso eu coloquei para cancelar a matricula dele.
export const registrationAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, {
        registration: false,
    })

    if (aluno.affected == 1) {
        const alunoRegistration = await getRepository(Alunos).findOne(id)
        return response.json(alunoRegistration);
    } 
    else{
        return response.status(404).json ( {message: 'Aluno não encontrado! D:'} )
    }
};






