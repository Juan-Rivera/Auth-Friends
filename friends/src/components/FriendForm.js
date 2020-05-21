import React from 'react';
import axiosWithAuth from '../utils/axioWithAuth';

class FriendForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault();
        const newFriend = {
            id: Date.now(),
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res);
            })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addFriend}>
                    <label>
                        Name:
                        <input
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChanges}
                        />
                    </label>
                    <button>Add Friend!</button>
                </form>
            </div>
        )
    }
}
export default FriendForm