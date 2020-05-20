import React from 'react';

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


    render(){
        return(
           <div>
               <form>
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
