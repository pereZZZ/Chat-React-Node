import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom'

export default class Signin extends Component {
    constructor(props) {
        super(props);
    }

    login=()=>{
        var lol='1';
        fetch('/lol',
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({a:lol})
        }).then(function(res) {
            return res.json();
          }).then(function(data) {
            console.log('Created Gist:'+data);
          });
    }

    render() {
        return (
            <div className="divlogin">
                <h2>Login</h2>
                <p>Write Login</p>
                <input type='text'/>
                <p>Write password</p>
                <input type='password'/>
                <button onClick={this.login}className="loginbutton">Login</button>
                <Link to={'/signup'} key={'lol'}><p>SignUp</p></Link>
            </div>
        )
    }
}