import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

// import * as actions from "../store/actions";
import * as actions from '../../store/actions';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'abc',
      password: '123',
      isShowed: false,
    };
  }
  handleOnChangeUserName = (event) => {
    this.setState({ username: event.target.value });
  };
  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleLogin = () => {
    console.log(this.state.username);
    console.log(this.state.password);
  };
  handleHideShowPassword = () => {
    this.setState({ isShowed: !this.state.isShowed });
  };
  render() {
    return (
      <div className='login-background'>
        <div className='login-container'>
          <div className='login-content row'>
            <div className='col-12 text-center text-login'>Login</div>
            <div className='col-12 form-group login-input'>
              <label>Username:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your username'
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
              />
            </div>
            <div className='col-12 form-group login-input'>
              <label>Password:</label>
              <div className='custom-input-password'>
                <input
                  className='form-control'
                  type={this.state.isShowed ? 'text' : 'password'}
                  placeholder='Enter you password'
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                />
                {this.state.isShowed === false ? (
                  <i
                    class='far fa-eye'
                    onClick={this.handleHideShowPassword}
                  ></i>
                ) : (
                  <i
                    class='fas fa-eye-slash'
                    onClick={this.handleHideShowPassword}
                  ></i>
                )}
              </div>
            </div>
            <div className='col-12'>
              <button className='btn-login' onClick={() => this.handleLogin()}>
                Login
              </button>
            </div>
            <div className='col-12'>
              <span className='forgot-passsword'>Forgot your password?</span>
            </div>
            <div className='col-12 text-center'>
              <span className='text-other-login'>Or Login with:</span>
            </div>
            <div className='col-12 social-login'>
              <i class='fab fa-google-plus-g google'></i>
              <i class='fab fa-facebook-f facebook'></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
