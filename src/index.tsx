import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import allReducers from './services/reducers/rootReducer';

const store = createStore(allReducers);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
