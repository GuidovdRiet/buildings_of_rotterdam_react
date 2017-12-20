import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from './components/App';

import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        font-size: 62.5%;
        //-webkit-text-stroke-width: .05px;
        //-webkit-text-stroke-color: white;
        -webkit-font-smoothing: antialiased;
    }
`

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    )
}



render(<Root/>, document.querySelector('#root'));
