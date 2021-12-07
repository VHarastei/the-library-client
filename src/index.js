import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { saveState } from 'utils/saveState';
import App from './App';
import './index.css';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Router>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </Router>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(saveState);
store.subscribe(rerenderEntireTree);
