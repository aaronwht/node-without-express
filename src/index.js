import React from 'react';
import ReactDOM from 'react-dom';
import WithoutExpress from "./WithoutExpress";
import Express from "./Express";

// change to true to use express
const useExpress = false;

if (!useExpress)
    ReactDOM.render(<WithoutExpress />, document.getElementById('root'));
else
    ReactDOM.render(<Express />, document.getElementById('root'));