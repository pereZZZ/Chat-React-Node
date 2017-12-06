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


    msgon = (event) =>{
        if(event.key == 'Enter'){
            socket.emit('msgtochat',this.refs.msg.value);
            this.refs.msg.value="";
        }
    }

    componentDidMount(){
        var a;
        socket.on('msgfromchat', (msg) => {
            a=msg;
            this.setState({msgs:[...this.state.msgs, a]})
        });
    }

    render() {
        return (
            <div className="App">
                <div id="Allmsg">
                    {this.state.msgs.map((item, index)=>{
                        return <div className="OneMsg"><div className="LogoUser"></div><div className="Msg">
                        <p className="UserName">User</p><p>at</p><p className="Data">Data</p><hr/>
                        <p className="Text" key={index}>{item}</p></div></div>
                    })}
                </div>
                <div className="type">
                    <input type="text" className="msg" ref="msg" defaultValue="" onKeyPress={this.msgon}/>
                    {/* <button className="msqenter" onClick={this.msgon}>msg</button> */}
                </div>
            </div>
        )
    }
}