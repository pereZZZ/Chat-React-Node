import React from 'react';
import SignUPAndSignIN from '../components/SignUPAndSignIN'
import {Route, Link} from 'react-router-dom'
import SignUp from '../components/SignUp.js'
import SignIn from '../components/SignIn.js'
import Chat from '../components/Chat.js'
import Profile from '../components/Profile.js'

export default class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div className="app">
            //     <div className="row">
            //         <div className="col-sm-12">
            //         </div>
            //     </div>
            <div className='main-wrapper'>
                <div className="centered">
                    <Route path="/chat" component={Chat}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </div>
            
            //     <div className="row">
            //         <div className="col-sm-12">
            //         </div>
            //     </div>             
            // </div>

        ); 
    }
}

