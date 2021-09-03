import { Router, request, response, Request, Response} from 'express'

import { getAlunos, saveAluno, getAluno, updateAluno, deleteAluno, registrationAluno } from './controller/AlunosController';

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma! 007' })
})

routes.get('/alunos', getAlunos)
routes.post('/aluno', saveAluno)
routes.get('/aluno/:id', getAluno)
routes.put('/aluno/:id', updateAluno)
routes.delete('/aluno/:id', deleteAluno)
routes.patch('/aluno/:id', registrationAluno)

export default routes