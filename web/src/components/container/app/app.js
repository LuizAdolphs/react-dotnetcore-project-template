import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../home/home';
import Login from '../login/login';

class App extends React.Component {
    render() {
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </main>
        </div>
    }
};

export default App;