import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import LoginPage from './pages/LoginPage/LoginPage'
import CardsPage from './pages/Cards-page/CardsPage';
import SingleCardPage from './pages/specific-card/SingleCardPage'
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={ CardsPage } />
            <Route path="/card/:id" component={ SingleCardPage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/contact" component={ ContactPage }/>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
