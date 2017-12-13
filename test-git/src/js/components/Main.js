import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {objmsg} from '../actions';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        fetch('https://api.github.com/pereZZZ')
          .then(response => response.json())
          .then(data => {
            console.log(data)
          });
      }

    render() {
        return (
        <div className='container'>
            <Header />
            <Footer />
        </div>
        )
    }
}