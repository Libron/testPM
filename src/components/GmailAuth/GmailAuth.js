import React, {Component} from "react";
import CONFIG from "../../config";
import { GoogleLogin } from 'react-google-login';
import './GmailAuth.css';

class GmailAuth extends Component {

    state = {
        isSignedIn: false
    };

    loginHandler = (googleData) => {
        if (!googleData.error) {
            // login action to backend. sending googleData to backend
            console.log('Login data from Google', googleData);
        }

        this.setState({isSignedIn: !this.state.isSignedIn});
    };

    render() {
        return (
            <div className="pm-component">
                {!this.state.isSignedIn ?  <GoogleLogin
                    className="google"
                    clientId={CONFIG.googleClientId}
                    responseType="code"
                    buttonText="Login with Google"
                    onSuccess={this.loginHandler}
                    onFailure={this.loginHandler}
                    cookiePolicy={'single_host_origin'}
                    accessType="offline"
                /> :  <div><h1>Connected to Google !</h1><p>Email: kokorin@gmail.com</p></div> }

            </div>
        );
    }
}

export default GmailAuth;




















