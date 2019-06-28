import React, {Component, Fragment} from "react";
import GmailLabels from "../../components/Forms/GmailLabels/GmailLabels";

import "./GmailPage.css";
import GmailAuth from "../../components/GmailAuth/GmailAuth";
import MessagesList from "../../components/MessagesList4/MessagesList";

class GmailPage extends Component {
    state = {
        isActive: false
    };

    saveLabels = (e) => {
      e.preventDefault();
      this.setState({isActive: true})
    };

    render() {
        return (
            <Fragment>
                <div id="gmail-page">
                    <div className="pm-row">
                        <div className="pm-col-2 col">
                            <GmailAuth/>
                        </div>
                        <div className="pm-col-2 col">
                            <GmailLabels save={this.saveLabels}/>
                        </div>
                    </div>


                    {this.state.isActive ? <MessagesList /> : null }

                </div>
            </Fragment>
        );
    }
}

export default GmailPage;