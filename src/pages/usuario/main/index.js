import React, {Component, useState } from 'react';
import { Route,Link,Switch } from 'react-router-dom';
import './index.css';
import CriarUsuario from '../criar/';


// era conhecido: funcitional state-less component
const Counter = props => {
    const [counter, setCounter] = useState(0)
    return <h1>Counter: {counter} <button onClick={()=> setCounter(counter+1)}>+</button></h1>
}


//component class es6
export default class Main extends Component {
    constructor(props){
        super(props)
        this.state ={
            usuario: [],
            valor : 1
        }

    }

 

    


    componentDidMount(){
        setInterval(()=> {
            this.setState({valor: this.state.valor +1 })
        },1000)
 fetch(`http:///52.67.53.27:3003/sistema/usuarios`)
 .then (usuario =>
    usuario.json().then(usuario => this.setState({usuario}))
    )
    }
    render() {

        
        const {usuario} = this.state;

        return usuario.map((usuario, index) => (

            
            <div className="usuario-list">



                <div key={index}>
                 <h3>Nome:{usuario.nome}</h3>
                 <article>
                 <strong>Salario: {new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(usuario.salario)}</strong>
                 <p class="btn-secondary"><Link to={`/usuario/${usuario.id}`}>Detalhes</Link></p>
                 <main>
                 
<Counter counter={this.state.valor}/>                   
                      </main>

                 <br/>
                 </article>
 

                </div>
            </div>
        ))
        
        }
    
    }