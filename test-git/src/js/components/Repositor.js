import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {objmsg} from '../actions';

export default class Repositor extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div className='card'>
            <a href={this.props.item.html_url}>{this.props.item.html_url}</a>
        </div>
        )
    }
}