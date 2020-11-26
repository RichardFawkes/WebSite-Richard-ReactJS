import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';



export default class Usuario extends Component {

    state = {
        usuario: {}
    };

    componentDidMount()    {
        const {id} = this.props.match.params

        fetch(`http:///52.67.53.27:3003/sistema/usuarios/${id}`)
        .then(usuario => 
            usuario.json().then(usuario => this.setState({usuario})))
    }

    render(){
        const {usuario} = this.state;

      if(usuario.ativo){
          usuario.ativo = "Usuario Ativo"
      }else{
        usuario.ativo = "Usuario Invativo"

      }


        return (
            <div className="usuario-info">
                <article>
                <h1>{usuario.nome}</h1>
                <h1>{usuario.ativo}</h1>
                <h1>{new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(usuario.salario)}</h1>
                <h1>{moment(usuario.dataNascimento).format('DD/MM/YYYY')}</h1>
                <br />
                </article>
             <Link to={`/usuarios`} >  <button class="btn btn-primary">Voltar </button></Link>
             <Link to={`/editarUsuario/${usuario.id}`}><button class="btn btn-success">Editar </button></Link>
             <Link to={`/deletarUsuario/${usuario.id}`}><button class="btn btn-danger">Deletar </button></Link>


                
                 </div>
        )
    }
} 