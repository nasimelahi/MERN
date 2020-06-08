import React from 'react';
import AppNavbar from './component/AppNavbar';
import ShoppingList from '../src/component/ShoppingList';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
    </Provider>
  );
}

export default App;
