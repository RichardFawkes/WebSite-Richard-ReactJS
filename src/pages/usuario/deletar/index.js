import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './index.css';


class DeletarUsuario extends Component {
    constructor(props){
        super(props);
         
        this.state = {
            usuario : {},
            redirect : false

        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
        .then(data => {
            data.json().then(data =>{
                this.setState({ usuario: data});
            })
        })
    }

    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to="/usuarios"/>
        } else {
            return (

                <fieldset>
                    <legend>Deletar Usuario</legend>
                    <div className="usuario-delete">
                        <label htmlFor="nome">{this.state.usuario.nome}</label>
                        <p>Tem certeza que deseja deletar esse registro?</p>


                        <button onClick={this.handleClick} type="submit" class="btn btn-danger">Remover</button>

                        <br/> <br/>

                   <Link to={`/usuarios`}>   <button class="btn btn-primary">  Voltar </button></Link> 
                         </div>

                </fieldset>
            );
        }
    }

    handleClick = event => {
        const {id} = this.props.match.params;

        fetch(`http:///52.67.53.27:3003/sistema/usuarios/${id}`, {
            method:"delete"
           
        })
        .then(data => {
            if(data.ok){
               this.setState ({ redirect: true }) 
            }
        })
        
        event.preventDefault();
    };
 }
 
 export default DeletarUsuario ;
