import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './header.css';
import { faPlus,faList,faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => (
    <header id="main-header"><FontAwesomeIcon icon={faEye} />Sistema React Crud 1.0 &nbsp;
    
    <a href="/usuarios" type="button" class="btn btn-success"> <FontAwesomeIcon icon={faList} /> LISTA USUARIOS</a>
    <a href="/criarUsuario" type="button" class="btn btn-primary">    <FontAwesomeIcon icon={faPlus} /> CRIAR USUARIO</a>

   
    </header>


);


const route = (
    <Switch>
    <BrowserRouter>
    <div>
        <Route path="/usuarios" component={Header} exact={true}/>
    </div>
    </BrowserRouter>
    </Switch>
)


export default Header;
    