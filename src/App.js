import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router";

import './App.css';
import routes from './routes';
import Sidebar from "./containers/Sidebar/Sidebar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar routes={routes} />
                <main>
                    <Switch>
                        {routes.map((route, idx) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={idx}
                                exact
                            />
                        ))}
                        <Redirect from="/" to="/slack" exact />
                        <Route render={() => <h1>404 / Page not found !!! Go away ! Please go away !!!</h1>} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withRouter(App);