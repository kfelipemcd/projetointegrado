import React from "react";
import {Table} from "react-bootstrap";

export default class ListaAlunos extends React.Component{
    
    state={
        carros:[]
    }

    componentDidMount(){
        //axios.get("https://Alunos.kfelipe.repl.co")
          //  .then(res=>{
            //    const dadosAlunos=res.data
              //  this.setState({alunos:dadosAlunos})
            //})
    }

    render(){
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
                        this.state.alunos.map( aluno => 
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


}
