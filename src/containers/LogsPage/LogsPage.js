import React, {Component} from 'react';
import LogTable from "../../components/LogTable/LogTable";

class LogsPage extends Component {
    render() {
        return (
            <div>
                <LogTable serviceName="All" />
            </div>
        );
    }
}

export default LogsPage;