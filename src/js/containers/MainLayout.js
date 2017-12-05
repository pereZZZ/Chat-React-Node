import React from 'react';
import SignUPAndSignIN from '../components/SignUPAndSignIN'
import {Route, Link} from 'react-router-dom'
import SignUp from '../components/SignUp.js'
import SignIn from '../components/SignIn.js'
import Chat from '../components/Chat.js'

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
            <div>
                <Route path="/" component={SignUPAndSignIN}/> 
                <Route path="/signup" component={SignUp}/> 
                <Route path="/signin" component={SignIn}/>
                <Route path="/chat" component={Chat}/>
            </div>
            
            //     <div className="row">
            //         <div className="col-sm-12">
            //         </div>
            //     </div>             
            // </div>

        ); 
    }
}

