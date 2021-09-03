import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// id, nome, ra, data de nascimento, endereço, matriculado (true/false), idade

@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    age: number;
 
    @Column()
    ra: string;
 
    @Column()
    birth: Date;
    
    @Column()
    adress: string;

    @Column({
        default: true
    })
    registration: boolean; // matricula 
 
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
