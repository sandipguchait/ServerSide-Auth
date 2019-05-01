import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import Header from './components/Header';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/Signup';

import Reducer from './reducers/auth';
const Root = () => (
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome} />
        </App>
        <Route path="/signup" component={SignUp} />
    </BrowserRouter>
)

const store = createStore(
    Reducer, 
    composeWithDevTools(
        applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
<Provider store={store}>
    <Root/>
</Provider>, 
document.getElementById('root'));