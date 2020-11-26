import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './index.css';

class EditarUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            usuario: {
            salario: "",
            dataNascimento: ""
        },
        redirect: false
    }

    }
    componentDidMount(){
        const { id } = this.props.match.params;

        fetch(`http:///52.67.53.27:3003/sistema/usuarios/${id}`)
        .then(data => {
            data.json().then(data =>{
                this.setState({ usuario: data});
            })
        })
    }


    render(){
        const { redirect } = this.state;
 
        if(redirect){
            return <Redirect to="/usuarios"/>; 
        }else {
            return (
 
             <form onSubmit = {this.handleSubmit}>
                <fieldset>
                    <legend>Editar Usuario</legend>
                    <div className="usuario-update">
                        <label htmlFor="nome">Nome</label>
                        <br />
                        <input 
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        minLength="3"
                        maxLength="20"
                        required
                        value={this.state.usuario.nome}
                        onChange={this.handleInputChange}
                        />
                      
 
 
                    </div>
                    <div className="usuario-update">
                        <label htmlFor="salario">Salario</label>
                        <br />
                        <input 
                        type="text"
                        id="salario"
                        name="salario"
                        placeholder="Digite seu Salario"
                        min="1"
                        mix="999999"
                        required
                        value={this.state.usuario.salario}
                        onChange={this.handleInputChange}
                        />
                      
 
 
                    </div>
 
                    <div className="usuario-update">
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <br />
                        <input 
                        type="text"
                        id="dataNascimento"
                        name="dataNascimento"
                        placeholder="Digite sua Data Nascimento"
                        required
                        value={this.state.usuario.dataNascimento}
                        onChange={this.handleInputChange}
                        />
                      
 
 
                    </div>
 
           
                    <button class="btn btn-success" type="submit">Atualizar</button>
 
 
                </fieldset>
             </form> 
            );
        }
    }
 
    

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
 
        this.setState(prevState => ({
            usuario: {...prevState.usuario, [name]: value}
        }));
    }
 
 
    handleSubmit = event => {
        const {id} = this.state.usuario;
        fetch(`http://localhost:3003/sistema/usuarios/${id}`, {
            method:"put",
            body: JSON.stringify(this.state.usuario),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => {
            if(data.ok){
               this.setState ({ redirect: true }) 
            }
        })
        
        event.preventDefault();
    };
 }
 
 export default EditarUsuario ;

