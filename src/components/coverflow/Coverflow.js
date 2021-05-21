import React, { Component } from 'react'
import { StyleRoot } from 'radium';
import imagem1 from './images/1.png';
import imagem2 from './images/2.png';
import imagem3 from './images/3.png';
import imagem4 from './images/4.png';
import imagem5 from './images/6.png';
import './Coverflow.css'


class Coverflows extends Component {

render(){

    return(
<div className="container">
  <hr />
<div className="row">
      <a href=""><img className="client img-fluid" src={imagem1} /></a>
      <a href=""><img className="client img-fluid" src={imagem2}  /></a>
       <a href=""><img className="client img-fluid" src={imagem3}  /></a>
       <a href=""><img className="client img-fluid" src={imagem4}  /></a>
       <a href=""><img className="client img-fluid" src={imagem5} /></a>

       <a href=""><img className="client img-fluid" src={imagem5} /></a>

       </div>
 </div>
 
    )
}
}
export default Coverflows;