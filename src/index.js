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
        box-sizing: border-box;
        margin: 0;
        //-webkit-text-stroke-width: .05px;
        //-webkit-text-stroke-color: white;
        -webkit-font-smoothing: antialiased;
    }
`

const Root = () => <App/>;



render(<Root/>, document.querySelector('#root'));
