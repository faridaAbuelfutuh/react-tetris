import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly
import { Provider } from 'react-redux';
import { Store } from 'redux'; // Import Store type
import store from './store';
import App from './containers'; // Removed trailing slash, TS resolves index.tsx automatically
import './unit/const';
import './control';
import { subscribeRecord } from './unit';

// Explicitly type the store - replace 'any' with a more specific State type later
const typedStore: Store<any> = store;

subscribeRecord(typedStore); // 将更新的状态记录到localStorage

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <Provider store={typedStore}>
      <App />
    </Provider>,
    rootElement,
  );
} else {
  console.error('Failed to find the root element');
}

