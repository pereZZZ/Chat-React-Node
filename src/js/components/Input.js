import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import io from 'socket.io-client';
const socket = io('http://localhost:8000');``

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

    render() {
        return (
            <div className="type">
                <input type="text" className="msg" ref="msg" defaultValue="" onKeyPress={this.msgon}/>
            </div>
        )
    }
}