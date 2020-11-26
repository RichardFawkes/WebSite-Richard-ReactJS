import React, { Component } from 'react'
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import imagem1 from './images/1.jpg';
import imagem2 from './images/2.png';
import imagem3 from './images/3.jpg';
import imagem4 from './images/5.png';


class Coverflows extends Component {

render(){

    return(
  <StyleRoot>
    <Coverflow
      displayQuantityOfSide={3}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
            width: '100%',
          height: '100%'
        },
        '@media (min-width: 900px)': {
            width: '100%',
          height: '300px'
        },
        '@media (min-width: 1000px)': {
            width: '100%',
            height: '100%'
          },
      }}
    >
      <img src={imagem1}  data-action="https://www.grupovitahair.com/"/>
      <img src={imagem2}  data-action="https://www.lojadalata.com"/>
      <img src={imagem3}  data-action="https://hersheys.lojadalata.com"/>
      <img src={imagem4}  data-action="https://jorgefloriani.com.br/topografia/"/>
    </Coverflow>
  </StyleRoot>
    );
    }
}

export default Coverflows;