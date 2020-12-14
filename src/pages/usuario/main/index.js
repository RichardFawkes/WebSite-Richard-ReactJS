import React, { Component } from 'react';
import api from '../../../components/services/api';
import './index.css';
import {Link} from 'react-router-dom';

export default class Main extends Component{

    state = {
        products:[],
        productInfo: {},
        page: 1,
    }


    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo} = response.data;

    this.setState({products: docs, productInfo, page })
    };

    nextPage = () => {
        const { page, productInfo } = this.state
 
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
      

    }
    prevPage = () => {
        const { page, productInfo } = this.state

        if(page === 1) return;

        const pageNumber = page - 1;
        
        this.loadProducts(pageNumber)


    }



 render() {

    const { products,page,productInfo } = this.state;
    //  return <h1>Contagem de Produto: {this.state.products.length}  </h1>
    return (
        <div className="products-list">
            {products.map(products =>(
                <article key={products._id}>
                    <strong>{products.title}</strong>
                    <p>{products.description}</p>

                    <Link to={`/product/${products._id}`}>Acessar</Link>
                </article>
            ))}
        <div className="actions">
            <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
            <button  disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>

        </div>
        </div>
    );
 }
}