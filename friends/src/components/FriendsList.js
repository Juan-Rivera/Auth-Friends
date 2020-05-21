import React from 'react';
import FriendForm from './FriendForm';
import Friend from './Friend';
import axiosWithAuth from '../utils/axioWithAuth';
class FriendsList extends React.Component{
    constructor(){
        super();
        this.state = {
            friends: []
        }
    }
    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
    }

    render(){
        return(
            <div>
                <FriendForm />
                {this.state.friends.map((friend) => {
                    return (
                       <Friend key={friend.id} friend={friend} />
                    )
                })}
            </div>
        )
    }

}
export default FriendsList;