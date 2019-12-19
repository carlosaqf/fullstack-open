import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UnicafeApp from './unicafe/UnicafeApp'
import AnecdotesApp from './anecdotes/AnecdotesApp'
import AppTwo from './part2/AppTwo'
import { notes } from './part2/AppTwo'

ReactDOM.render(<AppTwo notes={notes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

