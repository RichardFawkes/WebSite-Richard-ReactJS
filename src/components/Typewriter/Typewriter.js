import React, { Component } from 'react';
import './Typewriter.css';

class TypeWriter extends React.Component {
    render() {
      return(
        <React.Fragment>
          <SuperTitle />
          <TypewriterTitle
            
            title='Hello,
            I’m Richard Ferreira!
            '
            
          />
        </React.Fragment>
      );
    }
  }
  
  function SuperTitle(props) {
    return(
      <div className='super-title'>
        <h3>
          {props.content}
        </h3>
      </div>
    );
  }
  
  class TypewriterTitle extends React.Component {
    constructor() {
      super();
      this.state = {
        typePosition: 0,
      }
      this.typespeed = 100;
      this.__incrementTypePosition = this.__incrementTypePosition.bind(this);
      this.typeAnimation = this.typeAnimation.bind(this);
    }
    
    __incrementTypePosition() {
      this.setState({
        typePosition: this.state.typePosition + 1,
      });
    }
    
    typeAnimation() {
      if(this.state.typePosition < this.props.title.length) {
        this.__incrementTypePosition();
        this.typespeed = Math.floor((Math.random() * 100) + 100);
        setTimeout(this.typeAnimation, this.typespeed);
      }
    }
    
    componentDidMount() {
      this.typeAnimation();
    }
    
    render() {
      return(
        <div className='typewriter-title'>
          <h2>
            {this.props.caption}
          </h2>
          <h1 className='typewriter'>
            {this.props.title.slice(0, this.state.typePosition)}
          </h1>
        </div>
      );
    }
  }

  export default TypeWriter;
  
  