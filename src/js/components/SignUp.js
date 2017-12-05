import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="divlogin">
                <h2>Registreit</h2>
                <p>Write mail</p>
                <input type='email'/>
                <p>Write Login</p>
                <input type='text'/>
                <p>Write password</p>
                <input type='password'/>
                <button className="loginbutton">Login</button>
                <Link to={'/signIn'} key={'lol'}><p>SignIn</p></Link>
            </div>
        )
    }
}