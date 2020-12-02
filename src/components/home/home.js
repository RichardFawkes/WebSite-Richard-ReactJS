import React, { Component } from 'react';
import './home.css';
import { Parallax } from 'react-parallax';
import TypeWriter from '../Typewriter/Typewriter';
import Contact from '../contact/contact';
import Coverflow from '../coverflow/Coverflow';




const image1 = "https://www.infiniticreation.co.uk/wp-content/uploads/2014/03/home_sec.jpg";



class Home extends Component {

    render(){
        return(



            
            <div style={{ textAlign: 'center' }}>
            <Parallax bgImage={ image1 } strength={500}>
                <div className="banner">
                <TypeWriter />
<strong className="">Sejam bem vindos a Richard Web Dev, Empresa focada no desenvolvimento de sistemas e design web</strong>
                </div>
            </Parallax>
        <br></br>

<div class="section">

		      <div class="row">
		        <div class="col s12 m4 ">
		          <div class="icon-block card">
		            <h2 class="center brown-text"><i class="fas fa-bolt"></i></h2>
		            <h5 class="center">Desenvolvimento rapido!</h5>

		            <p class="light">Desenvolvemos seu site ou sistema dentro do prazo.</p>
		          </div>
		        </div>

		        <div class="col s12 m4">
		          <div class="icon-block card">
		            <h2 class="center brown-text"><i class="fa fa-users"></i></h2>
		            <h5 class="center">Focamos na experiencia do usuario</h5>

		            <p class="light">Criamos uma estrutura que fornecem mais feedback aos usuários. Além disso, um único sistema responsivo  em todas as plataformas permite uma experiência de usuário mais unificada.</p>
		          </div>
		        </div>

		        <div class="col s12 m4">
		          <div class="icon-block card">
		            <h2 class="center brown-text"><i class="fa fa-cog"></i></h2>
		            <h5 class="center">Facil de trabalhar</h5>

		            <p class="light">Nos criamos seu site da melhor forma para seu publico, do simples moderno, ao mais robusto e complexo site, comprometimento e acessibilidade.</p>
		          </div>
		        </div>
				
		      </div>
			  <h2> <br/>
Clientes | Sistemas e Sites 
<br/></h2><br/>
		    </div>
			<Coverflow />

           


</div>    
           
        )
    }

}


export default Home;