import React from 'react';
import {Link} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// Why is this component on update and not componentDidMount
  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.processForm(this.state);
  }

  update(place){
    return (event) => {
      this.setState({[place]: event.target.value});
      // might need to change this to currentTarget
    };
  }

  render(){
    const link = this.props.formType === 'login' ? 'signup' : 'login';
    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);

    return (
      <div>
        <h1>{this.props.formType}</h1>
        <Link to={`/${link}`}>{link}</Link>

        <ul>
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.username}
            onChange={this.update('username')} />

          <input type='text'
            value={this.state.password}
            onChange={this.update('password')} />

          <input type='submit' value='Submit' />
        </form>

      </div>
    );
  }
}

export default SessionForm;
