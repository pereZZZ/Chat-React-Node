import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <header>
                <div className="header">
                    <div style={{backgroundImage: 'url('+ require("../../img/logo.png")+')'}} className='logo'></div>
                    <div className="profile-block">
                        <div className="profile-img"></div>
                        <Link to={'/profile'} className='my-profile'>My profile</Link>
                    </div>
                </div>

            </header>
        )
    }
}