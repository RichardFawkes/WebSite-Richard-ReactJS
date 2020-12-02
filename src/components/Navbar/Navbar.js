import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';




class Navbar extends Component {
    state = { clicked:false}

handleClick = () => {
    this.setState({clicked: !this.state.clicked})
}

render() {
    return(
        
        <nav className="NavbarItems">


            <a href="https://api.whatsapp.com/send?phone=5511974415837&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
            <i class="fab fa-whatsapp my-float"></i>
</a>

            <a  href="/home"> <h2 className="navbar-logo">Richard Web Developer</h2></a>
            

            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times'  : 'fas fa-bars'}></i> 
            </div>
            <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                         
                        <a href={item.url} className={item.cName}
                             >
                            {item.title}
                        </a>
                        
                    </li>
                    

                ))}          
            </ul>
        </nav>
        
    )
    
}

}

export default Navbar