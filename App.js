import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
          <DeckList />
      </Provider>
    );
  }
}