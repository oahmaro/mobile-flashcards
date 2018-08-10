import {AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'DECKS'

export const setStorage = () => {
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({}))
}