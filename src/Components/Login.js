import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Login.css";
import LoginIcon from '@mui/icons-material/Login';

const strengthLabels = ["Weak", "Medium", "Strong"];

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      strength: ''
    };
  }

  getStrength(password) {
    let indicator = -1;
    if (/[a-z]/.test(password)) indicator++;
    if (/[A-Z]/.test(password)) indicator++;
    if (/\d/.test(password)) indicator++;
    if (/[^a-zA-Z0-9]/.test(password)) indicator++;
    if (password.length >= 16) indicator++;
    return strengthLabels[indicator];
  }

  handleChange = (event) => {
    const password = event.target.value;
    const strength = this.getStrength(password);
    this.setState({ password, strength });
    // You can perform additional actions here, such as calling a prop function
    // For example: this.props.onChangePassword(password);
  };

  render() {
    const { password, strength } = this.state;
    const strengthClassName = strength ? strength.toLowerCase() : '';

    return (
      <div>
        <div className="background"></div> 
        <div className="card">
          <div className="logo"><LoginIcon fontSize="large"/></div> 
          <h2>Welcome Back</h2> 
          <form className="form"> 
            <input type="email" placeholder="Username" /> 
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            
            <div className={`strength ${strengthClassName}`}>
              {strength && `${strength} password`}
            </div>
            <button>Sign In</button> 
          </form> 
          <div className="footer"> Need an account? Sign up <a href="#">here</a> </div> 
        </div>
      </div>
    );
  }
}

export default Login;
