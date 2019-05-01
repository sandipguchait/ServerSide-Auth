import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import App from './components/App';
import Welcome from './components/Welcome';


const Root = () => (
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome} />
        </App>
    </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('root'));