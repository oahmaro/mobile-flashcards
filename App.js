import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { white, blue } from './utils/colors'
import { Constants } from 'expo'

function FlashCardStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  Deck: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK '
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: blue, 
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar  backgroundColor={blue}/>
          <Tabs />
        </View>
      </Provider>
    );
  }
}