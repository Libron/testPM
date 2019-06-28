import React from 'react';
import './LogTable.css';

import {FAKEDATA} from "../../fakeData";

const LogTable = (props) => {
    return (
        <div className="pm-component">
            <h2 className="pm-title">{props.serviceName} Logs:</h2>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Message</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                {FAKEDATA.logs.map((log, idx) => (
                    <tr key={idx}>
                        <td>{log.time}</td>
                        <td>{log.message}</td>
                        <td>{log.service}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LogTable;