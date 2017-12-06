import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <Header />
                <div className="profile-wrapper">
                    Profile
                </div>
            </div>
        )
    }
}