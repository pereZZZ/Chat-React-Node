import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignUp from './SignUp';
import {Route, Link, Redirect} from 'react-router-dom'


// const mapStateToProps = (state, ownProps) => {
//     return {url: ownProps}
// }
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({zzz}, dispatch)
// }

// @connect (mapStateToProps, mapDispatchToProps)
export default class SignUPAndSignIN extends Component {
    constructor(props) {
        super(props);
    }
   
    SignINorSignUP = () => {
        console.log(this.props.location.pathname);
        // if(this.props.location.pathname=='/'){
        //     this.props.history.push("/chat");
        // }else{
            // this.props.history.push("/signin");
            // <Redirect push to="/signup"/>
            // <Redirect push to="/signin"/>
        // }
    }

    render() {
        return (
            <div>
            {this.SignINorSignUP()}
            </div>
        )
    }
}