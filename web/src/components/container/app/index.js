import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from '../login';

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Login} />
        </main>
    </div>
);

export default App;