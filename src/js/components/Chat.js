import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom'

export default class Chat extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(){return false}
    lisinig = () => {
        var socket = io();
        $('form').submit(function(){
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });
        socket.on('srat',function(data){
            console.log(data.lol);
        })
        socket.on('chat message', function(data){
          $('#messages').append('<li><span style="color:red;"> '+data.userid+'</span>'+data.msg+'</li>');
        });
        socket.on('bb',function(data){
          $('#messages').append('<li><span style="color:green;"> '+data+' bb lolka</span></li>');
        })
    }

    render() {
        return (
            <div>
                <ul id="messages"></ul>
                <form action="">
                    <input id="m" />
                    <button>Send</button>
                </form>
                {this.lisinig}
            </div>
        )
    }
}