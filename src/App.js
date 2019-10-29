import React from 'react';
import './App.css';
import Input from './components/Input';

class App extends React.Component {
  state = {
    username: ' ',
    password: ' '
  }

  handlefieldChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <div>
          <label>Username</label>
          <Input
            name="username"
            value={this.state.username}
            onChange={event => this.handlefieldChange(event)}
            inputValidations={[
              {
                name: 'minLengthError',
                params: {
                  minLength: 3,
                  message: 'please write minimum 3 letter'
                }

              }
            ]} />
        </div>
        <div>
          <label>Password</label>
          <Input
            name="password"
            value={this.state.password}
            type="password"
            onChange={event => this.handlefieldChange(event)}
          />
        </div>
        <button onClick={() => console.log(this.state)}>
          submit
      </button>
      </div>

    );
  }
}
export default App;
