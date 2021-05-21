import React, { Component } from 'react';
import './home.css';
import { Parallax } from 'react-parallax';
import TypeWriter from '../Typewriter/Typewriter';
import Contact from '../contact/contact';
import Coverflow from '../coverflow/Coverflow';




// const image1 = "https://www.infiniticreation.co.uk/wp-content/uploads/2014/03/home_sec.jpg";



class Home extends Component {

    render(){
        return(



            
            <div style={{ textAlign: 'center', background: 'linear-gradient(90deg,rgb(0,0,0) 0%, rgb(15,19,37,100%)100%' }}>
            
			<Parallax  >
				<div className="container">
				<div class="typewriter"><TypeWriter /></div>
				{/* <img style={{  width:'100px' }}src="https://www.pedrodev.com/client/a29f85976f1aaea3.png"></img> */}

				</div>
                <div className="banner">
                
<strong className=""></strong>
                </div>
            </Parallax>
        <br></br>

<div class="section ">
<div className="container">
		      <div class="row">
		        <div class="col-lg-4  ">
					
		          <div class="icon-block ">
				  <br></br>
				  <br></br>
				  

		            <h2 class=" center brown-text"><i class="fas fa-bolt"></i></h2>
		            <h5 class="center">Desenvolvimento rapido!</h5>

		            <p class="light">Desenvolvemos seu site ou sistema dentro do prazo.
					Otimizado Para SEO. Conteúdo Gerenciável.</p>
		          </div>
		        </div>

		        <div class="col-lg-4 s3  ">
		          <div class="icon-block  ">
		            <h2 class="center "><i class="fa fa-users"></i>
					 <h5 class="center  ">Focamos na experiencia do usuario</h5>

					</h2>

		            <p class="light">Criamos uma estrutura que fornecem mais feedback aos usuários. Além disso, um único sistema responsivo  em todas as plataformas permite uma experiência de usuário mais unificada.</p>
		          </div>
		        </div>

		        <div class="col-lg-4 s3  ">
		          <div class="icon-block  ">
				  <br></br>
		            <h2 class="center brown-text"><i class="fa fa-cog"></i></h2>
		            <h5 class="center">Facil de trabalhar</h5>

		            <p class="light">Nos criamos seu site da melhor forma para seu publico, do simples moderno, ao mais robusto e complexo site, comprometimento e acessibilidade.</p>
		          </div>
		        </div>
				
		      </div>


			  </div>
		
			  <h4 class="cliente"> <br/>
			  Portfólio de Sites
<br/></h4><br/>
		    </div>
			<Coverflow />

           


</div>    
           
        )
    }

}


export default Home;