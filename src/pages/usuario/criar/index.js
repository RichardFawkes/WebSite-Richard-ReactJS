import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';

class CriarUsuario extends Component {
   constructor(props){
   super(props);

   this.state = {
       usuario: {
           nome: "",
           salario: "",
           dataNascimento: "",
           ativo: "true"
       },
       redirect : false
   }

   }
   
   render(){
       const { redirect } = this.state;

       if(redirect){
           return <Redirect to="/usuarios"/>; 
       }else {
           return (

            <form onSubmit = {this.handleSubmit}>
               <fieldset>
                   <div className="usuario-insert">
                   <legend>Criar Usuario</legend>

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
                   <div className="usuario-insert">
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

                   <div className="usuario-insert">
                       <label htmlFor="dataNascimento">Data de Nascimento</label>
                       <br />
                       <input 
                       type="date"
                       id="dataNascimento"
                       name="dataNascimento"
                       placeholder="Digite sua Data Nascimento"
                       required
                       value={this.state.usuario.dataNascimento}
                       onChange={this.handleInputChange}
                       />
                     


                   </div>

                   <div className="usuario-insert">
                       <label>
                           <input 
                           type="radio"
                           name="ativo"
                           value="true"
                           checked={this.state.usuario.ativo === "true"}
                           onChange={this.handleInputChange}

                           />
                           Ativo
                       </label>

                       <label>
                           <input 
                           type="radio"
                           name="ativo"
                           value="false"
                           checked={this.state.usuario.ativo === "false"}
                           onChange={this.handleInputChange}

                           />
                           Inativo
                       </label>

                     <br></br>
                       <button class=" col-lg-12 btn btn-success large" type="submit">Cadastrar</button>
<br></br>
<br></br>
                   </div>


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
       fetch("http:///52.67.53.27:3003/sistema/usuarios", {
           method:"post",
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

export default CriarUsuario ;