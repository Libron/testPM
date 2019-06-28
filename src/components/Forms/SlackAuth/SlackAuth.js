import React, {Component} from 'react';
import './SlackAuth.css';

class SlackAuth extends Component {
    state = {
        username: '',
        password: '',
        workspace: '',
        isSignedIn: false
    };

    componentDidMount() {
        if (this.props.location.search) {
            console.log(this.props.location.search);
            this.setState({isSignedIn: !this.state.isSignedIn});

        }
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
                {!this.state.isSignedIn ?    <a
                    href="https://slack.com/oauth/authorize?scope=channels%3Ahistory&client_id=665321738901.665247839939"
                >
                    <img
                        alt="Sign in with Slack"
                        height="40"
                        width="172"
                        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
                        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"/>
                </a> : <h1>Connected to Slack !</h1>}

            </div>
        );
    }
}

export default SlackAuth;