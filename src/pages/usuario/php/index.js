import React from 'react';
import api from '../../../components/services2/api';
import './index.css';



export default class Users extends React.Component {
    state = {
        users:[]
        
        
    }


    async componentDidMount(){
        const response = await api.get(`/b043df5a/`);

        this.setState({users: response.data});
    }


    
    render(){
        const { users } = this.state

        return(
        <ul>
        { users.map(users => <li>{users.name}</li>)}
      </ul>
        )
    }
}