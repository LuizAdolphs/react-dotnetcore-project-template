import React from 'react';
import { Route, Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import 'bootstrap/dist/css/bootstrap.css';

import Login from './login';
import Home from './home';

class App extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {    
        if(!this.props.isLogged) {
            this.props.toLogin();
        }
    }

    render() {
        return (
            <div>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </main>
            </div>
        );
    }
}; 

const mapStateToProps = state => ({
    isLogged: state.login.isLogged
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toLogin: () => push('/login')
}, dispatch);

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);