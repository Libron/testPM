import React, {Component} from 'react';
import SyncSettings from "../../components/SyncSettings/SyncSettings";
import ConfluenceAuth from "../../components/Forms/ConfluenceAuth/ConfluenceAuth";

class SettingsPage extends Component {
    render() {
        return (
                <div className="pm-row">
                    <div className="pm-col-2"><ConfluenceAuth/></div>
                    <div className="pm-col-2">
                        <div className="pm-component">
                            <SyncSettings />
                        </div>
                    </div>
                </div>
        );
    }
}

export default SettingsPage;