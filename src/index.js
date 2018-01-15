import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from "./components/App";

import { injectGlobal } from "styled-components";

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
    a {
        text-decoration: none;
    }
    h1,
    h2 {
        font-weight: lighter;
    }
    h1 {
        font-size: 3.2em;
        font-family: "Playfair Display", serif;
        margin-bottom: 10px;
        width: 60%;
    }
    h2 {
        font-size: 2.2em;
        margin-top: 8px;
        font-family: "Playfair Display", serif;
    }
    p {
        font-size: 1.45em;
    }
`;

const Root = () => <App />;

render(<Root />, document.querySelector("#root"));
