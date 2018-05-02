import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  handleInputChange = event => {
  const name = event.target.name
    this.setState({
      [name] : event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"
            value={this.state.passwrd}
            onChange={this.handleInputChange}
             />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
