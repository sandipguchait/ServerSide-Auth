import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/Signup';
import Feature from './components/Feature';
import Reducer from './reducers/auth';
import SignOut from './components/auth/SignOut';
import SignIn from './components/auth/SignIn';


const Root = () => (
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome} />
        </App>
        <Route path="/signup" component={SignUp} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
    </BrowserRouter>
)

const store = createStore(
    Reducer, 
    {auth: {authenticated: localStorage.getItem('token')}},
    composeWithDevTools(
        applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
<Provider store={store}>
    <Root/>
</Provider>, 
document.getElementById('root'));