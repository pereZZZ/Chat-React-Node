import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import io from 'socket.io-client';
const socket = io('http://localhost:8000');
// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:8000');

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state={
            msgs:[]}
    }


    msgon = () =>{
        socket.emit('msgtochat',this.refs.msg.value);
        this.refs.msg.value="";
    }

    componentDidMount(){
        var a;
        socket.on('msgfromchat', (msg) => {
            a=msg;
            console.log(a);
            this.setState({msgs:[...this.state.msgs, a]})
        });
    }

    render() {
        return (
            <div className="App">
                <div id="Allmsg">
                    {this.state.msgs.map((item)=>{
                        return <p>{item}</p>
                    })}
                </div>
                <input type="text" className="msg" ref="msg" defaultValue=""/>
                <button className="msqenter" onClick={this.msgon}>msg</button>
            </div>
        )
    }
}