import React from 'react';
import {NavLink} from "react-router-dom";

import './Sidebar.css';
import LastSyncView from "./LastSyncView";

const Sidebar = ({ routes }) => {
    return (
        <nav className="menu" tabIndex="0">
            <div className="smartphone-menu-trigger" />
            {routes.map((route, idx) => (
                <NavLink
                    key={idx}
                    tabIndex="0"
                    className={`link icon-${route.class}`}
                    activeClassName='is-active'
                    to={route.path}
                >
                    <span>{route.name}</span>
                    <LastSyncView service={route.name}/>
                </NavLink>
            ))}
        </nav>
    );
};

export default Sidebar;