import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {objmsg} from '../actions';
import io from 'socket.io-client';
import Input from './Input';
import SelectRooms from "../components/SelectRooms"
const socket = io('http://localhost:8000');
const mapDispatchToProps = dispatch => ( bindActionCreators({objmsg}, dispatch) );


@connect(null, mapDispatchToProps)
export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state={
            date:[],
            msgs:[]
        }
    }

    componentDidMount(){
        var a;
        var b;
        var c;
        socket.on('msgfromchat', (msg) => {
            a=msg;
            b=new Date()
            c=b.getFullYear() + '-' + (b.getMonth() + 1) + '-' + b.getDate();
            this.setState({date:[...this.state.date, c],
                msgs:[...this.state.msgs, a]})
        });
    }

    render() {
        return (
        <div>
            <Header />
            <div className="main-chat-wrapper">
            <SelectRooms />
            <div className="App">
                <div id="Allmsg">
                    {this.state.msgs.map((item, index)=>{
                        return <div className="OneMsg"><div className="LogoUser"></div><div className="Msg">
                        <p className="UserName">User</p><p>at</p><p className="Data">{this.state.date[index]}</p><hr/>
                        <p className="Text" key={index}>{item}</p></div></div>
                    })}
                </div>
                <div className="type">
                    <Input/>
                </div>
                </div>
                </div>

            </div>
        )
    }
}