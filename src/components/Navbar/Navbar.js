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


            <a href="https://api.whatsapp.com/send?phone=5511974415837&text=Opa!%20acabei%20de%20visitar%20seu%20site%20,%20Pode%20me%20ajudar?" className="float" target="_blank">
            <i className="fab fa-whatsapp my-float"></i>
</a>

            <a  href="/home"> <h2 className="navbar-logo">R</h2></a>
            

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