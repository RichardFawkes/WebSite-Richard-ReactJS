import React from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

import MainUsuario from './pages/usuario/main';
import DetalhesUsuario from './pages/usuario/detalhes';
import CriarUsuario from './pages/usuario/criar';
import EditarUsuario from './pages/usuario/editar';
import DeletarUsuario from './pages/usuario/deletar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/usuario/main'
import Products from './pages/usuario/products';
import Php from '../src/pages/usuario/php/index'

const Routes = () =>(

    <BrowserRouter> 
    <Switch>
    <Route exact path = "/" component={Home} />

    <Route exact path = "/php" component={Php} />
    <Route exact path = "/main" component={Main} />

    
    <Route exact path = "/product/:id" component={Products} />


        <Route path = "/contact" component={Contact} />
        <Route path = "/home" component={Home} />

         <Route exact path = "/usuarios" component={MainUsuario} />
         <Route  path = "/usuario/:id" component={DetalhesUsuario} />
         <Route path = "/criarUsuario/" component={CriarUsuario} />
         <Route path = "/editarUsuario/:id" component={EditarUsuario} />
         <Route path = "/deletarUsuario/:id" component={DeletarUsuario} />



    </Switch>
    </BrowserRouter>


)

export default Routes;
