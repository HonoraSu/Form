import React, { Component } from 'react';
import Test from './component/Test'
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import Form from './component/Form'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});
const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <div>
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App
