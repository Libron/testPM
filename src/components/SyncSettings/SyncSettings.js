import React, {Component} from 'react';
import './SyncSettings.css'

import { FAKEDATA } from "../../fakeData";

class SyncSettings extends Component {

    render() {
        return (
            <div id="sync-settings">
                <table style={{width: '315px'}}>
                    <tr>
                        <td><span>Syncronization frequency:</span></td>
                        <td><select>
                            <option>Everyday</option>
                            <option>Every week</option>
                            <option>Every month</option>
                            <option>Every year</option>
                        </select></td>
                    </tr>
                    {FAKEDATA.services.map(srv => (
                        <tr>
                            <td><span>{srv.serviceName} enabled</span></td>
                            <td> <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round" />
                            </label></td>
                        </tr>
                    ))}
                </table>


            </div>
        );
    }
}

export default SyncSettings;