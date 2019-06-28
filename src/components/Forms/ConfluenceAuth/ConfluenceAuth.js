import React, {Component} from 'react';
import './ConfluenceAuth.css';

import axios from 'axios';

class ConfluenceAuth extends Component {
    state = {
        username: '',
        password: '',
        workspace: '',
    };

    getSlack = () => {
        axios.get('https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=665321738901.665247839939').then(response =>{
           console.log(response);
        });
    };

    submitHandler = () => {
        console.log('Submit form', this.state);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    testConnectionHandler = () => {
        console.log('Testing connection');
    };

    render() {
        return (
            <div className="pm-component"  id="slack-auth">
                <form>
                    <h3 className="pm-title">Confluence Authorization</h3>
                    <fieldset>
                        <input
                            className="pm-input"
                            name="username"
                            placeholder="Username"
                            type="text" tabIndex="1"
                            onChange={this.handleChange}
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            className="pm-input"
                            placeholder="Password"
                            name="password"
                            type="password"
                            tabIndex="2"
                            required
                            onChange={this.handleChange}
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            className="pm-input"
                            placeholder="Workspace"
                            name="workspace"
                            type="url"
                            tabIndex="3"
                            required
                            onChange={this.handleChange}
                        />
                    </fieldset>
                    <div className="pm-row-inline">
                        <button className="pm-button" type="button" onClick={this.testConnectionHandler}>Test Connection</button>
                        <button className="pm-button" type="submit" onClick={this.submitHandler}>Connect</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default ConfluenceAuth;