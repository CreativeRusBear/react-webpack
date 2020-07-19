import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent.jsx';

const Pizza = asyncComponent(() => import('./containers/Pizza/Pizza.jsx'));
const Users = asyncComponent(() => import('./containers/Users/Users.jsx'));

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users}/>
                    <Route path="/pizza" component={Pizza}/>
                </div>
            </div>
        )
    }
}