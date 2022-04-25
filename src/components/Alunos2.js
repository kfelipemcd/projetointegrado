import React,{useState,useEffect} from "react";
import {Table} from "react-bootstrap";

export default function Alunos2(){
    
    const [alunos,setAlunos]=useState([])

    useEffect(()=>{
        fetch("https://Alunos.kfelipe.repl.co")
        .then(res=>res.json())
        .then(
            (resultado)=>{
                setAlunos(resultado)
            }
        )

    })
    
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map( alunos => 
                            <tr>
                                <td key={aluno.id} > {aluno.nome } </td>
                                <td key={aluno.id} > {aluno.email } </td>
                                <td> Atualizar  Excluir </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )


}