import React, {Component, Fragment} from "react";

import SlackTags from "../../components/Forms/SlackTags/SlackTags";
import SlackAuth from "../../components/Forms/SlackAuth/SlackAuth";

import './SlackPage.css';
import LogTable from "../../components/LogTable/LogTable";

class SlackPage extends Component {
    render() {
        return (
            <Fragment>
                <div id="slack-page">
                    <div className="pm-row">
                        <div className="pm-col-2 col">
                            <SlackAuth location={this.props.location} />
                        </div>
                        <div className="pm-col-2 col">
                            <SlackTags />
                        </div>
                    </div>
                    <div>
                        <LogTable serviceName="Slack" />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SlackPage;