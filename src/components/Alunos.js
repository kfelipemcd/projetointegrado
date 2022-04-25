import React from "react";
import {Table} from "react-bootstrap";

class Alunos extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            alunos : []
        }
    }

    componentDidMount(){
        fetch("https://Alunos.kfelipe.repl.co")
        .then((res)=>res.json())
        .then((dados) => {
            this.setState({ alunos : dados})
        })
    }

    componentWillUnmount(){

    }

    render(){
        return (
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
                        this.state.alunos.map((Aluno) =>
                            <tr>
                                <td> {aluno.nome } </td>
                                <td> {aluno.email } </td>
                                <td> Atualizar  Excluir </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}

export default Alunos;