import React from 'react';
import axiosWithAuth from '../utils/axioWithAuth';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
            }
        }
    }
    

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

      login = e => {
          e.preventDefault();
          axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                // this.props.history.push('/protected');
            })
      }

    render(){
        return(
           <div>
               <form onSubmit={this.login}>
                   {/* username */}
                   <input
                        placeholder='username'
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                   {/* password */}
                   <input
                        placeholder='password'
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
               </form>
           </div>
        )
    }
}
export default Login;
